import { pick, randInt, percentChance, jidNum } from '../lib/utils.js';

// ─── LEGENDARY SMILEY CYMOR — STATIC CONTENT POOLS ─────────────────────────
// Konten asli bot ini, bukan kutipan dari karya siapa pun — semua sengaja
// dibangun di sekitar motto bot: "No one does it better than me".
// Ini BUKAN chatbot AI — semua balasan dipilih acak dari daftar statis.

const SMILEY_QUOTES = [
    'Tenang aja, yang terkuat di sini cuma ada satu, dan itu aku — Legendary Smiley Cymor.',
    'Selama aku ada, kalian semua aman. No one does it better than me.',
    'Belajar itu penting, tapi rasa percaya diri lebih penting lagi.',
    'Aku nggak pernah kalah, karena aku selalu pastikan menang dulu sebelum bertarung.',
    'Limit itu cuma ada buat orang yang belum nemu batas sebenarnya.',
    'Yang lemah nggak punya pilihan. Yang kuat yang menentukan jalannya sendiri.',
    'Aku bukannya sombong, aku cuma jujur soal seberapa kuat aku.',
    'Kalau kamu jatuh, anggap aja itu pose keren buat bangkit lagi.',
    'Dunia ini luas dan penuh kemungkinan — kalau kamu berani melangkah.',
    'Guru yang baik itu bukan yang paling pintar, tapi yang paling percaya sama muridnya.',
    'Santai aja, semua juga akan baik-baik saja kalau aku turun tangan.',
    'Kekuatan tanpa rasa percaya diri itu sia-sia. Itu prinsip Legendary Smiley Cymor.',
];

const SMILEY_TECHNIQUES = [
    { name: 'Limitless Grin', desc: 'Senyum yang bikin lawan lupa kenapa mereka nantang duluan.' },
    { name: 'Signature Flex', desc: 'Gerakan pamer kepercayaan diri tingkat legendaris, tanpa ampun.' },
    { name: 'No-One-Does-It-Better Combo', desc: 'Gabungan gaya & skill yang jadi ciri khas Smiley Cymor — susah ditiru.' },
    { name: 'Domain Expansion: Endless Confidence', desc: 'Membuka aura percaya diri tanpa batas, melumpuhkan keraguan siapa pun di sekitarnya.' },
    { name: 'Legend Eyes', desc: 'Mata yang bisa lihat peluang menang duluan sebelum orang lain sadar itu ada.' },
    { name: 'Motto Reinforcement', desc: 'Memperkuat performa dengan mengulang motto: "No one does it better than me".' },
];

const SMILEY_ROASTS = [
    'Hadeh, kalau ketemu musuh selemah kamu, aku bisa sambil makan permen karet.',
    'Kamu tuh kayak sinyal wifi tetangga — lucu tapi nggak ngancem.',
    'Santai dikit kali, kamu tegang terus kayak lagi ngelawan yang terkuat.',
    'Kalau kamu sekuat omonganmu, dunia ini udah damai dari kemarin.',
    'Coba deh latihan dulu sebelum nantang Legendary Smiley Cymor ngomong gini.',
    'Kamu butuh lebih dari sekadar niat buat ngalahin aku, kawan.',
];

const SMILEY_HYPE = [
    'Kamu pasti bisa! Anggap aja kamu lagi dilatih langsung sama yang terkuat.',
    'Jangan ragu, jalanmu udah benar — tinggal jalan terus aja!',
    'Semangat! Bahkan legenda paling top pun mulai dari latihan kecil.',
    'Percaya diri itu separuh dari kemenangan. Sisanya, usaha kerasmu sendiri.',
    'Kamu lebih kuat dari yang kamu kira, cuma belum nemu momennya aja.',
    'Teruslah melangkah — Legendary Smiley Cymor pun dulu pernah jadi pemula.',
];

const SMILEY_FACTS = [
    'Legendary Smiley Cymor adalah developer & jiwa di balik bot ini.',
    'Motto resminya cuma satu: "No one does it better than me".',
    'Ciri khasnya adalah percaya diri tanpa batas, tapi tetap menghibur — bukan sombong kosong.',
    'Smiley Cymor dikenal sebagai sosok yang santai di luar, tapi serius soal bikin bot ini sekuat mungkin.',
    'Gaya khasnya: selalu pastikan menang duluan sebelum mulai kerja.',
];

function fmtName(jid) { return jidNum(jid); }

export const smileyCommands = {
    async smileyQuote(reply) {
        await reply(`💙 *LEGENDARY SMILEY CYMOR*\n\n_"${pick(SMILEY_QUOTES)}"_`);
    },

    async smileyTeknik(reply) {
        const t = pick(SMILEY_TECHNIQUES);
        await reply(`🌟 *TEKNIK SMILEY CYMOR*\n\n✨ *${t.name}*\n${t.desc}`);
    },

    async smileyRoast(reply, sender, mentioned) {
        const target = mentioned?.[0] ? `@${fmtName(mentioned[0])}` : `@${fmtName(sender)}`;
        await reply(`😏 *SMILEY NGEROAST*\n\n${target}\n\n_"${pick(SMILEY_ROASTS)}"_`);
    },

    async smileyHype(reply, sender, mentioned) {
        const target = mentioned?.[0] ? `@${fmtName(mentioned[0])}` : `@${fmtName(sender)}`;
        await reply(`💪 *SMILEY NYEMANGATIN*\n\n${target}\n\n_"${pick(SMILEY_HYPE)}"_`);
    },

    async smileyFact(reply) {
        await reply(`🧠 *FAKTA SMILEY CYMOR*\n\n${pick(SMILEY_FACTS)}`);
    },

    async smileyPower(reply, sender, mentioned) {
        // "Cek kekuatan" ala Smiley Cymor — random meter lucu-lucuan, bukan AI, cuma RNG.
        const target = mentioned?.[0] || sender;
        const power = randInt(1, 100);
        let title;
        if (power >= 95) title = '🔵 SETARA LEGENDARY SMILEY CYMOR!';
        else if (power >= 70) title = '🟣 Special Grade!';
        else if (power >= 40) title = '🟢 Grade 1, lumayan!';
        else title = '⚪ Masih perlu banyak latihan!';

        await reply(`⚡ *CEK KEKUATAN ALA SMILEY*\n\n@${fmtName(target)}\nPower Level: *${power}/100*\n${title}\n\n_"${percentChance(50) ? 'Nggak buruk, tapi masih jauh dari aku.' : 'Lumayan, tapi limitmu belum ketemu.'}"_`);
    },
};
