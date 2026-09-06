// ═══════════════════════════════════════════════════════════════════
//  SMILEYAI.JS — Mode Chat AI ala Legendary Smiley Cymor (.smileyai on/off)
// ═══════════════════════════════════════════════════════════════════
//  .smileyai on/off → toggle per chat/grup, DEFAULT ON. Hanya Admin
//  grup, Owner, atau Creator yang boleh mengubah (lihat commands/index.js
//  untuk command-nya, pola sama persis dengan .autoread/.self).
//
//  Saat mode ini ON:
//    - Di DM (japri)  : bot membalas SEMUA pesan teks biasa (bukan
//                        command) pakai gaya Legendary Smiley Cymor
//                        lewat AI.
//    - Di grup         : bot HANYA membalas kalau di-mention (@bot)
//                        atau pesannya me-reply/quote pesan bot
//                        sebelumnya — supaya bot tidak ikut nimbrung
//                        di setiap obrolan biasa member grup.
//
//  Dipanggil dari lib/messagePipeline.js untuk setiap pesan yang BUKAN
//  command (lihat pemanggilan handleSmileyAiChat() di sana).
// ═══════════════════════════════════════════════════════════════════

import { store, save } from './db.js';
import { log } from './logger.js';
import { areJidsSameUser } from '@whiskeysockets/baileys';
import { recallRealJid } from './lidMapping.js';
import settings from '../setting.js';

function smileyAiStore() { return store('smileyai', {}); }

export function isSmileyAiEnabled(jid) {
    const data = smileyAiStore();
    // Belum pernah diatur sama sekali untuk chat ini -> default ON,
    // sesuai permintaan: fitur ini aktif dari awal begitu bot dipasang.
    return data[jid]?.enabled !== false;
}

export function setSmileyAiEnabled(jid, val) {
    const data = smileyAiStore();
    data[jid] = { enabled: !!val };
    save('smileyai');
}

// ── Persona ────────────────────────────────────────────────────────
// Legendary Smiley Cymor: pede berlebihan (dalam artian menghibur),
// santai, gaul, dan selalu menutup dengan semangat motto bot ini —
// "No one does it better than me".
//
// PENTING (branding): instruksi eksplisit di bawah supaya AI TIDAK
// PERNAH menyebut/membocorkan nama model/AI lain (Gemini, ChatGPT,
// Llama, Meta AI, dst) — identitasnya harus konsisten "Smiley Cymor"
// saja, sesuai brand bot ini.
const SMILEY_AI_PERSONA =
    'Kamu adalah Legendary Smiley Cymor, asisten chat WhatsApp yang jadi jiwa dari bot ini. ' +
    'Gaya santai, gaul, pede berlebihan tapi menghibur, dan sesekali selipkan semangat motto ' +
    'kamu "No one does it better than me". Balas SINGKAT 1-3 kalimat, tanpa markdown. ' +
    'Identitasmu HANYA "Smiley Cymor" — jangan pernah bilang kamu AI/chatbot atau sebut nama ' +
    'model/bot/AI lain apapun (Gemini, ChatGPT, Llama, Meta AI, dst), walau ditanya langsung.';

// ── Pemanggilan AI eksternal ─────────────────────────────────────────
// Pakai api.siputzx.my.id — API gratis tanpa API key, dari layanan yang
// SAMA dengan yang sudah dipakai commands/bratCommands.js (BRAT_API_URL)
// supaya konsisten satu penyedia di seluruh proyek.
//
// Endpoint dipastikan "metaai" — "https://api.siputzx.my.id/api/ai/metaai"
// (bukan `/api/metaai`, yang tanpa segmen "/ai/" itu 404 karena route-nya
// memang tidak ada di situ).
//
// CATATAN: endpoint ini cuma terima SATU field teks polos bernama
// `query` (bukan `prompt`+`text` terpisah seperti endpoint lama). Karena
// tidak ada slot system-prompt terpisah, persona Smiley Cymor & pesan
// user digabung jadi satu string di buildQueryText() sebelum dikirim.
// Kalau balasan mulai terdengar seperti AI generik (bukan gaya Smiley
// Cymor) atau menyebut nama provider lain, kemungkinan endpoint ini
// proxy langsung ke produk pihak ketiga yang personanya tidak selalu
// bisa di-override lewat teks prompt — itu batasan API pihak ketiga,
// bukan bug di kode ini.
//
// CATATAN PENTING: endpoint & format respons API pihak ketiga gratis
// seperti ini TIDAK didokumentasikan resmi/stabil jangka panjang (bisa
// berubah sewaktu-waktu tanpa pemberitahuan). Kalau di kemudian hari
// `.smileyai` berhenti membalas / selalu kena pesan fallback error,
// kemungkinan besar endpoint, nama parameter (`query`), atau format
// respons yang berubah — cukup sesuaikan AI_API_URL, buildQueryText(),
// dan/atau parseReplyText() di bawah, bagian lain (toggle, deteksi
// trigger, dst) tidak perlu diubah sama sekali.
const AI_API_URL = 'https://api.siputzx.my.id/api/ai/metaai';

async function getSmileyAiReply(userText) {
    const text = userText.slice(0, 500); // dibatasi supaya tidak kepanjangan saat di-encode ke URL
    const timeout = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error(`timeout ${ms / 1000}s`)), ms));

    // Endpoint /api/ai/metaai cuma terima SATU field teks polos: `query`.
    // Tidak ada slot system-prompt terpisah, jadi persona Smiley Cymor
    // digabung manual di depan pesan user supaya tetap ada usaha
    // menjaga gaya balasannya.
    function buildQueryText() {
        return `${SMILEY_AI_PERSONA}\n\nPesan user: ${text}`;
    }

    function parseReplyText(data) {
        const t = data?.data ?? data?.result ?? data?.message ?? data?.response ?? data?.answer;
        return typeof t === 'string' && t.trim() ? t.trim() : null;
    }

    const queryText = buildQueryText();

    // Percobaan 1: GET dengan query param `query` — spesifikasi endpoint
    // /api/ai/metaai (BUKAN `prompt`+`text` seperti endpoint lama).
    try {
        const url = new URL(AI_API_URL);
        url.searchParams.set('query', queryText);
        const res = await Promise.race([fetch(url.toString()), timeout(20_000)]);
        if (res.ok) {
            const data = await res.json();
            const reply = parseReplyText(data);
            if (reply) return reply;
            throw new Error(`format respons tak dikenal: ${JSON.stringify(data).slice(0, 200)}`);
        }
        throw new Error(`GET HTTP ${res.status} ${res.statusText}`);
    } catch (getErr) {
        // Fallback ke POST kalau GET gagal — endpoint API pihak ketiga
        // gratis semacam ini kadang butuh POST+JSON body, bukan GET+query
        // string. Nama field body tetap `query`, konsisten sama versi GET.
        try {
            const res = await Promise.race([
                fetch(AI_API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: queryText }),
                }),
                timeout(20_000),
            ]);
            if (res.ok) {
                const data = await res.json();
                const reply = parseReplyText(data);
                if (reply) return reply;
                throw new Error(`format respons tak dikenal: ${JSON.stringify(data).slice(0, 200)}`);
            }
            throw new Error(`POST HTTP ${res.status} ${res.statusText}`);
        } catch (postErr) {
            throw new Error(`GET gagal (${getErr.message}); POST gagal (${postErr.message})`);
        }
    }
}

// ── Deteksi trigger ───────────────────────────────────────────────
// Cek berlapis supaya mention/reply ke bot tetap terdeteksi walau
// WhatsApp melaporkan identitas bot sebagai @lid (identifier privasi),
// bukan nomor asli:
//   1) areJidsSameUser() bawaan Baileys (menangani suffix device :XX)
//   2) perbandingan angka nomor polos (fallback tambahan)
//   3) cache lid<->nomor asli (recallRealJid, lib/lidMapping.js),
//      dicek DUA ARAH — jid bot maupun jid pembanding bisa sama-sama
//      berupa @lid
function botIdentities(sock) {
    return [sock.user?.jid, sock.user?.lid, sock.user?.id].filter(Boolean);
}

function sameJid(a, b) {
    if (!a || !b) return false;
    if (a === b) return true;
    try { if (areJidsSameUser(a, b)) return true; } catch {}
    const numA = a.split('@')[0].split(':')[0];
    const numB = b.split('@')[0].split(':')[0];
    if (numA === numB) return true;
    if (a.includes('@lid')) { const r = recallRealJid(a); if (r && sameJid(r, b)) return true; }
    if (b.includes('@lid')) { const r = recallRealJid(b); if (r && sameJid(r, a)) return true; }
    return false;
}

function isBotJid(jid, sock) {
    return botIdentities(sock).some(botId => sameJid(botId, jid));
}

function isBotMentioned(msg, sock) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    return mentioned.some(j => isBotJid(j, sock));
}

function isReplyToBot(msg, sock) {
    const quotedParticipant = msg.message?.extendedTextMessage?.contextInfo?.participant;
    return !!quotedParticipant && isBotJid(quotedParticipant, sock);
}

/**
 * Dipanggil dari messagePipeline.js untuk SETIAP pesan yang BUKAN
 * command. Return true kalau pesan ini "ditangani" oleh Smiley AI,
 * false kalau dilewati (mode off / trigger tidak cocok / dsb) — supaya
 * pemanggil tahu tidak perlu proses tambahan apapun.
 */
export async function handleSmileyAiChat(sock, msg, jid, body, isGroup) {
    if (!body || !body.trim()) return false;
    if (!isSmileyAiEnabled(jid)) return false;

    if (isGroup) {
        // Di grup: HANYA respon kalau di-mention atau reply ke pesan bot
        // — supaya bot tidak ikut nimbrung di obrolan biasa member grup.
        if (!isBotMentioned(msg, sock) && !isReplyToBot(msg, sock)) return false;
    }
    // Di DM: selalu boleh, tidak butuh mention.

    try {
        const reply = await getSmileyAiReply(body);
        await sock.sendMessage(jid, { text: reply }, { quoted: msg });
    } catch (err) {
        log.error(`SmileyAI: ${err.message}`);
        try {
            await sock.sendMessage(jid, {
                text: `💭 ${settings.creatorName || 'Smiley Cymor'} lagi susah sinyal buat mikir, coba lagi bentar ya.\n\n_Debug: ${err.message.slice(0, 300)}_`
            }, { quoted: msg });
        } catch {}
    }
    return true;
}
