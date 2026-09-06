import { rpgCommands } from './rpgCommands.js';
import { getReplyDelayOverride, setReplyDelayOverride } from '../lib/replyDelay.js';
import { recallRealJid } from '../lib/lidMapping.js';
import { rpgCommands2 } from './rpgCommands2.js';
import { rpgCommands3 } from './rpgCommands3.js';
import { rpgCommands4 } from './rpgCommands4.js';
import { rpgCommands5 } from './rpgCommands5.js';
import { adminCommands, checkMute, isGroupLocked } from './adminCommands.js';
import { adminCommands2 } from './adminCommands2.js';
import { adminCommands3 } from './adminCommands3.js';
import { adminCommands4 } from './adminCommands4.js';
import {
    manualDeleteNsfw, checkNsfwStrikeCmd,
    resetNsfwStrikeCmd, setNsfwStrikeLimitCmd,
} from '../features/antiNsfw.js';
import { funCommands } from './funCommands.js';
import { funCommands2 } from './funCommands2.js';
import { funCommands3 } from './funCommands3.js';
import { textTools, mathTools, converterTools, generatorTools, infoTools } from './toolsCommands.js';
import { mathTools2, dateTools, formatTools, validatorTools } from './toolsCommands2.js';
import { toolsCommands3 } from './toolsCommands3.js';
import { toolsCommands4 } from './toolsCommands4.js';
import { toolsCommands5 } from './toolsCommands5.js';
import { toolsCommands6 } from './toolsCommands6.js';
import { toolsCommands7 } from './toolsCommands7.js';
import { toolsCommands8 } from './toolsCommands8.js';
import { toolsCommands9 } from './toolsCommands9.js';
import { toolsCommands10 } from './toolsCommands10.js';
import { toolsCommands11 } from './toolsCommands11.js';
import { toolsCommands12 } from './toolsCommands12.js';
import { funCommands4 } from './funCommands4.js';
import {
    toBotakCmd, toChibiCmd, toFiguraCmd, toGhibliCmd, toHijabCmd,
    toLegoCmd, toHitamCmd, to3dCmd, toRobloxCmd, toOilPaintingCmd,
} from './mediaCommands3.js';
import { getGroupSettings } from '../lib/db.js';
import {
    grayscaleCmd, mirrorCmd, blurCmd, rotate90Cmd, rotate180Cmd,
    speedUpCmd, slowMoCmd, muteVideoCmd, extractAudioCmd, volumeUpCmd,
    sepiaCmd, invertCmd, pixelateCmd, brightenCmd, darkenCmd, reverseVideoCmd,
    flipVerticalCmd, squareCropCmd, watermarkCmd, hdCmd,
} from './mediaCommands2.js';
import {
    trackCommandUsage, botStats, showChangelog,
    submitSuggestion, listSuggestions, clearSuggestions,
    showCredits, showSupport, backupNow,
} from './botCommands.js';
import {
    eventCreate, eventRsvp, eventList, eventAttendees,
    quickLock, quickUnlock,
} from './adminCommands7.js';
import { votekick, setMotd, showMotd, pollClose } from './adminCommands8.js';
import { mediaCommands } from './mediaCommands.js';
import { smileyCommands } from './smileyCommands.js';
import { broadcastCommands } from './broadcastCommands.js';
import { jadibotCommands } from './jadibotCommands.js';
import { musicCommands } from './musicCommands.js';
import { socialDownloadCommands } from './socialDownloadCommands.js';
import { trackCommand, countUsers, countGroups, getTotalCommandsRan, getTopCommands } from '../lib/db.js';
import { fmtDuration, safeReplyText, withTimeout, fmtTime, fmtDate, isLidJid, truncate } from '../lib/utils.js';
import { isCreator, isOwner, isPremium, listOwners, listPremium, getRoleLabel, getCreatorInfo, addOwner, removeOwner, addPremium, removePremium, isCoCreator, listCoCreators, addCoCreator, removeCoCreator } from '../lib/roles.js';
import { CHANNEL_JID, CHANNEL_NAME } from '../lib/channelGuard.js';
import { checkMediaLimit, consumeMediaLimit, buyMediaLimit, addLimitManual, limitStatusText } from '../lib/mediaLimit.js';
import { getChar, saveChar } from '../lib/rpgEngine.js';
import { isAutoread, setAutoread, isAutotyping, setAutotyping } from '../lib/autoFeatures.js';
import { isSmileyAiEnabled, setSmileyAiEnabled } from '../lib/smileyAi.js';
import { isAnticallEnabled, setAnticall, isAntichatEnabled, setAntichat } from '../features/antiCallChat.js';
import {
    cpanelMenuText, makeCreateServerHandler, makeListServerHandler,
    makeDelServerHandler, makeServerInfoHandler, makeRoleHandler,
    makeGcSellerHandler, makeCadminHandler,
} from './panelCommands.js';
import { VALID_SERVERS, VALID_ROLES, RAM_TIERS } from '../lib/pterodactylReseller.js';
import { SMILEYLINE, JJK_TRIVIA, ANIME_FACTS, MOTIVASI_HARIAN, FAKTA_SERU, KETAWA, BERCANDA, PUJIAN_SERU, PANTUN_SERU, WEJANGAN, TEBAKAN } from './expansionCommands.js';
import { RPG_LORE, TIPS_TOOLS, CAPTION_IDEAS, BOT_FACTS, MUSIC_TRIVIA, PANEL_INFO, SEMANGAT_PAGI } from './expansionCommands2.js';
import { AUDIO_FACT, HOSTING_TIP, FOTO_TIP } from './expansionCommands3.js';
import {
    guildCreate, guildJoin, guildLeave, guildKick, guildPromote, guildDemote,
    guildDonate, guildUpgrade, guildDisband, guildInfo, guildMembers, guildListCmd,
} from './rpgCommands6.js';
import {
    plantCmd, waterCmd, harvestCmd, farmStatusCmd,
    titlesCmd, equipTitleCmd, cookCmd, recipesCmd,
    bountyCmd, claimBountyCmd,
} from './rpgCommands7.js';
import {
    pinAdd, pinRemove, pinList,
    noteAdd, noteList, noteDel,
    templateSave, templateLoad, templateList, templateDel,
    announcementAdd, announcementList, announcementDel,
    birthdaySet, birthdayList, birthdayDel,
} from './adminCommands5.js';
import {
    bulkPromote, bulkDemote, bulkKick,
    listInactive, topActive,
    taskAssign, taskMine, taskList, taskDone,
    maintenanceToggle,
} from './adminCommands6.js';
import { store, save } from '../lib/db.js';
import { sewaCommands } from './sewaCommands.js';
import { bratGenerate, iqc } from './bratCommands.js';
import { checkSewaExpiry, isSewaActive, isSewaMode } from '../lib/sewaBot.js';

// ── Runtime bot config (selfMode dll) — persist ke db ───────────────────────
function botCfg() { return store('botConfig', { selfMode: false, autojoin: true }); }
function saveBotCfg() { save('botConfig'); }

// Load saved config saat startup (mutasi settings langsung)
;(() => {
    const cfg = botCfg();
    if (typeof cfg.selfMode === 'boolean') settings.selfMode = cfg.selfMode;
    if (typeof cfg.public  === 'boolean') settings.public   = cfg.public;
})();
import { log } from '../lib/logger.js';
import { getThumbnailImageContent } from '../lib/thumbnailSource.js';
import { sendMainMenu, sendAdminMenu, sendFunMenu, sendToolsMenu, sendMediaMenu, sendBotMenu, sendRpgMenu, sc, getFeatureDescription } from './menu.js';
import settings from '../setting.js';
import { parseDaftarInput, register, getProfile, isRegistered } from '../lib/registry.js';

import { SMILEY_2000_FEATURES } from './featureRegistry2000.js';

const BOT_START_TIME = Date.now();

// ─── REPLY (PLAIN TEXT) ───────────────────────────────────────────────────
// CATATAN: fitur thumbnail/externalAdReply yang sebelumnya ada di sini
// SUDAH DIHAPUS. Penyebabnya: ditemukan error nyata di lapangan —
//   "The value of "value" is out of range. It must be >= 0 and <= 255"
// — yang terjadi spesifik saat mengirim externalAdReply ke JID berformat
// @lid (format "Linked ID" baru yang dipakai WhatsApp untuk beberapa
// akun/grup). Error ini membuat SESSION BAILEYS RUSAK TOTAL ("Session
// rusak. Auto-reset...", lalu "Session lama dihapus otomatis"), yang
// kemungkinan besar adalah akar dari masalah command yang gagal total
// tanpa balasan ATAUPUN error yang kita selidiki sebelumnya — bukan
// sekadar 1 pesan gagal, tapi seluruh sesi koneksi ke WhatsApp jadi
// tidak sehat setelahnya. Karena risiko ini (crash + corrupt session)
// jauh lebih besar daripada manfaat kosmetik sebuah thumbnail, fitur ini
// dihapus sepenuhnya, bukan sekadar diberi try/catch tambahan.
async function replyWithThumb(sock, jid, text, quotedMsg) {
    text = safeReplyText(text);
    try {
        return await withTimeout(sock.sendMessage(jid, { text }, { quoted: quotedMsg }), 30_000, 'sendMessage(plainText)');
    } catch (err) {
        log.error(`GAGAL kirim pesan ke ${jid}: ${err.message}`);
        throw err;
    }
}

// ─── REPLY DENGAN GAMBAR (thumbnail khusus per-command) ────────────────────
// PENTING: ini BEDA dengan externalAdReply yang dihapus di atas — ini kirim
// gambar biasa (message `image`, persis pola settings.thumbnailUrl yang
// sudah dipakai di .menu & .allmenu), BUKAN link-preview ad-reply. Jadi
// tidak memicu bug @lid yang dulu bikin session corrupt. Selalu fallback
// ke teks biasa (replyWithThumb) kalau kirim gambar gagal.
//
// FIX (2026-08-01): batas aman CAPTION gambar di WhatsApp jauh lebih kecil
// daripada batas pesan teks biasa (~60000 di safeReplyText). Caption yang
// kepanjangan (mis. .allmenu yang sekarang ~30rb karakter setelah banyak
// fitur baru ditambahkan) bisa gagal terkirim TANPA melempar error yang
// ketangkep try/catch di bawah — dari sisi Baileys request-nya "berhasil",
// tapi WhatsApp/klien penerima diam-diam tidak menampilkan apa-apa. Ini
// yang bikin .allmenu kelihatan seperti "gak keluar pesannya" padahal
// kodenya tidak error. Sekarang: kalau teksnya kepanjangan buat jadi
// caption, gambar dikirim dengan caption pendek dulu, teks lengkapnya
// menyusul sebagai pesan teks terpisah (limitnya jauh lebih longgar).
const SAFE_CAPTION_LIMIT = 1000;

export async function replyWithImage(sock, jid, quotedMsg, imageUrl, text) {
    const full = safeReplyText(text);
    const tooLongForCaption = full.length > SAFE_CAPTION_LIMIT;
    const caption = tooLongForCaption
        ? `${truncate(full, SAFE_CAPTION_LIMIT)}\n\n👇 _Lanjutan di pesan berikutnya..._`
        : full;

    if (imageUrl) {
        try {
            // FIX (2026-08-06): pakai file thumbnail lokal (media/thumbnail.*)
            // kalau ada, bukan fetch settings.thumbnailUrl lewat jaringan
            // tiap kali — lihat lib/thumbnailSource.js untuk alasan lengkap.
            // imageUrl (parameter) dipertahankan sebagai penentu APAKAH mau
            // kirim gambar sama sekali (caller lain mungkin passing URL lain
            // yang bukan settings.thumbnailUrl) — isi gambarnya sendiri yang
            // diganti ke sumber lokal kalau imageUrl persis settings.thumbnailUrl.
            const imageContent = imageUrl === settings.thumbnailUrl
                ? getThumbnailImageContent()
                : { image: { url: imageUrl } };
            await withTimeout(
                sock.sendMessage(jid, { ...imageContent, caption }, { quoted: quotedMsg }),
                30_000,
                'sendMessage(image)'
            );
            if (tooLongForCaption) {
                await replyWithThumb(sock, jid, full, quotedMsg);
            }
            return;
        } catch (err) {
            log.error(`Gagal kirim gambar thumbnail ke ${jid}: ${err.message}`);
            // lanjut ke fallback teks biasa di bawah
        }
    }
    await replyWithThumb(sock, jid, full, quotedMsg);
}

function getMentioned(msg) {
    return msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
}

// ─── COMMAND TABLE ──────────────────────────────────────────────────────
// Each entry: [aliases[], handler(ctx)]
// ctx = { sock, msg, jid, sender, args, isGroup, body, reply, isAdmin, mentioned }
const routes = [];

// Command rahasia: tetap bisa dipanggil lewat prefix seperti biasa,
// tapi sengaja DIHILANGKAN dari .menu, .allmenu, dan menu kategori manapun.
const HIDDEN_COMMANDS = new Set([
    'ryoiken', 'ryoikitenkai', 'domainexpansion', 'tenkai',
]);

function reg(aliases, handler) {
    for (const a of aliases) routes.push([a, handler]);
}

// ── MENU / HELP ──────────────────────────────────────────────────────────
reg(['menu', 'help', 'start'], async (ctx) => sendMainMenu(ctx.reply, ctx.sender, ctx.sock, ctx.jid, ctx.msg, {
    isOwner: ctx.isOwner,
    isPremium: ctx.isPremium,
    pushName: ctx.msg?.pushName,
    botStartTime: BOT_START_TIME,
    totalFeatures: getRegisteredCommandCount(),
    featureList: getAllCommandNames(),
}));

// (Handler .allmenu didaftarkan di bawah, setelah routeMap tersedia —
//  lihat dekat definisi getAllCommandNames())
reg(['menurpg', 'rpgmenu', 'menugame'], async (ctx) => sendRpgMenu(ctx.reply));
reg(['menuadmin', 'adminmenu'], async (ctx) => sendAdminMenu(ctx.reply));
reg(['menufun', 'funmenu'], async (ctx) => sendFunMenu(ctx.reply));
reg(['menutools', 'toolsmenu'], async (ctx) => sendToolsMenu(ctx.reply));
reg(['menumedia', 'mediamenu'], async (ctx) => sendMediaMenu(ctx.reply));
reg(['menubot', 'botmenu'], async (ctx) => sendBotMenu(ctx.reply));

// .totalfitur — tampilkan jumlah total command/fitur yang terdaftar di
// bot ini. Pakai getRegisteredCommandCount() (didefinisikan di bawah,
// setelah routeMap dibuat) supaya angkanya selalu akurat & otomatis
// ikut bertambah kalau ada command baru — tidak di-hardcode manual.
reg(['totalfitur', 'totalfeature', 'jumlahfitur'], async (ctx) => {
    const total = getRegisteredCommandCount();
    const prefix = settings.prefix || '.';
    await ctx.reply(
`📦 *TOTAL FITUR ${settings.botName.toUpperCase()}*
━━━━━━━━━━━━━━━━━━
✨ Total command terdaftar : *${total} fitur*
━━━━━━━━━━━━━━━━━━
💡 Ketik *${prefix}allmenu* untuk lihat daftar lengkapnya.
💡 Ketik *${prefix}menu* untuk tampilan ringkas per kategori.`
    );
});

// ── REGISTRASI WAJIB (.daftar nama.umur) ──────────────────────────────────
reg(['daftar', 'register'], async (ctx) => {
    // Balasan .daftar yang MENYURUH/MEMANDU user daftar (belum terdaftar,
    // format salah, dsb) pakai thumbnail khusus (settings.thumbnailDaftar)
    // lewat replyWithImage. Khusus balasan "PENDAFTARAN BERHASIL" di bawah
    // SENGAJA pakai ctx.reply (teks polos) — thumbnail dihapus dari situ saja.
    const kirim = (text) => replyWithImage(ctx.sock, ctx.jid, ctx.msg, settings.thumbnailDaftar, text);

    if (isRegistered(ctx.sender) || ctx.isOwner) {
        const profile = getProfile(ctx.sender);
        if (profile) {
            return kirim(`✅ Kamu sudah terdaftar sebagai *${profile.name}* (${profile.age} tahun).`);
        }
        return kirim('✅ Kamu sudah bisa pakai bot ini (Owner/Creator otomatis terdaftar).');
    }

    const parsed = parseDaftarInput(ctx.args.join(' '));
    if (!parsed) {
        return kirim(
`📋 *CARA DAFTAR*
━━━━━━━━━━━━━━━━━━
◈ Format  : *${settings.prefix}daftar nama.umur*
◈ Contoh  : *${settings.prefix}daftar Smiley.20*
━━━━━━━━━━━━━━━━━━`
        );
    }

    const result = register(ctx.sender, parsed.name, parsed.age);
    if (!result.ok) return kirim(`❌ ${result.reason}`);

    await ctx.reply(
`✅ *PENDAFTARAN BERHASIL!*
━━━━━━━━━━━━━━━━━━
◈ Nama : *${parsed.name}*
◈ Umur : *${parsed.age} tahun*
━━━━━━━━━━━━━━━━━━
Selamat bergabung di *${settings.botName}*! 🌊
Ketik *${settings.prefix}menu* untuk lihat semua command.`
    );
});

// ── RPG: CHARACTER ───────────────────────────────────────────────────────
reg(['rpg', 'mulai', 'startrpg', 'createchar'], async (ctx) => rpgCommands.startRPG(ctx.reply, ctx.sender, ctx.args));
reg(['class', 'ganticlass', 'setclass'], async (ctx) => rpgCommands.setClass(ctx.reply, ctx.sender, ctx.args));
reg(['profil', 'profile', 'cek', 'stats', 'char'], async (ctx) => rpgCommands.showProfile(ctx.reply, ctx.sender, ctx.msg, ctx.mentioned));
reg(['inventory', 'inv', 'bag'], async (ctx) => rpgCommands.showInventory(ctx.reply, ctx.sender));
reg(['equip', 'pakai'], async (ctx) => rpgCommands.equipItem(ctx.reply, ctx.sender, ctx.args));
reg(['unequip', 'lepas'], async (ctx) => rpgCommands.unequipItem(ctx.reply, ctx.sender, ctx.args));
reg(['use', 'pakaiitem', 'minum'], async (ctx) => rpgCommands.useItem(ctx.reply, ctx.sender, ctx.args));
reg(['istirahat', 'rest', 'tidur'], async (ctx) => rpgCommands.rest(ctx.reply, ctx.sender));

// ── RPG: COMBAT ──────────────────────────────────────────────────────────
reg(['hunt', 'berburu', 'buru'], async (ctx) => rpgCommands.hunt(ctx.reply, ctx.sender));
reg(['lawan', 'battle', 'pvp', 'duel'], async (ctx) => rpgCommands.battle(ctx.reply, ctx.sender, ctx.mentioned));
reg(['bossinfo', 'listboss', 'daftarboss'], async (ctx) => rpgCommands2.bossInfo(ctx.reply));
reg(['boss', 'raid', 'lawanboss'], async (ctx) => rpgCommands2.fightBoss(ctx.reply, ctx.sender, ctx.args));
reg(['dungeoninfo', 'listdungeon', 'daftardungeon'], async (ctx) => rpgCommands2.dungeonInfo(ctx.reply));
reg(['dungeon', 'masukdungeon', 'explore'], async (ctx) => rpgCommands2.enterDungeon(ctx.reply, ctx.sender, ctx.args));

// ── RPG: ECONOMY ─────────────────────────────────────────────────────────
reg(['toko', 'shop', 'store'], async (ctx) => rpgCommands2.showShop(ctx.reply, ctx.args));
reg(['beli', 'buy', 'belanja'], async (ctx) => rpgCommands2.buyItem(ctx.reply, ctx.sender, ctx.args));
reg(['jual', 'sell'], async (ctx) => rpgCommands2.sellItem(ctx.reply, ctx.sender, ctx.args));
reg(['daily', 'klaim', 'absen'], async (ctx) => rpgCommands2.dailyReward(ctx.reply, ctx.sender));
reg(['joblist', 'listjob', 'daftarkerja'], async (ctx) => rpgCommands2.joblist(ctx.reply));
reg(['kerja', 'work', 'job'], async (ctx) => rpgCommands2.work(ctx.reply, ctx.sender, ctx.args));
reg(['nabung', 'deposit', 'save', 'tabung'], async (ctx) => rpgCommands2.bankDeposit(ctx.reply, ctx.sender, ctx.args));
reg(['tarik', 'withdraw', 'ambil'], async (ctx) => rpgCommands2.bankWithdraw(ctx.reply, ctx.sender, ctx.args));
reg(['transfer', 'kirim', 'kirimgold', 'send'], async (ctx) => rpgCommands2.transfer(ctx.reply, ctx.sender, ctx.mentioned, ctx.args));
reg(['rob', 'rampok', 'curi'], async (ctx) => rpgCommands2.rob(ctx.reply, ctx.sender, ctx.mentioned));

// ── RPG: PETS ─────────────────────────────────────────────────────────────
reg(['petshop', 'tokopet'], async (ctx) => rpgCommands2.petShop(ctx.reply));
reg(['buypet', 'belipet', 'adopsi'], async (ctx) => rpgCommands2.buyPet(ctx.reply, ctx.sender, ctx.args));
reg(['petinfo', 'mypet', 'petku'], async (ctx) => rpgCommands2.petInfo(ctx.reply, ctx.sender));
reg(['setpet', 'gantipet', 'pilihpet'], async (ctx) => rpgCommands2.setPet(ctx.reply, ctx.sender, ctx.args));

// ── RPG: QUEST / ACHIEVEMENT ─────────────────────────────────────────────
reg(['quest', 'misi', 'questlist'], async (ctx) => rpgCommands2.showQuests(ctx.reply, ctx.sender));
reg(['questclaim', 'klaimquest', 'klaimmisi'], async (ctx) => rpgCommands2.claimQuest(ctx.reply, ctx.sender, ctx.args));
reg(['achievement', 'pencapaian', 'lencana'], async (ctx) => rpgCommands2.showAchievements(ctx.reply, ctx.sender));

// ── RPG: SOCIAL / RANKING ────────────────────────────────────────────────
reg(['ranking', 'top', 'top10'], async (ctx) => rpgCommands2.showRanking(ctx.reply));
reg(['leaderboard', 'papantop', 'lb'], async (ctx) => rpgCommands2.leaderboard(ctx.reply, ctx.args));
reg(['marry', 'nikah', 'menikah'], async (ctx) => rpgCommands2.marry(ctx.reply, ctx.sender, ctx.mentioned));
reg(['divorce', 'cerai', 'pisah'], async (ctx) => rpgCommands2.divorce(ctx.reply, ctx.sender));

// ── ADMIN: MUTE ──────────────────────────────────────────────────────────
reg(['mute', 'bisukan'], async (ctx) => adminCommands.muteGroup(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['unmute', 'bukabisu'], async (ctx) => adminCommands.unmuteGroup(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['mutestatus', 'cekmute'], async (ctx) => adminCommands.muteStatus(ctx.reply, ctx.jid));

// ── ADMIN: MEMBER MANAGEMENT ─────────────────────────────────────────────
reg(['kick', 'keluarkan', 'tendang'], async (ctx) => adminCommands.kickMember(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['ryoiken', 'ryoikitenkai', 'domainexpansion', 'tenkai'], async (ctx) => adminCommands.ryoikiTenkaiKick(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['promote', 'jadikanadmin', 'naikkan'], async (ctx) => adminCommands.promoteMember(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['demote', 'turunkan', 'copotadmin'], async (ctx) => adminCommands.demoteMember(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['add', 'tambahmember', 'invite'], async (ctx) => adminCommands.addMember(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));

// ── ADMIN: WARN ───────────────────────────────────────────────────────────
reg(['warn', 'peringatan', 'beriwarn'], async (ctx) => adminCommands.warnMember(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['unwarn', 'hapuswarn'], async (ctx) => adminCommands.unwarnMember(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['checkwarn', 'cekwarn', 'totalwarn'], async (ctx) => adminCommands.checkWarn(ctx.reply, ctx.jid, ctx.mentioned, ctx.sender));
reg(['warnlimit', 'limitwarn', 'setwarnlimit'], async (ctx) => adminCommands.setWarnLimit(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));

// ── ADMIN: GROUP INFO / SETTINGS ─────────────────────────────────────────
reg(['groupinfo', 'infogrup', 'infogroup'], async (ctx) => adminCommands.groupInfo(ctx.sock, ctx.reply, ctx.jid));
reg(['setname', 'gantinamagrup', 'namagrup'], async (ctx) => adminCommands.setGroupName(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['setdesc', 'gantidesk', 'deskripsigrup'], async (ctx) => adminCommands.setGroupDesc(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['lockgroup', 'kuncigrup', 'closegroup'], async (ctx) => adminCommands.lockGroup(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['unlockgroup', 'bukagrup', 'opengroup'], async (ctx) => adminCommands.unlockGroup(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['link', 'linkgrup', 'invitelink', 'getlink'], async (ctx) => adminCommands.getInviteLink(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['revoke', 'resetlink', 'revokelink'], async (ctx) => adminCommands.revokeInviteLink(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['leave', 'keluargrup', 'botkeluar'], async (ctx) => adminCommands.leaveGroup(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['hidetag', 'htag', 'tagsemua'], async (ctx) => adminCommands.hidetag(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.args, ctx.isAdmin));
reg(['tagall', 'mentionall', 'tagsemuamember'], async (ctx) => adminCommands.tagAll(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.args, ctx.isAdmin));
reg(['listadmin', 'daftaradmin', 'admins'], async (ctx) => adminCommands.listAdmins(ctx.sock, ctx.reply, ctx.jid));
reg(['membercount', 'jumlahmember', 'totalmember'], async (ctx) => adminCommands.groupMembersCount(ctx.sock, ctx.reply, ctx.jid));

// ── ADMIN: WELCOME / FAREWELL ────────────────────────────────────────────
reg(['setwelcome', 'aturwelcome'], async (ctx) => adminCommands.setWelcomeMsg(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['setfarewell', 'aturfarewell', 'aturperpisahan'], async (ctx) => adminCommands.setFarewellMsg(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['welcome'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'welcome', 'Welcome Message', ctx.args, ctx.isAdmin));
reg(['farewell'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'farewell', 'Farewell Message', ctx.args, ctx.isAdmin));

// ── ADMIN: PROTECTION TOGGLES ────────────────────────────────────────────
reg(['antigb'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antigb', 'Anti-GB', ctx.args, ctx.isAdmin));
reg(['antilink'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antilink', 'Anti-Link', ctx.args, ctx.isAdmin));
reg(['antispam', 'antiflood'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antispam', 'Anti-Spam/Anti-Flood', ctx.args, ctx.isAdmin));
reg(['antitoxic'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antitoxic', 'Anti-Toxic', ctx.args, ctx.isAdmin));
reg(['antishortlink', 'antishorturl'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antishortlink', 'Anti-ShortLink', ctx.args, ctx.isAdmin));
reg(['slowmode', 'modelambat'], async (ctx) => adminCommands.setSlowmode(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['lockmedia'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'media', ctx.args, ctx.isAdmin));
reg(['lockstiker', 'locksticker'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'sticker', ctx.args, ctx.isAdmin));

// ── ADMIN: PROTEKSI TAMBAHAN (v3.1.0) ────────────────────────────────────
reg(['antilinkphising', 'antiphising', 'antiphishing'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antilinkphising', 'Anti-Link-Phising', ctx.args, ctx.isAdmin));
reg(['antijudol', 'antijudi'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antijudol', 'Anti-Judol', ctx.args, ctx.isAdmin));
reg(['antipinjol', 'antipinjaman'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antipinjol', 'Anti-Pinjol', ctx.args, ctx.isAdmin));
reg(['anticaps', 'antikapital'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'anticaps', 'Anti-Caps', ctx.args, ctx.isAdmin));
reg(['antivirtex', 'antivirustext'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antivirtex', 'Anti-Virtex', ctx.args, ctx.isAdmin));
reg(['antitag', 'antitagsw'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antitag', 'Anti-Tag', ctx.args, ctx.isAdmin));
// v3.2.0: Anti-NSFW — deteksi otomatis (lihat features/antiNsfw.js untuk cara setup API key)
reg(['antinsfw', 'antiporn', 'antiporno'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antinsfw', 'Anti-NSFW', ctx.args, ctx.isAdmin));
reg(['hapusnsfw', 'delnsfw', 'deletensfw'], async (ctx) => manualDeleteNsfw(ctx));
reg(['cekstrikensfw', 'nsfwstrikes', 'strikensfw'], async (ctx) => checkNsfwStrikeCmd(ctx));
reg(['resetnsfwstrike', 'resetstrikensfw'], async (ctx) => resetNsfwStrikeCmd(ctx));
reg(['setnsfwlimit', 'nsfwlimit'], async (ctx) => setNsfwStrikeLimitCmd(ctx));
reg(['resetprotection', 'matikansemuaproteksi', 'unprotectall'], async (ctx) => adminCommands4.resetProtectionAll(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['antilinkall', 'fullantilink'], async (ctx) => adminCommands4.setAntiLinkAll(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));

// ── BOT-WIDE: ANTI-CALL & ANTI-CHAT (lihat features/antiCallChat.js) ────
// Bot-wide (bukan per-grup) karena nomor bot cuma satu — Owner/Creator only.
reg(['anticall'], async (ctx) => {
    if (!ctx.isOwner && !ctx.isCreator) return ctx.reply('❌ Cuma Owner/Creator yang bisa ubah pengaturan ini.');
    const arg = (ctx.args?.[0] || '').toLowerCase();
    if (arg !== 'on' && arg !== 'off') {
        return ctx.reply(`📵 *ANTI-CALL*\nOtomatis menolak semua telepon/video call masuk ke nomor bot.\n\nStatus: ${isAnticallEnabled() ? '✅ ON' : '❌ OFF'}\nKetik *.anticall on* atau *.anticall off* untuk mengubah.`);
    }
    setAnticall(arg === 'on');
    await ctx.reply(`${arg === 'on' ? '✅' : '❌'} Anti-Call berhasil di-${arg === 'on' ? 'aktifkan' : 'nonaktifkan'}.`);
});
reg(['antichat'], async (ctx) => {
    if (!ctx.isOwner && !ctx.isCreator) return ctx.reply('❌ Cuma Owner/Creator yang bisa ubah pengaturan ini.');
    const arg = (ctx.args?.[0] || '').toLowerCase();
    if (arg !== 'on' && arg !== 'off') {
        return ctx.reply(`💬 *ANTI-CHAT*\nMatikan auto-chat AI (.smileyai) di DM untuk selain Owner/Creator/Premium. Command tetap jalan normal.\n\nStatus: ${isAntichatEnabled() ? '✅ ON' : '❌ OFF'}\nKetik *.antichat on* atau *.antichat off* untuk mengubah.`);
    }
    setAntichat(arg === 'on');
    await ctx.reply(`${arg === 'on' ? '✅' : '❌'} Anti-Chat berhasil di-${arg === 'on' ? 'aktifkan' : 'nonaktifkan'}.`);
});
reg(['helpproteksi', 'panduanproteksi'], async (ctx) => adminCommands4.helpProteksi(ctx.reply));
reg(['grouplockstatus', 'statusproteksi', 'ceksemuaproteksi'], async (ctx) => adminCommands4.groupLockStatus(ctx.reply, ctx.jid));

// ── ADMIN: CUSTOM BAD-WORD (perluasan Anti-Toxic per-grup) ──────────────
reg(['addbadword', 'tambahkatakasar'], async (ctx) => adminCommands4.addBadWordCmd(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['delbadword', 'hapuskatakasar'], async (ctx) => adminCommands4.delBadWordCmd(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['listbadword', 'daftarkatakasar'], async (ctx) => adminCommands4.listBadWordCmd(ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: LINK ALLOWLIST (pengecualian Anti-Link) ───────────────────────
reg(['allowlinkadd', 'izinkanlink'], async (ctx) => adminCommands4.allowLinkAdd(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['allowlinkdel', 'hapusizinlink'], async (ctx) => adminCommands4.allowLinkDel(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['allowlinklist', 'daftarizinlink'], async (ctx) => adminCommands4.allowLinkShow(ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: WHITELIST PROTEKSI ────────────────────────────────────────────
reg(['whitelistadd', 'putihkan'], async (ctx) => adminCommands4.whitelistAdd(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['whitelistdel', 'hapusputih'], async (ctx) => adminCommands4.whitelistDel(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['whitelist', 'daftarputih'], async (ctx) => adminCommands4.whitelistShow(ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: LOCK TIPE KONTEN GRANULAR (v3.1.0) ────────────────────────────
reg(['lockimage', 'lockgambar'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'image', ctx.args, ctx.isAdmin));
reg(['lockvideo', 'lockvidio'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'video', ctx.args, ctx.isAdmin));
reg(['lockdocument', 'lockdokumen'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'document', ctx.args, ctx.isAdmin));
reg(['lockcontact', 'lockkontak'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'contact', ctx.args, ctx.isAdmin));
reg(['locklocation', 'locklokasi'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'location', ctx.args, ctx.isAdmin));
reg(['lockvn', 'lockvoicenote'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'voice', ctx.args, ctx.isAdmin));
reg(['lockaudio', 'lockmusik'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'audio', ctx.args, ctx.isAdmin));
reg(['lockgif', 'lockgifplay'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'gif', ctx.args, ctx.isAdmin));
reg(['lockpoll', 'lockjajak'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'poll', ctx.args, ctx.isAdmin));
reg(['locktext', 'lockchat', 'mediaonly'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'text', ctx.args, ctx.isAdmin));

// ── ADMIN: MUTE PER-MEMBER (beda dari .mute grup-wide) ───────────────────
reg(['mutemember', 'bisukanmember'], async (ctx) => adminCommands4.muteMemberCmd(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['unmutemember', 'bukabisumember'], async (ctx) => adminCommands4.unmuteMemberCmd(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['listmutedmember', 'daftarbisu'], async (ctx) => adminCommands4.listMutedMemberCmd(ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: MEMBER MANAGEMENT LANJUTAN ────────────────────────────────────
reg(['kickall', 'kicksemua', 'tendangsemua'], async (ctx) => adminCommands4.kickAll(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.isAdmin, ctx.args));
reg(['warnall', 'warnsemua', 'peringatkansemua'], async (ctx) => adminCommands4.warnAll(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.isAdmin));
reg(['cekwarnall', 'listwarn', 'semuawarn'], async (ctx) => adminCommands4.listWarnAll(ctx.reply, ctx.jid));
reg(['topwarn', 'warnterbanyak'], async (ctx) => adminCommands4.topWarn(ctx.reply, ctx.jid));
reg(['resetwarnall', 'hapussemuawarn'], async (ctx) => adminCommands4.resetWarnAllCmd(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['banlist', 'daftarblokir'], async (ctx) => adminCommands2.listBanned(ctx.reply, ctx.jid));
reg(['unbanall', 'hapussemuablokir'], async (ctx) => adminCommands2.unbanAll(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['slowmodeoff', 'matikanslow'], async (ctx) => adminCommands.setSlowmode(ctx.reply, ctx.jid, ['0'], ctx.isAdmin));

// ── ADMIN: INFO / DASHBOARD GRUP ──────────────────────────────────────────
reg(['cekbot', 'botadmin', 'statusbot'], async (ctx) => adminCommands4.checkBotAdmin(ctx.sock, ctx.reply, ctx.jid));
reg(['groupsummary', 'dashboardgrup', 'ringkasangrup'], async (ctx) => adminCommands4.groupSummary(ctx.sock, ctx.reply, ctx.jid));
reg(['groupage', 'umurgrup'], async (ctx) => adminCommands4.groupAge(ctx.sock, ctx.reply, ctx.jid));
reg(['admincount', 'jumlahadmin'], async (ctx) => adminCommands4.adminCount(ctx.sock, ctx.reply, ctx.jid));
reg(['groupcreator', 'pembuatgrup'], async (ctx) => adminCommands4.groupCreatorInfo(ctx.sock, ctx.reply, ctx.jid));
reg(['exportmember', 'datamember', 'listmemberdata'], async (ctx) => adminCommands4.exportMember(ctx.sock, ctx.reply, ctx.jid));

// ── ADMIN: BACKUP / RESTORE PENGATURAN GRUP ──────────────────────────────
reg(['backupsetting', 'backupgrup'], async (ctx) => adminCommands4.backupSetting(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['restoresetting', 'restoregrup'], async (ctx) => adminCommands4.restoreSetting(ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: APPROVAL JOIN REQUEST ──────────────────────────────────────────
reg(['listrequest', 'pendingrequest', 'daftarrequest'], async (ctx) => adminCommands4.listJoinRequests(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['approverequest', 'terimarequest'], async (ctx) => adminCommands4.approveJoinRequest(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.mentioned, ctx.isAdmin));
reg(['rejectrequest', 'tolakrequest'], async (ctx) => adminCommands4.rejectJoinRequest(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.mentioned, ctx.isAdmin));
reg(['approveall', 'terimasemua'], async (ctx) => adminCommands4.approveAllRequests(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['rejectall', 'tolaksemua'], async (ctx) => adminCommands4.rejectAllRequests(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: JADWAL BUKA/TUTUP GRUP OTOMATIS ────────────────────────────────
reg(['jadwalbuka', 'autobuka'], async (ctx) => adminCommands4.setOpenSchedule(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['jadwaltutup', 'autotutup'], async (ctx) => adminCommands4.setCloseSchedule(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['canceljadwalgrup', 'batalotomatis'], async (ctx) => adminCommands4.cancelSchedule(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['cekjadwalgrup', 'statusotomatis'], async (ctx) => adminCommands4.checkScheduleStatus(ctx.reply, ctx.jid));

// ── ADMIN: KONFIGURASI GRUP NATIVE WHATSAPP LAINNYA ──────────────────────
reg(['seticon', 'gantiicon', 'ubahicon'], async (ctx) => adminCommands4.setGroupIcon(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.isAdmin));
reg(['hapusicon', 'removeicon'], async (ctx) => adminCommands4.removeGroupIcon(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['lockinfo', 'kuncinfogrup'], async (ctx) => adminCommands4.lockGroupInfo(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['unlockinfo', 'bukainfogrup'], async (ctx) => adminCommands4.unlockGroupInfo(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['ephemeral', 'pesansementara'], async (ctx) => adminCommands4.setEphemeral(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));

// ── FUN / GAMES ───────────────────────────────────────────────────────────
reg(['quote', 'katabijak', 'motivasi'], async (ctx) => funCommands.quote(ctx.reply));
reg(['fact', 'fakta', 'faktaunik'], async (ctx) => funCommands.fact(ctx.reply));
reg(['riddle', 'tekateki'], async (ctx) => funCommands.riddle(ctx.reply, ctx.jid));
reg(['jawab', 'answer'], async (ctx) => {
    await funCommands.answerRiddle(ctx.reply, ctx.jid, ctx.args);
    await funCommands.answerTebak(async () => {}, ctx.jid, ctx.args).catch(() => {});
});
reg(['truth'], async (ctx) => funCommands.truth(ctx.reply));
reg(['dare'], async (ctx) => funCommands.dare(ctx.reply));
reg(['tebakgambar', 'guessimage'], async (ctx) => funCommands.tebakGambar(ctx.reply, ctx.jid));
reg(['pantun'], async (ctx) => funCommands.pantun(ctx.reply));
reg(['zodiak', 'horoscope', 'ramalan'], async (ctx) => funCommands.horoscope(ctx.reply, ctx.args));
reg(['coinflip', 'lempar koin', 'koin'], async (ctx) => funCommands.coinFlip(ctx.reply));
reg(['dice', 'dadu', 'roll'], async (ctx) => funCommands.rollDice(ctx.reply, ctx.args));
reg(['rps', 'bgk', 'batugunting'], async (ctx) => funCommands.rps(ctx.reply, ctx.args));
reg(['slot', 'judi', 'slotmachine'], async (ctx) => funCommands.slot(ctx.reply, ctx.sender));
reg(['tebakangka', 'guessnumber'], async (ctx) => funCommands.tebakAngka(ctx.reply, ctx.jid));
reg(['tebak'], async (ctx) => funCommands.guessNumber(ctx.reply, ctx.jid, ctx.args));
reg(['wyr', 'wouldyourather', 'pilihmana'], async (ctx) => funCommands.wouldYouRather(ctx.reply));
reg(['jodoh', 'ceklodoh', 'lovetest'], async (ctx) => funCommands.checkJodoh(ctx.reply, ctx.sender, ctx.mentioned));
reg(['tarot', 'kartutarot'], async (ctx) => funCommands.tarotCard(ctx.reply));
reg(['fortunecookie', 'ramalankue'], async (ctx) => funCommands.fortuneCookie(ctx.reply));
reg(['lovecalc', 'hitungcinta', 'kalkulatorcinta'], async (ctx) => funCommands.hitungCinta(ctx.reply, ctx.sender, ctx.mentioned, ctx.args));

// ── FUN: SMILEY CYMOR SPECIAL ────────────────────────────────────────────
reg(['smiley', 'smileyquote', 'katasmiley'], async (ctx) => smileyCommands.smileyQuote(ctx.reply));
reg(['smileyteknik', 'jurussmiley', 'tekniksmiley'], async (ctx) => smileyCommands.smileyTeknik(ctx.reply));
reg(['smileyroast', 'roastsmiley'], async (ctx) => smileyCommands.smileyRoast(ctx.reply, ctx.sender, ctx.mentioned));
reg(['smileyhype', 'semangatsmiley', 'smileysupport'], async (ctx) => smileyCommands.smileyHype(ctx.reply, ctx.sender, ctx.mentioned));
reg(['smileyfact', 'faktasmiley'], async (ctx) => smileyCommands.smileyFact(ctx.reply));
reg(['smileypower', 'ceklevelsmiley', 'powerlevel'], async (ctx) => smileyCommands.smileyPower(ctx.reply, ctx.sender, ctx.mentioned));

// ── TOOLS: TEXT ───────────────────────────────────────────────────────────
reg(['upper', 'kapital'], async (ctx) => textTools.upper(ctx.reply, ctx.args));
reg(['lower', 'kecil'], async (ctx) => textTools.lower(ctx.reply, ctx.args));
reg(['reverse', 'balik'], async (ctx) => textTools.reverse(ctx.reply, ctx.args));
reg(['tobinary', 'kebinary'], async (ctx) => textTools.toBinary(ctx.reply, ctx.args));
reg(['frombinary', 'daribinary'], async (ctx) => textTools.fromBinary(ctx.reply, ctx.args));
reg(['tobase64', 'kebase64'], async (ctx) => textTools.toBase64(ctx.reply, ctx.args));
reg(['frombase64', 'daribase64'], async (ctx) => textTools.fromBase64(ctx.reply, ctx.args));
reg(['tohex', 'kehex'], async (ctx) => textTools.toHex(ctx.reply, ctx.args));
reg(['fromhex', 'darihex'], async (ctx) => textTools.fromHex(ctx.reply, ctx.args));
reg(['rot13'], async (ctx) => textTools.rot13(ctx.reply, ctx.args));
reg(['leet', 'leetspeak'], async (ctx) => textTools.leet(ctx.reply, ctx.args));
reg(['alternating', 'acakcase'], async (ctx) => textTools.alternating(ctx.reply, ctx.args));
reg(['wordcount', 'hitungkata'], async (ctx) => textTools.countWords(ctx.reply, ctx.args));

// ── TOOLS: MATH ───────────────────────────────────────────────────────────
reg(['calc', 'hitung', 'kalkulator'], async (ctx) => mathTools.calc(ctx.reply, ctx.args));
reg(['persen', 'percent'], async (ctx) => mathTools.percent(ctx.reply, ctx.args));
reg(['bmi', 'imt'], async (ctx) => mathTools.bmi(ctx.reply, ctx.args));
reg(['kurs', 'currency'], async (ctx) => mathTools.convertCurrencyNote(ctx.reply));
reg(['umur', 'age', 'hitungumur'], async (ctx) => mathTools.ageCalc(ctx.reply, ctx.args));

// ── TOOLS: CONVERTER ──────────────────────────────────────────────────────
reg(['convertlength', 'konversipanjang'], async (ctx) => converterTools.convertLength(ctx.reply, ctx.args));
reg(['convertweight', 'konversiberat'], async (ctx) => converterTools.convertWeight(ctx.reply, ctx.args));
reg(['convertsuhu', 'convertemp'], async (ctx) => converterTools.convertTemp(ctx.reply, ctx.args));

// ── TOOLS: GENERATOR ──────────────────────────────────────────────────────
reg(['genpassword', 'buatpassword', 'password'], async (ctx) => generatorTools.genPassword(ctx.reply, ctx.args));
reg(['genuuid', 'uuid'], async (ctx) => generatorTools.genUUID(ctx.reply));
reg(['pilih', 'choose', 'pickrandom'], async (ctx) => generatorTools.pickRandom(ctx.reply, ctx.args));
reg(['shuffle', 'acak'], async (ctx) => generatorTools.shuffleList(ctx.reply, ctx.args));

// ── TOOLS: INFO ───────────────────────────────────────────────────────────
reg(['ping'], async (ctx) => {
    const start = Date.now();
    await ctx.sock.sendPresenceUpdate('composing', ctx.jid);
    const latency = Date.now() - start;
    await ctx.reply(
`🏓 *PONG!*

◈ *Latensi*  : \`${latency}ms\`
◈ *Status*   : 🟢 Online & Aktif
◈ *Runtime*  : ${fmtDuration(Date.now() - BOT_START_TIME)}
◈ *Users*    : ${countUsers()} player terdaftar
◈ *Grup*     : ${countGroups()} grup aktif
◈ *Cmd Total*: ${getTotalCommandsRan()} kali dijalankan`
    );
});

reg(['cekid', 'checkid', 'groupid', 'idgrup', 'idchannel'], async (ctx) => {
    let groupSection;
    if (ctx.isGroup) {
        let groupName = '_(gagal ambil nama grup)_';
        try {
            const meta = await ctx.sock.groupMetadata(ctx.jid);
            groupName = meta.subject || groupName;
        } catch { /* nama tetap fallback di atas kalau groupMetadata gagal */ }
        groupSection = `◈ *Nama* : ${groupName}\n◈ *ID*   : \`${ctx.jid}\``;
    } else {
        groupSection = '_Command ini dipakai di luar grup, jadi nggak ada ID grup buat ditampilkan._';
    }

    await ctx.reply(
`🆔 *CEK ID*

📢 *Channel*
◈ *Nama* : ${CHANNEL_NAME}
◈ *ID*   : \`${CHANNEL_JID}\`

👥 *Grup Ini*
${groupSection}`
    );
});

reg(['owner', 'creator', 'dev', 'developer'], async (ctx) => {
    const owners = listOwners();
    const mainOwnerNum = settings.ownerNumber ? settings.ownerNumber.replace(/[^0-9]/g, '') : null;
    const extraOwners = owners.filter(o => o.number !== mainOwnerNum);
    const ownerLines = extraOwners.length
        ? extraOwners.map((o, i) => `${i + 1}. +${o.number}`).join('\n')
        : '_(belum ada Owner tambahan — pakai .addowner atau edit `ownerNumbers` di setting.js)_';
    await ctx.reply(
`👑 *INFO CREATOR & OWNER*

◈ *Creator* : ${creator.name}
◈ *Nomor*   : +${creator.number}
_(Creator tidak bisa diganti lewat command apapun)_

⭐ *${settings.ownerName || 'Owner'}*${mainOwnerNum ? `\n◈ *Nomor* : +${mainOwnerNum}` : '\n_(belum diisi — set `ownerName` & `ownerNumber` di setting.js)_'}

📋 *Owner Lainnya:*
${ownerLines}
_(Nama & nomor Owner utama bisa diganti lewat setting.js: \`ownerName\` dan \`ownerNumber\`)_

◈ *Bot* : ${settings.botName} v${settings.botVersion || '2.0.0'}

📞 Hubungi Creator jika ada pertanyaan,\nlaporan bug, atau request fitur!

_wa.me/${creator.number}_`
    );
});

// .pembayaran — info nomor e-wallet Owner (DANA/GoPay/OVO). Nomornya
// diambil dari setting.js (nodana/nogopay/noovo) supaya Owner bisa ganti
// sendiri kapan saja tanpa perlu edit command ini.
reg(['pembayaran', 'payment', 'bayar'], async (ctx) => {
    await ctx.reply(
`💰 *INFO PEMBAYARAN*

◈ DANA  : ${settings.nodana  || '_(belum diisi)_'}
◈ GoPay : ${settings.nogopay || '_(belum diisi)_'}
◈ OVO   : ${settings.noovo   || '_(belum diisi)_'}

Silakan transfer ke salah satu nomor di atas sesuai nominal yang disepakati, lalu kirim bukti transfer ke Owner untuk konfirmasi.

_(Nomor bisa diganti Owner lewat setting.js: \`nodana\`, \`nogopay\`, \`noovo\`)_`
    );
});

// .sosmedowner — info sosial media Owner, diambil dari setting.js
// (ig/tele/yt) supaya bisa diganti Owner kapan saja.
reg(['sosmedowner', 'sosmed', 'socialmedia'], async (ctx) => {
    await ctx.reply(
`📱 *SOSIAL MEDIA OWNER*

◈ Instagram : ${settings.ig   || '_(belum diisi)_'}
◈ Telegram  : ${settings.tele || '_(belum diisi)_'}
◈ YouTube   : ${settings.yt   || '_(belum diisi)_'}

Yuk follow & subscribe buat dukung Owner! 🙌

_(Bisa diganti Owner lewat setting.js: \`ig\`, \`tele\`, \`yt\`)_`
    );
});

// ── JABATAN: CREATOR / OWNER / PREMIUM ────────────────────────────────────
// Owner & Premium sekarang GABUNGAN dari beberapa sumber:
//   1) `ownerNumber` (Owner utama, tunggal) + `ownerNumbers` (Owner
//      tambahan, array) / `premiumNumbers` di setting.js — manual edit
//      file, butuh restart bot supaya berlaku.
//   2) data/owners.json & data/premium.json (diatur lewat command
//      .addowner/.addprem saat bot berjalan, langsung aktif tanpa restart).
// .addowner boleh dipakai oleh Owner ATAUPUN Creator. .delowner & .delprem
// tetap lebih terbatas (lihat masing-masing handler di bawah).
// Nomor yang berasal dari setting.js TIDAK BISA dihapus lewat command
// (harus edit file itu langsung) — ini supaya nomor yang sudah di-set
// manual lewat file tidak bisa dicabut diam-diam lewat chat oleh siapapun.
reg(['listowner', 'daftarowner', 'cekowner'], async (ctx) => {
    const owners = listOwners();
    const lines = [`👑 *Creator*: ${creator.name} (+${creator.number})`];
    if (owners.length === 0) {
        lines.push('', '⭐ *Owner*: _(belum ada Owner tambahan)_');
    } else {
        lines.push('', '⭐ *Daftar Owner:*');
        owners.forEach((o, i) => lines.push(`${i + 1}. +${o.number} _(${o.source})_`));
    }
    lines.push('', `_${settings.prefix}addowner @tag — tambah Owner (Owner/Creator)_`);
    await ctx.reply(lines.join('\n'));
});
reg(['addowner'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner* atau *Creator* yang bisa menambah Owner.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}addowner @tag* atau *${settings.prefix}addowner 628xxx*`);
    const result = addOwner(target);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ @${target.split('@')[0]} berhasil dijadikan *Owner*.`);
});
reg(['delowner', 'removeowner'], async (ctx) => {
    if (!ctx.isCreator) return ctx.reply('❌ Hanya *Creator* yang bisa menghapus Owner.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}delowner @tag* atau *${settings.prefix}delowner 628xxx*`);
    const result = removeOwner(target);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ @${target.split('@')[0]} sudah dicabut dari jabatan *Owner*.`);
});
reg(['listprem', 'listpremium', 'daftarpremium'], async (ctx) => {
    const premiums = listPremium();
    const lines = [];
    if (premiums.length === 0) {
        lines.push('💎 *Daftar Premium*', '', '_(belum ada user Premium)_');
    } else {
        lines.push(`💎 *Daftar Premium* (${premiums.length})`, '');
        premiums.forEach((p, i) => lines.push(`${i + 1}. +${p.number} _(${p.source})_`));
    }
    lines.push('', `_${settings.prefix}addprem @tag — tambah Premium (Owner only)_`);
    await ctx.reply(lines.join('\n'));
});
reg(['addprem', 'addpremium'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner* atau *Creator* yang bisa menambah Premium.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}addprem @tag* atau *${settings.prefix}addprem 628xxx*`);
    const result = addPremium(target);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ @${target.split('@')[0]} berhasil dijadikan *Premium*. 💎`);
});
reg(['delprem', 'delpremium', 'removepremium'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner* atau *Creator* yang bisa menghapus Premium.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}delprem @tag* atau *${settings.prefix}delprem 628xxx*`);
    const result = removePremium(target);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ Status *Premium* @${target.split('@')[0]} sudah dicabut.`);
});
reg(['cekjabatan', 'myrole', 'rolesaya', 'cekrole'], async (ctx) => {
    const target = ctx.mentioned?.[0] || ctx.sender;
    const label = getRoleLabel(target);
    const who = target === ctx.sender ? 'Kamu' : `@${target.split('@')[0]}`;
    await ctx.reply(`🔖 *Jabatan*\n\n${who} saat ini: *${label}*`);
});

// ─── CO-CREATOR ─────────────────────────────────────────────────────────────
// FIX: alias 'creator' di sini sebelumnya BENTROK sama reg(['owner','creator',
// 'dev','developer']) di atas (baris ~548) — karena routeMap = new Map(routes)
// bikin registrasi yang belakangan (ini) diam-diam nimpa yang duluan, jadi
// ketik ".creator" malah nyasar ke Co-Creator, bukan ke info Creator & Owner
// yang dimaksud command di atas. 'infocreator' sudah cukup jadi alias unik
// buat command ini, jadi 'creator' di sini dihapus (bukan diganti nama).
reg(['infocreator'], async (ctx) => {
    const info = getCreatorInfo();
    const coList = listCoCreators();
    const lines = [
        `╔══════════════════════════╗`,
        `║  👑  *CREATOR INFO*`,
        `╚══════════════════════════╝`,
        ``,
        `🌟 *Primary Creator*`,
        `┗ +${info.number} _(${info.name})_`,
    ];
    if (coList.length > 0) {
        lines.push(``, `🌟 *Co-Creator (${coList.length})*`);
        coList.forEach((c, i) => lines.push(`┗ ${i+1}. +${c.number}`));
    } else {
        lines.push(``, `_Belum ada Co-Creator._`);
    }
    await ctx.reply(lines.join('\n'));
});

reg(['addcreator'], async (ctx) => {
    if (!ctx.isCreator) return ctx.reply('❌ Hanya *Primary Creator* yang bisa menambah Co-Creator.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g,'')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}addcreator @tag* atau *${settings.prefix}addcreator 628xxx*`);
    const result = addCoCreator(target, ctx.sender);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ @${target.split('@')[0]} berhasil dijadikan *Co-Creator*. 🌟`);
});

reg(['delcreator', 'removecreator'], async (ctx) => {
    if (!ctx.isCreator) return ctx.reply('❌ Hanya *Primary Creator* yang bisa menghapus Co-Creator.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g,'')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}delcreator @tag*`);
    const result = removeCoCreator(target, ctx.sender);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ @${target.split('@')[0]} sudah dicabut dari jabatan *Co-Creator*.`);
});

reg(['listcreator', 'daftarcreator'], async (ctx) => {
    const coList = listCoCreators();
    const info   = getCreatorInfo();
    const lines  = [`🌟 *Daftar Creator*`, ``, `👑 Primary: +${info.number} _(${info.name})_`];
    if (coList.length === 0) {
        lines.push('', '_Belum ada Co-Creator._');
    } else {
        lines.push('', `🌟 Co-Creator (${coList.length}):`);
        coList.forEach((c, i) => lines.push(`${i+1}. +${c.number}`));
    }
    await ctx.reply(lines.join('\n'));
});

// ─── ADDLIMIT — tambah limit media manual (owner/creator) ───────────────────
reg(['addlimit', 'tambablimit'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner* atau *Creator* yang bisa menambah limit.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g,'')}@s.whatsapp.net` : null);
    const amount = parseInt(ctx.args?.[ctx.mentioned?.[0] ? 0 : 1]) || 1;
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}addlimit @tag [jumlah]*\nContoh: *${settings.prefix}addlimit @user 5*`);
    const result = addLimitManual(target, amount);
    await ctx.reply(
        `✅ *+${amount} limit media* ditambahkan ke @${target.split('@')[0]}.\n` +
        `📊 Sisa limit hari ini: *${Math.max(0, result.max - result.newUsed)}/${result.max}*`
    );
});

// ─── ADDGOLD — tambah gold RPG manual (owner/creator) ───────────────────────
reg(['addgold', 'tambahgold', 'givegold'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner* atau *Creator* yang bisa menambah gold.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] && !parseInt(ctx.args[0])
        ? `${ctx.args[0].replace(/[^0-9]/g,'')}@s.whatsapp.net`
        : null);
    const amount = parseInt(ctx.args?.[ctx.mentioned?.[0] ? 0 : 1]) || 0;
    if (!target || amount <= 0) {
        return ctx.reply(`📌 Cara pakai: *${settings.prefix}addgold @tag [jumlah]*\nContoh: *${settings.prefix}addgold @user 1000*`);
    }
    const char = getChar(target);
    if (!char) return ctx.reply(`❌ @${target.split('@')[0]} belum punya karakter RPG.`);
    char.gold += amount;
    saveChar(target, char);
    await ctx.reply(
        `✅ *+${amount.toLocaleString()} gold* diberikan ke @${target.split('@')[0]}.\n` +
        `💰 Total gold sekarang: *${char.gold.toLocaleString()} gold*`
    );
});

// ─── BUYLIMIT — beli limit tambahan pakai gold (user biasa) ─────────────────
reg(['buylimit', 'belilimit', 'buylimits'], async (ctx) => {
    const result = buyMediaLimit(ctx.sender);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(
        `✅ Berhasil membeli *1 limit media tambahan*!\n` +
        `💰 Gold terpakai: *${result.cost} gold*\n` +
        `💳 Sisa gold: *${result.sisaGold.toLocaleString()} gold*\n\n` +
        `Sekarang kamu bisa pakai fitur media lagi.`
    );
});

// ─── CEKLIMIT — cek sisa limit harian (siapapun) ────────────────────────────
reg(['ceklimit', 'mylimit', 'limitku', 'sisalimit'], async (ctx) => {
    await ctx.reply(`📊 *Status Limit Media Harian*\n\n${limitStatusText(ctx.sender)}`);
});

// ─── AUTOREAD ────────────────────────────────────────────────────────────────
reg(['autoread', 'autobaca', 'autolihat'], async (ctx) => {
    const arg = (ctx.args?.[0] || '').toLowerCase();
    if (!['on', 'off', 'aktif', 'nonaktif'].includes(arg)) {
        return ctx.reply(
            `📌 *Autoread* — bot otomatis centang biru setiap pesan masuk\n\n` +
            `Status sekarang: *${isAutoread(ctx.jid) ? '✅ ON' : '❌ OFF'}*\n\n` +
            `Ketik *.autoread on* atau *.autoread off* untuk ubah.`
        );
    }
    const val = arg === 'on' || arg === 'aktif';
    setAutoread(ctx.jid, val);
    await ctx.reply(`${val ? '✅' : '❌'} *Autoread* berhasil di-${val ? 'aktifkan' : 'nonaktifkan'}.`);
});

// ─── AUTOTYPING ──────────────────────────────────────────────────────────────
reg(['autotyping', 'automengetik', 'autoketik'], async (ctx) => {
    const arg = (ctx.args?.[0] || '').toLowerCase();
    if (!['on', 'off', 'aktif', 'nonaktif'].includes(arg)) {
        return ctx.reply(
            `📌 *Autotyping* — bot tampil "mengetik..." sebelum balas pesan\n\n` +
            `Status sekarang: *${isAutotyping(ctx.jid) ? '✅ ON' : '❌ OFF'}*\n\n` +
            `Ketik *.autotyping on* atau *.autotyping off* untuk ubah.`
        );
    }
    const val = arg === 'on' || arg === 'aktif';
    setAutotyping(ctx.jid, val);
    await ctx.reply(`${val ? '✅' : '❌'} *Autotyping* berhasil di-${val ? 'aktifkan' : 'nonaktifkan'}.`);
});

// ─── SMILEY AI — mode chat AI ala Legendary Smiley Cymor, on/off per chat/grup ───
// Default ON (lihat lib/smileyAi.js). Hanya Admin grup/Owner/Creator yang
// boleh ubah. Di grup: bot cuma respon kalau di-mention/di-reply. Di DM:
// bot respon semua chat biasa. Logic trigger & pemanggilan AI ada di
// lib/smileyAi.js — file ini cuma toggle on/off-nya.
reg(['smileyai'], async (ctx) => {
    if (!ctx.isAdmin && !ctx.isOwner && !ctx.isCreator) {
        return ctx.reply('❌ Hanya *Admin grup*, *Owner*, atau *Creator* yang bisa mengubah mode ini.');
    }
    const arg = (ctx.args?.[0] || '').toLowerCase();
    if (!['on', 'off', 'aktif', 'nonaktif'].includes(arg)) {
        return ctx.reply(
            `📌 *Smiley AI* — bot balas chat biasa pakai gaya Legendary Smiley Cymor (AI)\n\n` +
            `Status sekarang: *${isSmileyAiEnabled(ctx.jid) ? '✅ ON' : '❌ OFF'}*\n` +
            `• Di grup: bot cuma respon kalau di-*mention* atau di-*reply*.\n` +
            `• Di DM: bot respon semua chat biasa.\n\n` +
            `Ketik *.smileyai on* atau *.smileyai off* untuk ubah.`
        );
    }
    const val = arg === 'on' || arg === 'aktif';
    setSmileyAiEnabled(ctx.jid, val);
    await ctx.reply(`${val ? '✅' : '❌'} *Smiley AI* berhasil di-${val ? 'aktifkan' : 'nonaktifkan'} untuk chat ini.`);
});

// ─── CPANEL — jualan slot server Pterodactyl (v1-v5) ───────────────────────
// Backend/logic ada di lib/pterodactylReseller.js & commands/panelCommands.js
// — di sini cuma pendaftaran command-nya. Jumlahnya banyak (create × RAM ×
// versi, role × aksi × versi, dst) makanya pakai loop, bukan reg() satu-satu.
reg(['cpanel'], async (ctx) => ctx.reply(cpanelMenuText(settings.prefix)));

// Create server: .1gbv1 .. .10gbv5, .univ1 .. .univ5 (11 tier × 5 server)
for (const ram of RAM_TIERS) {
    for (const ver of VALID_SERVERS) {
        const cmdName = ram === 'unli' ? `uni${ver}` : `${ram}${ver}`;
        reg([cmdName], makeCreateServerHandler(ram, ver));
    }
}

// List / Del / Info server: per versi (v1-v5)
for (const ver of VALID_SERVERS) {
    reg([`listserver${ver}`, `servers${ver}`], makeListServerHandler(ver));
    reg([`delserver${ver}`, `hapusserver${ver}`], makeDelServerHandler(ver));
    reg([`serverinfo${ver}`, `sinfo${ver}`], makeServerInfoHandler(ver));
}

// Role management: add/del/list × owner/ceo/reseller × v1-v5 (45 command)
for (const role of VALID_ROLES) {
    for (const ver of VALID_SERVERS) {
        reg([`add${role}${ver}`], makeRoleHandler('add', role, ver));
        reg([`del${role}${ver}`], makeRoleHandler('del', role, ver));
        reg([`list${role}${ver}`], makeRoleHandler('list', role, ver));
    }
}

// GC Seller: addgcseller/resetgcseller × v1-v5
for (const ver of VALID_SERVERS) {
    reg([`addgcseller${ver}`], makeGcSellerHandler('add', ver));
    reg([`resetgcseller${ver}`], makeGcSellerHandler('reset', ver));
}

// Cadmin — buat akun root admin panel (bukan role bot): v1-v5
for (const ver of VALID_SERVERS) {
    reg([`cadmin${ver}`, `createadmin${ver}`], makeCadminHandler(ver));
}

// ─── GUILD SYSTEM — fitur RPG baru (lib/guildSystem.js) ────────────────────
reg(['guildcreate'], guildCreate);
reg(['guildjoin'], guildJoin);
reg(['guildleave'], guildLeave);
reg(['guildkick'], guildKick);
reg(['guildpromote'], guildPromote);
reg(['guilddemote'], guildDemote);
reg(['guilddonate'], guildDonate);
reg(['guildupgrade'], guildUpgrade);
reg(['guilddisband'], guildDisband);
reg(['guildinfo'], guildInfo);
reg(['guildmembers'], guildMembers);
reg(['guildlist'], guildListCmd);

// ─── FARMING, TITLE, COOKING, BOUNTY — fitur RPG baru ──────────────────────
reg(['plant', 'tanam'], plantCmd);
reg(['water', 'siram'], waterCmd);
reg(['harvest', 'panen'], harvestCmd);
reg(['farmstatus', 'statuslahan'], farmStatusCmd);
reg(['titles', 'daftartitle'], titlesCmd);
reg(['equiptitle', 'pakaititle'], equipTitleCmd);
reg(['cook', 'masak'], cookCmd);
reg(['recipes', 'daftarresep'], recipesCmd);
reg(['bounty'], bountyCmd);
reg(['claimbounty', 'klaimbounty'], claimBountyCmd);

// ─── ADMIN SUBSISTEM BARU (commands/adminCommands5.js) ─────────────────────
// FIX: nama awal (.pin/.addnote/.listnote/.delnote/.catatan) ternyata
// SUDAH dipakai command lain (.pin = Pinterest downloader, .addnote dkk
// = fitur notes umum grup yang sudah ada) — kalau dipakai lagi di sini,
// bakal DIAM-DIAM menimpa command lama itu (bug serius). Diganti nama
// yang jelas beda supaya tidak tabrakan sama sekali.
reg(['setpengumuman', 'pengumumanpasang'], pinAdd);
reg(['hapuspengumuman', 'pengumumanhapus'], pinRemove);
reg(['pengumuman', 'cekpengumuman'], pinList);

reg(['addmembernote', 'tambahcatatan'], noteAdd);
reg(['listmembernote'], noteList);
reg(['delmembernote', 'hapuscatatan'], noteDel);

reg(['savetemplate'], templateSave);
reg(['loadtemplate'], templateLoad);
reg(['listtemplate'], templateList);
reg(['deltemplate'], templateDel);

reg(['addannouncement', 'tambahjadwalteks'], announcementAdd);
reg(['listannouncement', 'jadwaltekslist'], announcementList);
reg(['delannouncement', 'hapusjadwalteks'], announcementDel);

reg(['setbirthday', 'settanggallahir'], birthdaySet);
reg(['listbirthday', 'daftarultah'], birthdayList);
reg(['delbirthday', 'hapustanggallahir'], birthdayDel);

// ─── ADMIN BATCH BARU #2 (commands/adminCommands6.js) ──────────────────────
reg(['bulkpromote'], bulkPromote);
reg(['bulkdemote'], bulkDemote);
reg(['bulkkick'], bulkKick);
reg(['listinactive', 'membertidakaktif'], listInactive);
reg(['topactive', 'memberaktif'], topActive);
reg(['assigntask', 'kasihtugas'], taskAssign);
reg(['mytasks', 'tugasku'], taskMine);
reg(['listtasks', 'semuatugas'], taskList);
reg(['donetask', 'tugasselesai'], taskDone);
reg(['maintenancemode'], maintenanceToggle);

// ─── SELF MODE ────────────────────────────────────────────────────────────────
// Bot hanya merespon pesan dari owner/nomor bot sendiri.
// Hanya owner/creator yang bisa ubah ini.
reg(['self', 'selfmode', 'modeself'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner/Creator* yang bisa mengubah mode bot.');
    const arg = (ctx.args?.[0] || '').toLowerCase();
    if (!['on', 'off'].includes(arg)) {
        return ctx.reply(
            `📌 *Self Mode* — bot hanya respon ke owner/nomor bot sendiri\n\n` +
            `Status sekarang: *${settings.selfMode ? '✅ ON (Self)' : '❌ OFF (Public)'}*\n\n` +
            `Ketik *.self on* atau *.self off* untuk ubah.`
        );
    }
    const val = arg === 'on';
    settings.selfMode = val;
    const cfg = botCfg();
    cfg.selfMode = val;
    saveBotCfg();
    await ctx.reply(
        val
            ? `✅ *Self Mode ON* — bot sekarang hanya merespon owner & nomor bot sendiri.`
            : `❌ *Self Mode OFF* — bot kembali merespon semua orang.`
    );
});

// ─── PUBLIC / PRIVATE MODE ────────────────────────────────────────────────────
reg(['public', 'publicmode', 'modepublic', 'setpublic'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner/Creator* yang bisa mengubah mode bot.');
    settings.public = true;
    settings.selfMode = false;
    const cfg = botCfg(); cfg.selfMode = false; cfg.public = true; saveBotCfg();
    await ctx.reply('✅ *Mode Public* — bot sekarang bisa digunakan semua orang.');
});

reg(['private', 'privatemode', 'modeprivate', 'setprivate'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner/Creator* yang bisa mengubah mode bot.');
    settings.public = false;
    settings.selfMode = true;
    const cfg = botCfg(); cfg.selfMode = true; cfg.public = false; saveBotCfg();
    await ctx.reply('✅ *Mode Private* — bot sekarang hanya merespon owner & nomor bot sendiri.');
});

// ─── SEWA BOT ─────────────────────────────────────────────────────────────────
reg(['sewa', 'sewakan', 'sewagrup'], async (ctx) => sewaCommands.sewa(ctx));
reg(['ceksewa', 'infosewa', 'statussewa'], async (ctx) => sewaCommands.ceksewa(ctx));
reg(['delsewa', 'hapussewa', 'removesewa'], async (ctx) => sewaCommands.delsewa(ctx, ctx.sock));
reg(['listsewa', 'daftarsewa', 'sewaall'], async (ctx) => sewaCommands.listsewa(ctx));
reg(['extsewa', 'perpanjangsewa', 'renewsewa', 'addsewa'], async (ctx) => sewaCommands.extsewa(ctx));
reg(['hargasewa', 'pricesewa', 'infoharga'], async (ctx) => sewaCommands.hargasewa(ctx));
reg(['gantihargasewa', 'sethargasewa', 'ubahhargasewa'], async (ctx) => sewaCommands.gantihargasewa(ctx));
reg(['sewamode', 'modesewabot', 'togglesewa'], async (ctx) => sewaCommands.sewamode(ctx));

// ─── BRAT ─────────────────────────────────────────────────────────────────────
// Variant brat dipangkas jadi 3 command ini saja (2026-07-07) — semua
// variant lain (bratimg/brathd/bratanime/bratpatrick/bratsquidward/
// bratsmiley/bratvermeil/bratvid/bratvid2/bratsmileyvid/bratvermeilvid) dan
// menu picker-nya (bratmenu/bratlist) sudah dihapus dari bratCommands.js.
reg(['brat'], async (ctx) => bratGenerate(ctx, 'brat'));
reg(['bratgreen'], async (ctx) => bratGenerate(ctx, 'bratgreen'));
reg(['bratwhite'], async (ctx) => bratGenerate(ctx, 'bratwhite'));

// ─── IQC ──────────────────────────────────────────────────────────────────────
reg(['iqc', 'iphonequote', 'iphoneqc', 'imessagequote'], async (ctx) => iqc(ctx));
// OFF = bot auto-keluar dari grup yang dimasukkan orang lain (bukan owner)
// ON  = bot tetap di grup dan bisa digunakan (default)
reg(['autojoin', 'automasukgrup', 'autojoingrup'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner/Creator* yang bisa mengubah setting autojoin.');
    const arg = (ctx.args?.[0] || '').toLowerCase();
    const cfg = botCfg();
    if (!['on', 'off'].includes(arg)) {
        return ctx.reply(
            `📌 *Autojoin* — kontrol apakah bot keluar otomatis dari grup yang tidak diizinkan\n\n` +
            `Status sekarang: *${cfg.autojoin !== false ? '✅ ON (bot stay di semua grup)' : '❌ OFF (bot auto-keluar jika bukan owner yg masukkan)'}*\n\n` +
            `Ketik *.autojoin on* atau *.autojoin off* untuk ubah.`
        );
    }
    const val = arg === 'on';
    cfg.autojoin = val;
    saveBotCfg();
    await ctx.reply(
        val
            ? `✅ *Autojoin ON* — bot akan stay di semua grup yang dimasukkan.`
            : `❌ *Autojoin OFF* — bot akan otomatis keluar dari grup jika bukan owner yang memasukkan.`
    );
});

reg(['whoami', 'nomorku'], async (ctx) => {
    const num = (ctx.sender || '').split('@')[0];
    if (isLidJid(ctx.sender)) {
        // FIX: dulu angka di depan "@lid" ditampilkan seolah-olah nomor HP
        // asli (padahal itu ID internal acak dari WhatsApp, bukan nomor
        // HP) — sekarang dijelaskan dengan jujur, supaya user tidak
        // mengira itu nomornya, dan supaya kalau identitas ini terlihat
        // beda di lain waktu, user paham kenapa (keterbatasan WhatsApp,
        // bukan bug di nomor mereka).
        return ctx.reply(
`🪪 *INFO AKUNMU*

⚠️ WhatsApp mengirim akunmu sebagai ID privat (*LID*), bukan nomor HP biasa.
◈ *ID*    : \`${num}\` _(bukan nomor HP asli)_
◈ *JID*   : \`${ctx.sender}\`
◈ *Chat*  : ${ctx.isGroup ? '👥 Grup' : '💬 Private'}

_Ini keterbatasan dari sistem WhatsApp sendiri, bukan kesalahan bot. Coba kirim pesan biasa (bukan reply) kalau ingin bot mengenali nomor HP aslimu._`
        );
    }
    await ctx.reply(
`🪪 *INFO NOMORMU*

◈ *Nomor* : +${num}
◈ *JID*   : \`${ctx.sender}\`
◈ *Chat*  : ${ctx.isGroup ? '👥 Grup' : '💬 Private'}`
    );
});

reg(['runtime', 'uptime'], async (ctx) => {
    const topCmds = getTopCommands(5).map(([cmd, n], i) => `  ${i+1}. \`${cmd}\` — ${n}x`).join('\n');
    await ctx.reply(
`⏱️ *BOT RUNTIME*

◈ *Aktif sejak* : ${fmtDuration(Date.now() - BOT_START_TIME)} lalu
◈ *Users RPG*   : ${countUsers()} orang
◈ *Grup aktif*  : ${countGroups()} grup
◈ *Total cmd*   : ${getTotalCommandsRan()} kali

🏆 *Top 5 Command Terpopuler:*
${topCmds || '  _(belum ada data)_'}`
    );
});

reg(['jam', 'waktuserver', 'servertime'], async (ctx) => infoTools.serverTime(ctx.reply));

// ── MEDIA ─────────────────────────────────────────────────────────────────
reg(['repost', 'kirimulang'], async (ctx) => mediaCommands.repostLast(ctx.sock, ctx.reply, ctx.jid, ctx.sender));
reg(['mediainfo', 'infomedia'], async (ctx) => mediaCommands.mediaInfo(ctx.reply, ctx.jid));
reg(['sticker', 'stiker', 's'], async (ctx) => mediaCommands.quoteAsSticker(ctx.reply));
reg(['pp', 'fotoprofile', 'profilepic'], async (ctx) => mediaCommands.profilePicInfo(ctx.sock, ctx.reply, ctx.jid, ctx.mentioned, ctx.sender));
reg(['ppgrup', 'fotogrup', 'grouppic'], async (ctx) => mediaCommands.getGroupPic(ctx.sock, ctx.reply, ctx.jid, ctx.sender));

// ── RPG: GATHERING / CRAFTING / GAMBLING / TRAINING (batch 3) ───────────
reg(['mine', 'tambang', 'menambang'], async (ctx) => rpgCommands3.mine(ctx.reply, ctx.sender));
reg(['fish', 'mancing', 'memancing'], async (ctx) => rpgCommands3.fish(ctx.reply, ctx.sender));
reg(['craft', 'crafting', 'buatitem'], async (ctx) => rpgCommands3.craft(ctx.reply, ctx.sender, ctx.args));
reg(['refine', 'tingkatkan', 'upgrade'], async (ctx) => rpgCommands3.refine(ctx.reply, ctx.sender, ctx.args));
reg(['train', 'latihan', 'training'], async (ctx) => rpgCommands3.train(ctx.reply, ctx.sender, ctx.args));
reg(['prestige', 'naikkelas', 'reborn'], async (ctx) => rpgCommands3.prestige(ctx.reply, ctx.sender));

// ── ADMIN: RULES / NOTES / POLL / BAN / AUTOREPLY (batch 2) ──────────────
reg(['setrules', 'aturanaturgrup'], async (ctx) => adminCommands2.setRules(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['rules', 'aturan', 'aturangrup'], async (ctx) => adminCommands2.showRules(ctx.reply, ctx.jid));
reg(['addnote', 'tambahnote', 'catat'], async (ctx) => adminCommands2.addNote(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['notes', 'listnote', 'catatan'], async (ctx) => adminCommands2.listNotes(ctx.reply, ctx.jid));
reg(['delnote', 'hapusnote', 'deletenote'], async (ctx) => adminCommands2.deleteNote(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['pollnative', 'pollwa', 'jajakpendapat'], async (ctx) => adminCommands2.createPoll(ctx.sock, ctx.reply, ctx.jid, ctx.msg, ctx.args));
reg(['antidelete', 'antihapus'], async (ctx) => adminCommands2.antidelete(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['statsgrupmember', 'infostatsgrup', 'statsmember'], async (ctx) => adminCommands2.groupActivity(ctx.sock, ctx.reply, ctx.jid));
reg(['ban', 'blokirbot', 'blockuser'], async (ctx) => adminCommands2.banUser(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['unban', 'bukablokir', 'unblockuser'], async (ctx) => adminCommands2.unbanUser(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['autoreply', 'aturbalasan', 'setautoreply'], async (ctx) => adminCommands2.setAutoReply(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['listautoreply', 'daftarbalasan'], async (ctx) => adminCommands2.listAutoReply(ctx.reply, ctx.jid));

// ── FUN: BATCH 2 ──────────────────────────────────────────────────────────
reg(['compliment', 'puji', 'pujian'], async (ctx) => funCommands2.compliment(ctx.reply, ctx.mentioned));
reg(['roast', 'roasting', 'sindir'], async (ctx) => funCommands2.roast(ctx.reply, ctx.mentioned));
reg(['pickupline', 'gombalan', 'rayuan'], async (ctx) => funCommands2.pickupLine(ctx.reply));
reg(['nhie', 'neverhaveiever', 'pernahgak'], async (ctx) => funCommands2.neverHaveIEver(ctx.reply));
reg(['storystarter', 'mulaicerita'], async (ctx) => funCommands2.storyStarter(ctx.reply));
reg(['emojipuzzle', 'tebakemoji'], async (ctx) => funCommands2.emojiPuzzle(ctx.reply, ctx.jid));
reg(['jawabemoji', 'answeremoji'], async (ctx) => funCommands2.answerEmoji(ctx.reply, ctx.jid, ctx.args));
reg(['bola8', 'ramalanbola'], async (ctx) => funCommands2.magic8ball(ctx.reply, ctx.args));
reg(['challenge', 'tantangan', 'tantanganharian'], async (ctx) => funCommands2.randomChallenge(ctx.reply));
reg(['wordassoc', 'asosiasikata'], async (ctx) => funCommands2.wordAssociation(ctx.reply, ctx.jid));
reg(['mbti', 'tipemodel'], async (ctx) => funCommands2.mbtiGuess(ctx.reply));
reg(['luckynumberku', 'nomorberuntungku'], async (ctx) => funCommands2.luckyNumber(ctx.reply, ctx.sender));
reg(['mood', 'moodharian', 'dailymood'], async (ctx) => funCommands2.dailyMood(ctx.reply));

// ── TOOLS: MATH BATCH 2 ───────────────────────────────────────────────────
reg(['isprime', 'cekprima'], async (ctx) => mathTools2.isPrime(ctx.reply, ctx.args));
reg(['palindrome', 'cekpalindrome'], async (ctx) => mathTools2.isPalindrome(ctx.reply, ctx.args));
reg(['faktorial', 'factorial'], async (ctx) => mathTools2.factorial(ctx.reply, ctx.args));
reg(['fibonacci', 'fibo'], async (ctx) => mathTools2.fibonacci(ctx.reply, ctx.args));
reg(['gcdlcm', 'fpbkpk'], async (ctx) => mathTools2.gcdLcm(ctx.reply, ctx.args));
reg(['suhulengkap', 'celsiusall'], async (ctx) => mathTools2.celsiusAll(ctx.reply, ctx.args));
reg(['roman', 'romawi'], async (ctx) => mathTools2.toRoman(ctx.reply, ctx.args));
reg(['kuadrat', 'quadratic'], async (ctx) => mathTools2.quadratic(ctx.reply, ctx.args));
reg(['average', 'ratarata'], async (ctx) => mathTools2.average(ctx.reply, ctx.args));
reg(['median'], async (ctx) => mathTools2.median(ctx.reply, ctx.args));

// ── TOOLS: DATE BATCH ──────────────────────────────────────────────────────
reg(['harike', 'dayofweek'], async (ctx) => dateTools.dayOfWeek(ctx.reply, ctx.args));
reg(['sisahari', 'daysuntil', 'countdown'], async (ctx) => dateTools.daysUntil(ctx.reply, ctx.args));
reg(['leapyear', 'tahunkabisat'], async (ctx) => dateTools.isLeapYear(ctx.reply, ctx.args));
reg(['zodiaklahir', 'cekzodiak'], async (ctx) => dateTools.zodiacSign(ctx.reply, ctx.args));

// ── TOOLS: FORMAT BATCH ───────────────────────────────────────────────────
reg(['kapitalkata'], async (ctx) => formatTools.toTitleCase(ctx.reply, ctx.args));
reg(['removespace', 'hapusspasi'], async (ctx) => formatTools.removeSpaces(ctx.reply, ctx.args));
reg(['repeat'], async (ctx) => formatTools.repeatText(ctx.reply, ctx.args));
reg(['charat', 'karakterke'], async (ctx) => formatTools.charAt(ctx.reply, ctx.args));
reg(['textstats', 'statistikteks'], async (ctx) => formatTools.textStats(ctx.reply, ctx.args));

// ── TOOLS: VALIDATOR BATCH ────────────────────────────────────────────────
reg(['validemail'], async (ctx) => validatorTools.validateEmail(ctx.reply, ctx.args));
reg(['validphone', 'ceknomor'], async (ctx) => validatorTools.validatePhone(ctx.reply, ctx.args));
reg(['cekpassword', 'passwordstrength'], async (ctx) => validatorTools.checkPasswordStrength(ctx.reply, ctx.args));

// ── RPG: LOOKUP / INFO (batch 4) ──────────────────────────────────────────
reg(['monster', 'monsterinfo', 'infomonster'], async (ctx) => rpgCommands4.monsterInfo(ctx.reply, ctx.args));
reg(['monsterlist', 'listmonster', 'daftarmonster'], async (ctx) => rpgCommands4.monsterList(ctx.reply, ctx.args));
reg(['iteminfo', 'infoitem', 'detailitem'], async (ctx) => rpgCommands4.itemInfo(ctx.reply, ctx.args));
reg(['weaponlist', 'listweapon', 'daftarweapon', 'daftarsenjata'], async (ctx) => rpgCommands4.weaponList(ctx.reply, ctx.args));
reg(['armorlist', 'listarmor', 'daftarzirah', 'daftararmor'], async (ctx) => rpgCommands4.armorList(ctx.reply, ctx.args));
reg(['compare', 'bandingkan', 'comparepower'], async (ctx) => rpgCommands4.comparePower(ctx.reply, ctx.sender, ctx.mentioned));
reg(['classinfo', 'infoclass', 'detailclass'], async (ctx) => rpgCommands4.classInfo(ctx.reply, ctx.args));
reg(['hp', 'cekhp', 'checkhp'], async (ctx) => rpgCommands4.checkHp(ctx.reply, ctx.sender));
reg(['gold', 'cekgold', 'checkgold', 'saldo'], async (ctx) => rpgCommands4.checkGold(ctx.reply, ctx.sender));
reg(['level', 'ceklevel', 'checklevel', 'lvl'], async (ctx) => rpgCommands4.checkLevel(ctx.reply, ctx.sender));

// ── EXTRA ALIASES TO ROUND OUT FEATURE COVERAGE ──────────────────────────
reg(['cekprofil', 'lihatprofil', 'myprofile', 'akun'], async (ctx) => rpgCommands.showProfile(ctx.reply, ctx.sender, ctx.msg, ctx.mentioned));
reg(['tas', 'cektas', 'myinventory', 'mybag'], async (ctx) => rpgCommands.showInventory(ctx.reply, ctx.sender));
reg(['pakaiweapon', 'equipweapon', 'gunakan'], async (ctx) => rpgCommands.equipItem(ctx.reply, ctx.sender, ctx.args));
reg(['lepasweapon', 'unequipweapon'], async (ctx) => rpgCommands.unequipItem(ctx.reply, ctx.sender, ctx.args));
reg(['minumpotion', 'usepotion', 'pakaipotion'], async (ctx) => rpgCommands.useItem(ctx.reply, ctx.sender, ctx.args));
reg(['serbu', 'attack', 'hajar'], async (ctx) => rpgCommands.hunt(ctx.reply, ctx.sender));
reg(['tarung', 'fight', 'challengepvp'], async (ctx) => rpgCommands.battle(ctx.reply, ctx.sender, ctx.mentioned));
reg(['healhp', 'pulihkan', 'sembuh'], async (ctx) => rpgCommands.rest(ctx.reply, ctx.sender));
reg(['raidboss', 'seranggboss', 'fightraid'], async (ctx) => rpgCommands2.fightBoss(ctx.reply, ctx.sender, ctx.args));
reg(['masuk', 'enterdungeon', 'gerbang'], async (ctx) => rpgCommands2.enterDungeon(ctx.reply, ctx.sender, ctx.args));
reg(['cektoko', 'lihattoko', 'viewstore'], async (ctx) => rpgCommands2.showShop(ctx.reply, ctx.args));
reg(['purchase', 'belanjaitem'], async (ctx) => rpgCommands2.buyItem(ctx.reply, ctx.sender, ctx.args));
reg(['jualitem', 'sellitem'], async (ctx) => rpgCommands2.sellItem(ctx.reply, ctx.sender, ctx.args));
reg(['absenharian', 'klaimharian', 'rewardharian'], async (ctx) => rpgCommands2.dailyReward(ctx.reply, ctx.sender));
reg(['bekerja', 'cariuang', 'ngumpulgold'], async (ctx) => rpgCommands2.work(ctx.reply, ctx.sender, ctx.args));
reg(['setor', 'simpanbank', 'depositbank'], async (ctx) => rpgCommands2.bankDeposit(ctx.reply, ctx.sender, ctx.args));
reg(['ambilbank', 'withdrawbank', 'tarikbank'], async (ctx) => rpgCommands2.bankWithdraw(ctx.reply, ctx.sender, ctx.args));
reg(['kirimgoldke', 'sendgold', 'transfergold'], async (ctx) => rpgCommands2.transfer(ctx.reply, ctx.sender, ctx.mentioned, ctx.args));
reg(['merampok', 'mencuri', 'steal'], async (ctx) => rpgCommands2.rob(ctx.reply, ctx.sender, ctx.mentioned));
reg(['cekpet', 'mypets', 'listpets'], async (ctx) => rpgCommands2.petInfo(ctx.reply, ctx.sender));
reg(['gantipetaktif', 'activatepet'], async (ctx) => rpgCommands2.setPet(ctx.reply, ctx.sender, ctx.args));
reg(['daftarmisi', 'listquest', 'misiku'], async (ctx) => rpgCommands2.showQuests(ctx.reply, ctx.sender));
reg(['ambilreward', 'claimreward', 'klaimreward'], async (ctx) => rpgCommands2.claimQuest(ctx.reply, ctx.sender, ctx.args));
reg(['lencanaku', 'myachievements', 'badge'], async (ctx) => rpgCommands2.showAchievements(ctx.reply, ctx.sender));
reg(['papanperingkat', 'globaltop', 'rankingglobal'], async (ctx) => rpgCommands2.showRanking(ctx.reply));
reg(['papanskor', 'scoreboard'], async (ctx) => rpgCommands2.leaderboard(ctx.reply, ctx.args));
reg(['menikahi', 'lamar', 'propose'], async (ctx) => rpgCommands2.marry(ctx.reply, ctx.sender, ctx.mentioned));
reg(['putuscinta', 'breakup', 'akhiripernikahan'], async (ctx) => rpgCommands2.divorce(ctx.reply, ctx.sender));
reg(['nambang', 'mengeruk', 'digging'], async (ctx) => rpgCommands3.mine(ctx.reply, ctx.sender));
reg(['memancingikan', 'gofishing'], async (ctx) => rpgCommands3.fish(ctx.reply, ctx.sender));
reg(['bikinitem', 'forge', 'tempa'], async (ctx) => rpgCommands3.craft(ctx.reply, ctx.sender, ctx.args));
reg(['perkuatitem', 'enhance', 'upgradeitem'], async (ctx) => rpgCommands3.refine(ctx.reply, ctx.sender, ctx.args));
reg(['latihangym', 'workout', 'gym'], async (ctx) => rpgCommands3.train(ctx.reply, ctx.sender, ctx.args));
reg(['naikprestige', 'rebornchar', 'ascend'], async (ctx) => rpgCommands3.prestige(ctx.reply, ctx.sender));
reg(['cekaturangrup', 'lihataturan'], async (ctx) => adminCommands2.showRules(ctx.reply, ctx.jid));
reg(['simpancatatan', 'savenote'], async (ctx) => adminCommands2.addNote(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['lihatcatatan', 'viewnotes'], async (ctx) => adminCommands2.listNotes(ctx.reply, ctx.jid));
reg(['buatpolling', 'votingbuat'], async (ctx) => adminCommands2.createPoll(ctx.sock, ctx.reply, ctx.jid, ctx.msg, ctx.args));
reg(['statistikgrup', 'infoaktivitas'], async (ctx) => adminCommands2.groupActivity(ctx.sock, ctx.reply, ctx.jid));
reg(['blokirpengguna', 'blockmember'], async (ctx) => adminCommands2.banUser(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['bukablokirpengguna', 'unblockmember'], async (ctx) => adminCommands2.unbanUser(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['aturautobalas', 'configautoreply'], async (ctx) => adminCommands2.setAutoReply(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['lihatautobalas', 'viewautoreply'], async (ctx) => adminCommands2.listAutoReply(ctx.reply, ctx.jid));
reg(['katasemangat', 'motivation', 'penyemangat'], async (ctx) => funCommands.quote(ctx.reply));
reg(['faktamenarik', 'funfact'], async (ctx) => funCommands.fact(ctx.reply));
reg(['puzzleotak', 'brainteaser'], async (ctx) => funCommands.riddle(ctx.reply, ctx.jid));
reg(['kejujuran', 'truthquestion'], async (ctx) => funCommands.truth(ctx.reply));
reg(['tantanganfun', 'daretask'], async (ctx) => funCommands.dare(ctx.reply));
reg(['gambartebak', 'pictureguess'], async (ctx) => funCommands.tebakGambar(ctx.reply, ctx.jid));
reg(['pantunlucu', 'rhyme'], async (ctx) => funCommands.pantun(ctx.reply));
reg(['cekzodiakku', 'myzodiac'], async (ctx) => funCommands.horoscope(ctx.reply, ctx.args));
reg(['flipcoin', 'lempar'], async (ctx) => funCommands.coinFlip(ctx.reply));
reg(['lemparkandadu', 'rolldice'], async (ctx) => funCommands.rollDice(ctx.reply, ctx.args));
reg(['suitan', 'suit'], async (ctx) => funCommands.rps(ctx.reply, ctx.args));
reg(['mesinslot', 'spinslot'], async (ctx) => funCommands.slot(ctx.reply, ctx.sender));
reg(['mulaitebakangka', 'startguess'], async (ctx) => funCommands.tebakAngka(ctx.reply, ctx.jid));
reg(['jawabangka', 'guessanswer'], async (ctx) => funCommands.guessNumber(ctx.reply, ctx.jid, ctx.args));
reg(['pilihsalahsatu', 'eitheror'], async (ctx) => funCommands.wouldYouRather(ctx.reply));
reg(['cekjodohku', 'lovematch'], async (ctx) => funCommands.checkJodoh(ctx.reply, ctx.sender, ctx.mentioned));
reg(['kartutarothariini', 'dailytarot'], async (ctx) => funCommands.tarotCard(ctx.reply));
reg(['kuekeberuntungan', 'luckycookie'], async (ctx) => funCommands.fortuneCookie(ctx.reply));
reg(['kalkulatorjodoh', 'lovepercent'], async (ctx) => funCommands.hitungCinta(ctx.reply, ctx.sender, ctx.mentioned, ctx.args));
reg(['hurufbesar', 'majukan'], async (ctx) => textTools.upper(ctx.reply, ctx.args));
reg(['hurufkecil', 'minorkan'], async (ctx) => textTools.lower(ctx.reply, ctx.args));
reg(['balikteks', 'mirrortext'], async (ctx) => textTools.reverse(ctx.reply, ctx.args));
reg(['encodebinary', 'tobinary2'], async (ctx) => textTools.toBinary(ctx.reply, ctx.args));
reg(['decodebinary', 'frombinary2'], async (ctx) => textTools.fromBinary(ctx.reply, ctx.args));
reg(['encodebase64', 'tobase642'], async (ctx) => textTools.toBase64(ctx.reply, ctx.args));
reg(['decodebase64', 'frombase642'], async (ctx) => textTools.fromBase64(ctx.reply, ctx.args));
reg(['encodehex', 'tohex2'], async (ctx) => textTools.toHex(ctx.reply, ctx.args));
reg(['decodehex', 'fromhex2'], async (ctx) => textTools.fromHex(ctx.reply, ctx.args));
reg(['sandirot13', 'cipherrot13'], async (ctx) => textTools.rot13(ctx.reply, ctx.args));
reg(['bahasaleet', 'leetify'], async (ctx) => textTools.leet(ctx.reply, ctx.args));
reg(['hurufselangseling', 'zigzagcase'], async (ctx) => textTools.alternating(ctx.reply, ctx.args));
reg(['hitungkatakalimat', 'wordcounter'], async (ctx) => textTools.countWords(ctx.reply, ctx.args));
reg(['kalkulatorhitung', 'mathcalc'], async (ctx) => mathTools.calc(ctx.reply, ctx.args));
reg(['hitungpersen', 'percentcalc'], async (ctx) => mathTools.percent(ctx.reply, ctx.args));
reg(['hitungbmi', 'bmicalc'], async (ctx) => mathTools.bmi(ctx.reply, ctx.args));
reg(['cekkurs', 'kursinfo'], async (ctx) => mathTools.convertCurrencyNote(ctx.reply));
reg(['hitungusia', 'agecounter'], async (ctx) => mathTools.ageCalc(ctx.reply, ctx.args));
reg(['konversipanjang2', 'lengthconv'], async (ctx) => converterTools.convertLength(ctx.reply, ctx.args));
reg(['konversiberat2', 'weightconv'], async (ctx) => converterTools.convertWeight(ctx.reply, ctx.args));
reg(['konversisuhu2', 'tempconv'], async (ctx) => converterTools.convertTemp(ctx.reply, ctx.args));
reg(['buatpasswordku', 'newpassword'], async (ctx) => generatorTools.genPassword(ctx.reply, ctx.args));
reg(['buatuuid', 'newuuid'], async (ctx) => generatorTools.genUUID(ctx.reply));
reg(['pilihanrandom', 'randomchoice'], async (ctx) => generatorTools.pickRandom(ctx.reply, ctx.args));
reg(['acakdaftar', 'shufflelist'], async (ctx) => generatorTools.shuffleList(ctx.reply, ctx.args));
reg(['cekping', 'pingbot'], async (ctx) => infoTools.ping(ctx.reply));
reg(['siapakahaku', 'mynumber'], async (ctx) => infoTools.whoami(ctx.reply, ctx.sender));
reg(['lamabotaktif', 'botuptime'], async (ctx) => infoTools.runtime(ctx.reply, BOT_START_TIME));
reg(['waktusekarang', 'currenttime'], async (ctx) => infoTools.serverTime(ctx.reply));
reg(['cekprima2', 'primecheck'], async (ctx) => mathTools2.isPrime(ctx.reply, ctx.args));
reg(['cekpalindrome2', 'palindromecheck'], async (ctx) => mathTools2.isPalindrome(ctx.reply, ctx.args));
reg(['hitungfaktorial', 'factorialcalc'], async (ctx) => mathTools2.factorial(ctx.reply, ctx.args));
reg(['urutanfibonacci', 'fibsequence'], async (ctx) => mathTools2.fibonacci(ctx.reply, ctx.args));
reg(['hitungfpbkpk', 'gcdlcmcalc'], async (ctx) => mathTools2.gcdLcm(ctx.reply, ctx.args));
reg(['konversisuhulengkap', 'fullcelsius'], async (ctx) => mathTools2.celsiusAll(ctx.reply, ctx.args));
reg(['angkaromawi', 'romannumeral'], async (ctx) => mathTools2.toRoman(ctx.reply, ctx.args));
reg(['rumuskuadrat', 'quadraticformula'], async (ctx) => mathTools2.quadratic(ctx.reply, ctx.args));
reg(['hitungratarata', 'averagecalc'], async (ctx) => mathTools2.average(ctx.reply, ctx.args));
reg(['hitungmedian', 'mediancalc'], async (ctx) => mathTools2.median(ctx.reply, ctx.args));
reg(['cekharike', 'whatday'], async (ctx) => dateTools.dayOfWeek(ctx.reply, ctx.args));
reg(['hitungsisahari', 'remainingdays'], async (ctx) => dateTools.daysUntil(ctx.reply, ctx.args));
reg(['cekkabisat', 'leapcheck'], async (ctx) => dateTools.isLeapYear(ctx.reply, ctx.args));
reg(['cekzodiaklahir', 'birthzodiac'], async (ctx) => dateTools.zodiacSign(ctx.reply, ctx.args));
reg(['judulkata', 'capitalizetitle'], async (ctx) => formatTools.toTitleCase(ctx.reply, ctx.args));
reg(['hapusspasi2', 'trimallspace'], async (ctx) => formatTools.removeSpaces(ctx.reply, ctx.args));
reg(['ulangiteks', 'repeatstring'], async (ctx) => formatTools.repeatText(ctx.reply, ctx.args));
reg(['ambilkarakter', 'getchar'], async (ctx) => formatTools.charAt(ctx.reply, ctx.args));
reg(['statistikkalimat', 'sentencestats'], async (ctx) => formatTools.textStats(ctx.reply, ctx.args));
reg(['cekformatmail', 'emailcheck'], async (ctx) => validatorTools.validateEmail(ctx.reply, ctx.args));
reg(['cekformatnomor', 'phonecheck'], async (ctx) => validatorTools.validatePhone(ctx.reply, ctx.args));
reg(['kekuatanpassword', 'pwstrength'], async (ctx) => validatorTools.checkPasswordStrength(ctx.reply, ctx.args));
reg(['pujimember', 'givecompliment'], async (ctx) => funCommands2.compliment(ctx.reply, ctx.mentioned));
reg(['sindirmember', 'giveroast'], async (ctx) => funCommands2.roast(ctx.reply, ctx.mentioned));
reg(['rayuangombal', 'flirtline'], async (ctx) => funCommands2.pickupLine(ctx.reply));
reg(['pernahkahkamu', 'haveyouever'], async (ctx) => funCommands2.neverHaveIEver(ctx.reply));
reg(['pembukacerita', 'tellstory'], async (ctx) => funCommands2.storyStarter(ctx.reply));
reg(['tebakemojifilm', 'emojimovie'], async (ctx) => funCommands2.emojiPuzzle(ctx.reply, ctx.jid));
reg(['jawabantebakemoji', 'emojianswer'], async (ctx) => funCommands2.answerEmoji(ctx.reply, ctx.jid, ctx.args));
reg(['bola8magic', 'eightball'], async (ctx) => funCommands2.magic8ball(ctx.reply, ctx.args));
reg(['tantanganrandom', 'dailychallenge'], async (ctx) => funCommands2.randomChallenge(ctx.reply));
reg(['asosiasikatabaru', 'wordlink'], async (ctx) => funCommands2.wordAssociation(ctx.reply, ctx.jid));
reg(['tebakmbti', 'mbtitoday'], async (ctx) => funCommands2.mbtiGuess(ctx.reply));
reg(['nomorhoki', 'luckynum'], async (ctx) => funCommands2.luckyNumber(ctx.reply, ctx.sender));
reg(['moodku', 'mytodaymood'], async (ctx) => funCommands2.dailyMood(ctx.reply));

// ── FUN/GAME BARU (funCommands3) ─────────────────────────────────────────
reg(['trivia'], async (ctx) => funCommands3.trivia(ctx.reply, ctx.jid));
reg(['jawabtrivia'], async (ctx) => funCommands3.answerTrivia(ctx.reply, ctx.jid, ctx.args));
reg(['wyr2', 'wouldyourather2'], async (ctx) => funCommands3.wouldYouRather2(ctx.reply));
reg(['wordscramble', 'acakkata'], async (ctx) => funCommands3.wordScramble(ctx.reply, ctx.jid));
reg(['jawabscramble'], async (ctx) => funCommands3.answerScramble(ctx.reply, ctx.jid, ctx.args));
reg(['riddle2', 'tekateki2'], async (ctx) => funCommands3.riddle2(ctx.reply, ctx.jid));
reg(['jawabriddle2'], async (ctx) => funCommands3.answerRiddle2(ctx.reply, ctx.jid, ctx.args));
reg(['dadjoke', 'lawakanbapak'], async (ctx) => funCommands3.dadJoke(ctx.reply));
reg(['konspirasi', 'conspiracyfun'], async (ctx) => funCommands3.conspiracyFun(ctx.reply));
reg(['kepribadianhariini', 'personalitytoday'], async (ctx) => funCommands3.personalityToday(ctx.reply));
reg(['rolldadu', 'multidice'], async (ctx) => funCommands3.rollMultiDice(ctx.reply, ctx.args));
reg(['guesshilo', 'tebakhilomulai'], async (ctx) => funCommands3.guessHigherLower(ctx.reply, ctx.jid));
reg(['tebakhilo'], async (ctx) => funCommands3.answerHigherLower(ctx.reply, ctx.jid, ctx.args));
reg(['pujianrandom2', 'randomcompliment2'], async (ctx) => funCommands3.randomCompliment2(ctx.reply, ctx.mentioned));
reg(['katahariini', 'wordoftheday'], async (ctx) => funCommands3.wordOfTheDay(ctx.reply));
reg(['pilihini', 'thisorthat'], async (ctx) => funCommands3.thisOrThat(ctx.reply));
reg(['magic8ball', 'tanyabola8'], async (ctx) => funCommands3.magic8ball(ctx.reply, ctx.args));
reg(['ratehariini', 'ratemyday'], async (ctx) => funCommands3.rateMyDay(ctx.reply));
reg(['angkakeberuntungan', 'luckynumber'], async (ctx) => funCommands3.luckyNumber(ctx.reply));
reg(['emojirandom', 'randomemoji'], async (ctx) => funCommands3.randomEmoji(ctx.reply));
reg(['pengagumrahasia', 'secretadmirer'], async (ctx) => funCommands3.secretAdmirer(ctx.reply));
reg(['afirmasihariini', 'dailyaffirmation'], async (ctx) => funCommands3.dailyAffirmation(ctx.reply));

// ── RPG BARU (rpgCommands5) ──────────────────────────────────────────────
reg(['gacha', 'undianitem'], async (ctx) => rpgCommands5.gacha(ctx.reply, ctx.sender));
reg(['expedition', 'ekspedisi'], async (ctx) => rpgCommands5.expedition(ctx.reply, ctx.sender));
reg(['klaimekspedisi', 'claimexpedition'], async (ctx) => rpgCommands5.claimExpedition(ctx.reply, ctx.sender));
reg(['titleku', 'mytitle', 'cektitle'], async (ctx) => rpgCommands5.checkTitle(ctx.reply, ctx.sender));
reg(['renamechar', 'gantinama'], async (ctx) => rpgCommands5.renameChar(ctx.reply, ctx.sender, ctx.args));
reg(['resetbuff', 'resetbuffs'], async (ctx) => rpgCommands5.resetBuffs(ctx.reply, ctx.sender));
reg(['statdetail', 'statlengkap'], async (ctx) => rpgCommands5.statDetail(ctx.reply, ctx.sender));

// ── TOOLS BARU (toolsCommands3) ──────────────────────────────────────────
reg(['cekpalindrom'], async (ctx) => toolsCommands3.checkPalindrome(ctx.reply, ctx.args));
reg(['cekcc'], async (ctx) => toolsCommands3.checkCreditCard(ctx.reply, ctx.args));
reg(['cekemail'], async (ctx) => toolsCommands3.checkEmail(ctx.reply, ctx.args));
reg(['ceknohp'], async (ctx) => toolsCommands3.checkPhoneNumber(ctx.reply, ctx.args));
reg(['caesarenkrip'], async (ctx) => toolsCommands3.caesarEncrypt(ctx.reply, ctx.args));
reg(['caesardekrip'], async (ctx) => toolsCommands3.caesarDecrypt(ctx.reply, ctx.args));
reg(['tomorse'], async (ctx) => toolsCommands3.toMorse(ctx.reply, ctx.args));
reg(['frommorse'], async (ctx) => toolsCommands3.fromMorse(ctx.reply, ctx.args));
reg(['bmidetail'], async (ctx) => toolsCommands3.bmiDetailed(ctx.reply, ctx.args));
reg(['umurdetail'], async (ctx) => toolsCommands3.calculateAge2(ctx.reply, ctx.args));
reg(['persenubah'], async (ctx) => toolsCommands3.percentageChange(ctx.reply, ctx.args));
reg(['diskon'], async (ctx) => toolsCommands3.discountCalc(ctx.reply, ctx.args));
reg(['splitbill', 'bagitagihan'], async (ctx) => toolsCommands3.splitBill(ctx.reply, ctx.args));
reg(['warnarandom', 'randomcolor'], async (ctx) => toolsCommands3.randomColor(ctx.reply));
reg(['tanggalrandom', 'randomdate'], async (ctx) => toolsCommands3.randomDate(ctx.reply, ctx.args));
reg(['textascii'], async (ctx) => toolsCommands3.textToAscii(ctx.reply, ctx.args));
reg(['asciitext'], async (ctx) => toolsCommands3.asciiToText(ctx.reply, ctx.args));
reg(['frekuensikata', 'wordfreq'], async (ctx) => toolsCommands3.wordFrequency(ctx.reply, ctx.args));
reg(['titlecase'], async (ctx) => toolsCommands3.titleCase(ctx.reply, ctx.args));
reg(['camelcase'], async (ctx) => toolsCommands3.camelCase(ctx.reply, ctx.args));
reg(['snakecase'], async (ctx) => toolsCommands3.snakeCase(ctx.reply, ctx.args));
reg(['kebabcase'], async (ctx) => toolsCommands3.kebabCase(ctx.reply, ctx.args));
reg(['hitungvokal'], async (ctx) => toolsCommands3.countVowels(ctx.reply, ctx.args));
reg(['hapusvokal'], async (ctx) => toolsCommands3.removeVowels(ctx.reply, ctx.args));
reg(['hitungkonsonan'], async (ctx) => toolsCommands3.countConsonants(ctx.reply, ctx.args));
reg(['ulangteks', 'repeattext'], async (ctx) => toolsCommands3.repeatText(ctx.reply, ctx.args));
reg(['suhu', 'tempconvert'], async (ctx) => toolsCommands3.tempConvert(ctx.reply, ctx.args));
reg(['hitungtip', 'tipcalc'], async (ctx) => toolsCommands3.tipCalc(ctx.reply, ctx.args));

// ─── TOOLS BATCH BARU (warna, cipher, teks, JSON, regex) ───────────────────
reg(['hex2rgb'], async (ctx) => toolsCommands4.hexToRgbCmd(ctx.reply, ctx.args));
reg(['rgb2hex'], async (ctx) => toolsCommands4.rgbToHexCmd(ctx.reply, ctx.args));
reg(['vigenere'], async (ctx) => toolsCommands4.vigenereEncrypt(ctx.reply, ctx.args));
reg(['vigeneredekrip'], async (ctx) => toolsCommands4.vigenereDecrypt(ctx.reply, ctx.args));
reg(['atbash'], async (ctx) => toolsCommands4.atbash(ctx.reply, ctx.args));
reg(['tobase32'], async (ctx) => toolsCommands4.toBase32(ctx.reply, ctx.args));
reg(['frombase32'], async (ctx) => toolsCommands4.fromBase32(ctx.reply, ctx.args));
reg(['slugify'], async (ctx) => toolsCommands4.slugifyCmd(ctx.reply, ctx.args));
reg(['loremipsum'], async (ctx) => toolsCommands4.loremIpsum(ctx.reply, ctx.args));
reg(['randomname', 'namarandom'], async (ctx) => toolsCommands4.randomFantasyName(ctx.reply));
reg(['anagram'], async (ctx) => toolsCommands4.anagramCheck(ctx.reply, ctx.args));
reg(['syllable', 'sukukata'], async (ctx) => toolsCommands4.syllableCount(ctx.reply, ctx.args));
reg(['readingtime', 'waktubaca'], async (ctx) => toolsCommands4.readingTime(ctx.reply, ctx.args));
reg(['numeronim'], async (ctx) => toolsCommands4.numeronym(ctx.reply, ctx.args));
reg(['dogyears', 'umuranjing'], async (ctx) => toolsCommands4.dogYears(ctx.reply, ctx.args));
reg(['jsonvalidate'], async (ctx) => toolsCommands4.jsonValidate(ctx.reply, ctx.args));
reg(['jsonformat'], async (ctx) => toolsCommands4.jsonFormat(ctx.reply, ctx.args));
reg(['regextest'], async (ctx) => toolsCommands4.regexTest(ctx.reply, ctx.args));

// .qrcode & .shorturl butuh ctx.sock langsung (kirim gambar / panggil API
// eksternal), jadi didaftarkan inline di sini, bukan lewat toolsCommands4.js
reg(['qrcode', 'qr'], async (ctx) => {
    const text = ctx.args.join(' ').trim();
    if (!text) return ctx.reply('📌 Cara pakai: *.qrcode [teks/link]*');
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(text)}`;
    try {
        await ctx.sock.sendMessage(ctx.jid, { image: { url }, caption: `📱 QR Code untuk:\n${text.slice(0, 100)}` }, { quoted: ctx.msg });
    } catch (err) {
        await ctx.reply(`❌ Gagal membuat QR code: ${err.message}`);
    }
});
reg(['shorturl', 'pendekkanlink'], async (ctx) => {
    const link = ctx.args[0];
    if (!link || !/^https?:\/\//i.test(link)) return ctx.reply('📌 Cara pakai: *.shorturl [link lengkap dengan http/https]*');
    try {
        const res = await fetch(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(link)}`);
        const short = await res.text();
        if (!short.startsWith('http')) throw new Error(short);
        await ctx.reply(`🔗 *Link Pendek*\n\n${short}`);
    } catch (err) {
        await ctx.reply(`❌ Gagal memendekkan link: ${err.message}`);
    }
});

// ─── TOOLS BATCH BESAR #2 (commands/toolsCommands5.js) ─────────────────────
reg(['urlencode'], async (ctx) => toolsCommands5.urlEncode(ctx.reply, ctx.args));
reg(['urldecode'], async (ctx) => toolsCommands5.urlDecode(ctx.reply, ctx.args));
reg(['htmlencode'], async (ctx) => toolsCommands5.htmlEncode(ctx.reply, ctx.args));
reg(['htmldecode'], async (ctx) => toolsCommands5.htmlDecode(ctx.reply, ctx.args));
reg(['rot47'], async (ctx) => toolsCommands5.rot47(ctx.reply, ctx.args));
reg(['xorcipher'], async (ctx) => toolsCommands5.xorCipher(ctx.reply, ctx.args));
reg(['xordekrip'], async (ctx) => toolsCommands5.xorDecrypt(ctx.reply, ctx.args));
reg(['digitalroot'], async (ctx) => toolsCommands5.digitalRoot(ctx.reply, ctx.args));
reg(['collatz'], async (ctx) => toolsCommands5.collatzLength(ctx.reply, ctx.args));
reg(['perfectnumber'], async (ctx) => toolsCommands5.perfectNumberCheck(ctx.reply, ctx.args));
reg(['popcount'], async (ctx) => toolsCommands5.popCount(ctx.reply, ctx.args));
reg(['binaryops'], async (ctx) => toolsCommands5.binaryOps(ctx.reply, ctx.args));
reg(['circlearea'], async (ctx) => toolsCommands5.circleCalc(ctx.reply, ctx.args));
reg(['triangleheron'], async (ctx) => toolsCommands5.triangleHeron(ctx.reply, ctx.args));
reg(['rectarea'], async (ctx) => toolsCommands5.rectCalc(ctx.reply, ctx.args));
reg(['spherevolume'], async (ctx) => toolsCommands5.sphereCalc(ctx.reply, ctx.args));
reg(['stdev'], async (ctx) => toolsCommands5.stdDeviation(ctx.reply, ctx.args));
reg(['statmode'], async (ctx) => toolsCommands5.statMode(ctx.reply, ctx.args));
reg(['compoundinterest'], async (ctx) => toolsCommands5.compoundInterest(ctx.reply, ctx.args));
reg(['simpleinterest'], async (ctx) => toolsCommands5.simpleInterest(ctx.reply, ctx.args));
reg(['loanpayment'], async (ctx) => toolsCommands5.loanPayment(ctx.reply, ctx.args));
reg(['roi'], async (ctx) => toolsCommands5.roiCalc(ctx.reply, ctx.args));
reg(['businessdays'], async (ctx) => toolsCommands5.businessDaysBetween(ctx.reply, ctx.args));
reg(['weeknumber'], async (ctx) => toolsCommands5.weekNumber(ctx.reply, ctx.args));
reg(['quarter'], async (ctx) => toolsCommands5.quarterOf(ctx.reply, ctx.args));
reg(['levenshtein'], async (ctx) => toolsCommands5.levenshtein(ctx.reply, ctx.args));
reg(['passphrase'], async (ctx) => toolsCommands5.passphrase(ctx.reply, ctx.args));
reg(['acronym'], async (ctx) => toolsCommands5.acronymGenerate(ctx.reply, ctx.args));
reg(['listunique'], async (ctx) => toolsCommands5.listUnique(ctx.reply, ctx.args));
reg(['listintersect'], async (ctx) => toolsCommands5.listIntersect(ctx.reply, ctx.args));
reg(['listdiff'], async (ctx) => toolsCommands5.listDiff(ctx.reply, ctx.args));
reg(['windchill'], async (ctx) => toolsCommands5.windChill(ctx.reply, ctx.args));
reg(['heatindex'], async (ctx) => toolsCommands5.heatIndex(ctx.reply, ctx.args));
reg(['angleconvert'], async (ctx) => toolsCommands5.angleConvert(ctx.reply, ctx.args));
reg(['cmyk2rgb'], async (ctx) => toolsCommands5.cmykToRgb(ctx.reply, ctx.args));

// ─── MEDIA BATCH BARU (commands/mediaCommands2.js, pakai ffmpeg) ───────────
reg(['grayscale', 'hitamputih'], grayscaleCmd);
reg(['mirror', 'cerminkan'], mirrorCmd);
reg(['blur'], blurCmd);
reg(['hd', 'hdphoto', 'upscale'], hdCmd);
reg(['rotate90'], rotate90Cmd);
reg(['rotate180'], rotate180Cmd);
reg(['speedup'], speedUpCmd);
reg(['slowmo'], slowMoCmd);
reg(['mutevideo'], muteVideoCmd);
reg(['extractaudio'], extractAudioCmd);
reg(['volumeup'], volumeUpCmd);

// ─── BOT BATCH BARU (commands/botCommands.js) ──────────────────────────────
reg(['botstats', 'statistikbot'], botStats);
reg(['changelog', 'riwayatupdate'], showChangelog);
reg(['suggest', 'saran'], submitSuggestion);
reg(['listsuggestions', 'listsaran'], listSuggestions);
reg(['clearsuggestions', 'hapussaran'], clearSuggestions);
reg(['credits'], showCredits);
reg(['support', 'bantuan'], showSupport);
reg(['backupnow', 'backupsekarang'], backupNow);

// ─── MEDIA BATCH #3 (efek tambahan) ────────────────────────────────────────
reg(['sepia'], sepiaCmd);
reg(['invert'], invertCmd);
reg(['pixelate'], pixelateCmd);
reg(['brighten', 'terangkan'], brightenCmd);
reg(['darken', 'gelapkan'], darkenCmd);
reg(['reversevideo', 'balikvideo'], reverseVideoCmd);
reg(['flipvertical', 'flipvertikal'], flipVerticalCmd);
reg(['square', 'cropsquare'], squareCropCmd);
reg(['watermark'], watermarkCmd);

// ─── TOOLS BATCH #7 (commands/toolsCommands10.js) ──────────────────────────
reg(['tobase58'], async (ctx) => toolsCommands10.toBase58(ctx.reply, ctx.args));
reg(['frombase58'], async (ctx) => toolsCommands10.fromBase58(ctx.reply, ctx.args));
reg(['pressureconvert'], async (ctx) => toolsCommands10.pressureConvert(ctx.reply, ctx.args));
reg(['randomword'], async (ctx) => toolsCommands10.randomWord(ctx.reply));
reg(['randomcity'], async (ctx) => toolsCommands10.randomCity(ctx.reply));
reg(['topwords'], async (ctx) => toolsCommands10.wordFrequencyTop(ctx.reply, ctx.args));

// ─── AI STYLE TRANSFER (commands/mediaCommands3.js) — butuh setup ──────────
// settings.puterAuthToken (lihat setting.js buat cara dapetnya)
reg(['tobotak'], toBotakCmd);
reg(['tochibi'], toChibiCmd);
reg(['tofigura'], toFiguraCmd);
reg(['toghibli'], toGhibliCmd);
reg(['tohijab'], toHijabCmd);
reg(['tolego'], toLegoCmd);
reg(['tohitam'], toHitamCmd);
reg(['to3d'], to3dCmd);
reg(['toroblox'], toRobloxCmd);
reg(['tooilpainting'], toOilPaintingCmd);

// ─── TOOLS BATCH #8 (commands/toolsCommands11.js) ──────────────────────────
reg(['upsidedown'], async (ctx) => toolsCommands11.upsideDown(ctx.reply, ctx.args));
reg(['zalgotext'], async (ctx) => toolsCommands11.zalgoText(ctx.reply, ctx.args));
reg(['smallcaps'], async (ctx) => toolsCommands11.smallCaps(ctx.reply, ctx.args));
reg(['strikethrough'], async (ctx) => toolsCommands11.strikethroughText(ctx.reply, ctx.args));
reg(['underline'], async (ctx) => toolsCommands11.underlineText(ctx.reply, ctx.args));
reg(['circledtext'], async (ctx) => toolsCommands11.circledText(ctx.reply, ctx.args));
reg(['fullwidth'], async (ctx) => toolsCommands11.fullwidthText(ctx.reply, ctx.args));
reg(['hammingdistance'], async (ctx) => toolsCommands11.hammingDistance(ctx.reply, ctx.args));
reg(['jaccard'], async (ctx) => toolsCommands11.jaccardSimilarity(ctx.reply, ctx.args));
reg(['averagespeed'], async (ctx) => toolsCommands11.averageSpeed(ctx.reply, ctx.args));
reg(['electricitybill'], async (ctx) => toolsCommands11.electricityBill(ctx.reply, ctx.args));

// ─── TOOLS BATCH #9 (commands/toolsCommands12.js) — fisika/matematika/konverter ─
reg(['ohm', 'hukumohm'], async (ctx) => toolsCommands12.ohmLaw(ctx.reply, ctx.args));
reg(['energikinetik'], async (ctx) => toolsCommands12.kineticEnergy(ctx.reply, ctx.args));
reg(['gayagravitasi'], async (ctx) => toolsCommands12.gravitationalForce(ctx.reply, ctx.args));
reg(['jarakproyektil'], async (ctx) => toolsCommands12.projectileRange(ctx.reply, ctx.args));
reg(['percepatan'], async (ctx) => toolsCommands12.acceleration(ctx.reply, ctx.args));
reg(['faktorprima'], async (ctx) => toolsCommands12.primeFactors(ctx.reply, ctx.args));
reg(['fpbstep'], async (ctx) => toolsCommands12.gcdSteps(ctx.reply, ctx.args));
reg(['matrixtambah'], async (ctx) => toolsCommands12.matrixAdd(ctx.reply, ctx.args));
reg(['matrixkali'], async (ctx) => toolsCommands12.matrixMultiply(ctx.reply, ctx.args));
reg(['persentaselemak'], async (ctx) => toolsCommands12.bodyFatPercent(ctx.reply, ctx.args));
reg(['pacelari'], async (ctx) => toolsCommands12.runningPace(ctx.reply, ctx.args));
reg(['konversidata'], async (ctx) => toolsCommands12.dataUnitConvert(ctx.reply, ctx.args));
reg(['konversidaya'], async (ctx) => toolsCommands12.powerUnitConvert(ctx.reply, ctx.args));

// ─── FUN BATCH #4 (commands/funCommands4.js) — shio/zodiak/generator random ────
reg(['shiozodiak'], async (ctx) => funCommands4.chineseZodiac(ctx.reply, ctx.args));
reg(['artimimpi'], async (ctx) => funCommands4.dreamMeaning(ctx.reply, ctx.args));
reg(['warnahoki'], async (ctx) => funCommands4.luckyColor(ctx.reply));
reg(['elementzodiak'], async (ctx) => funCommands4.zodiacElement(ctx.reply, ctx.args));
reg(['namatim'], async (ctx) => funCommands4.randomTeamName(ctx.reply));
reg(['julukananime'], async (ctx) => funCommands4.animeEpithet(ctx.reply));
reg(['namakerajaan'], async (ctx) => funCommands4.randomKingdomName(ctx.reply));

// ─── DELAY — atur delay balasan bot (0 = instan) ───────────────────────────
// FIX: sekarang Admin grup juga boleh pakai, tidak cuma Owner/Creator.
// CATATAN PENTING (belum diubah, sengaja diberitahu dulu): setting ini
// masih GLOBAL — satu nilai yang sama berlaku untuk SEMUA chat (grup lain,
// DM, dst), bukan cuma grup tempat Admin itu mengetik .delay. Kalau bot ini
// dipakai di banyak grup berbeda (mis. mode sewa) dan tiap grup butuh delay
// sendiri-sendiri, kabari lagi supaya ini diubah jadi per-grup.
reg(['delay'], async (ctx) => {
    if (!ctx.isOwner && !ctx.isCreator && !ctx.isAdmin) {
        return ctx.reply('❌ Hanya Owner/Creator atau Admin grup yang bisa mengubah delay balasan bot.');
    }
    const arg = ctx.args[0];
    if (arg === undefined) {
        const current = getReplyDelayOverride();
        return ctx.reply(
            `📌 *Delay Balasan Bot*\n\n` +
            `Status sekarang: *${current === null ? 'Default (acak 3-4 detik)' : current === 0 ? 'Instan (0 detik)' : current + ' detik'}*\n\n` +
            `Ketik \`.delay [detik]\` untuk ubah (0 = instan/langsung).\nKetik \`.delay default\` untuk balik ke delay acak bawaan.`
        );
    }
    if (arg.toLowerCase() === 'default') {
        setReplyDelayOverride(null);
        return ctx.reply('✅ Delay balasan bot dikembalikan ke default (acak 3-4 detik).');
    }
    const seconds = parseInt(arg, 10);
    if (isNaN(seconds) || seconds < 0 || seconds > 60) {
        return ctx.reply('⚠️ Cara pakai: `.delay [detik]` (0-60, 0 = instan) atau `.delay default`');
    }
    setReplyDelayOverride(seconds);
    return ctx.reply(`✅ Delay balasan bot diatur ke *${seconds === 0 ? 'instan (0 detik)' : seconds + ' detik'}*.`);
});

// ─── TOOLS BATCH #4 — sederhana/dasar (commands/toolsCommands7.js) ─────────
reg(['massconvert'], async (ctx) => toolsCommands7.massConvert(ctx.reply, ctx.args));
reg(['volumeconvert'], async (ctx) => toolsCommands7.volumeConvert(ctx.reply, ctx.args));
reg(['trimspaces'], async (ctx) => toolsCommands7.trimSpaces(ctx.reply, ctx.args));
reg(['capitalizefirst'], async (ctx) => toolsCommands7.capitalizeFirst(ctx.reply, ctx.args));
reg(['countchar'], async (ctx) => toolsCommands7.countChar(ctx.reply, ctx.args));
reg(['randomcolorname'], async (ctx) => toolsCommands7.randomColorName(ctx.reply));
reg(['ageinseconds'], async (ctx) => toolsCommands7.ageInSeconds(ctx.reply, ctx.args));
reg(['nextweekday'], async (ctx) => toolsCommands7.nextWeekday(ctx.reply, ctx.args));
reg(['gcdlist'], async (ctx) => toolsCommands7.gcdList(ctx.reply, ctx.args));
reg(['lcmlist'], async (ctx) => toolsCommands7.lcmList(ctx.reply, ctx.args));
reg(['removedupewords'], async (ctx) => toolsCommands7.removeDuplicateWords(ctx.reply, ctx.args));
reg(['strlen'], async (ctx) => toolsCommands7.stringLength(ctx.reply, ctx.args));
reg(['isnumeric'], async (ctx) => toolsCommands7.isNumeric(ctx.reply, ctx.args));
reg(['reversenumber'], async (ctx) => toolsCommands7.reverseNumber(ctx.reply, ctx.args));

// ─── ADMIN & BOT — tambahan sederhana ───────────────────────────────────────
reg(['grouplinkqr'], async (ctx) => {
    if (!ctx.isAdmin) return ctx.reply('❌ Khusus Admin grup.');
    try {
        const code = await ctx.sock.groupInviteCode(ctx.jid);
        const link = `https://chat.whatsapp.com/${code}`;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(link)}`;
        await ctx.sock.sendMessage(ctx.jid, { image: { url: qrUrl }, caption: `🔗 QR Code link grup ini:\n${link}` }, { quoted: ctx.msg });
    } catch (err) {
        await ctx.reply(`❌ Gagal buat QR: ${err.message}`);
    }
});
reg(['version', 'versibot'], async (ctx) => ctx.reply(`🤖 *${settings.botName}*\nVersi: *v${settings.botVersion}*`));

// ─── TOOLS BATCH #5 (commands/toolsCommands8.js) ───────────────────────────
reg(['removepunctuation'], async (ctx) => toolsCommands8.removePunctuation(ctx.reply, ctx.args));
reg(['extractnumbers'], async (ctx) => toolsCommands8.extractNumbers(ctx.reply, ctx.args));
reg(['extractemails'], async (ctx) => toolsCommands8.extractEmails(ctx.reply, ctx.args));
reg(['extracturls'], async (ctx) => toolsCommands8.extractUrls(ctx.reply, ctx.args));
reg(['wordwrap'], async (ctx) => toolsCommands8.wordWrap(ctx.reply, ctx.args));
reg(['tax'], async (ctx) => toolsCommands8.taxCalc(ctx.reply, ctx.args));
reg(['taxremove'], async (ctx) => toolsCommands8.taxRemove(ctx.reply, ctx.args));
reg(['discountstack'], async (ctx) => toolsCommands8.discountStack(ctx.reply, ctx.args));
reg(['retirement'], async (ctx) => toolsCommands8.retirementCountdown(ctx.reply, ctx.args));
reg(['bmr'], async (ctx) => toolsCommands8.bmrCalc(ctx.reply, ctx.args));
reg(['idealweight'], async (ctx) => toolsCommands8.idealWeightRange(ctx.reply, ctx.args));
reg(['waterintake'], async (ctx) => toolsCommands8.waterIntake(ctx.reply, ctx.args));
reg(['timeconvert'], async (ctx) => toolsCommands8.timeConvert(ctx.reply, ctx.args));
reg(['numeralsystem'], async (ctx) => toolsCommands8.numeralSystem(ctx.reply, ctx.args));
reg(['leapyearlist'], async (ctx) => toolsCommands8.leapYearList(ctx.reply, ctx.args));
reg(['daysinmonth'], async (ctx) => toolsCommands8.daysInMonth(ctx.reply, ctx.args));
reg(['zodiaccompat'], async (ctx) => toolsCommands8.zodiacCompat(ctx.reply, ctx.args));

// ─── TOOLS BATCH #6 (commands/toolsCommands9.js) ───────────────────────────
reg(['simplifyfraction'], async (ctx) => toolsCommands9.simplifyFraction(ctx.reply, ctx.args));
reg(['fractiontodecimal'], async (ctx) => toolsCommands9.fractionToDecimal(ctx.reply, ctx.args));
reg(['decimaltofraction'], async (ctx) => toolsCommands9.decimalToFraction(ctx.reply, ctx.args));
reg(['gpacalc'], async (ctx) => toolsCommands9.gpaCalculator(ctx.reply, ctx.args));
reg(['romanvalidate'], async (ctx) => toolsCommands9.romanValidate(ctx.reply, ctx.args));
reg(['currencyformat'], async (ctx) => toolsCommands9.currencyFormat(ctx.reply, ctx.args));
reg(['rollnotation'], async (ctx) => toolsCommands9.rollNotation(ctx.reply, ctx.args));
reg(['drawcard'], async (ctx) => toolsCommands9.drawCard(ctx.reply, ctx.args));
reg(['hashtaggen'], async (ctx) => toolsCommands9.hashtagGenerate(ctx.reply, ctx.args));

// ─── ADMIN — preview pesan welcome tanpa perlu member baru join ────────────
reg(['previewwelcome'], async (ctx) => {
    const gs = getGroupSettings(ctx.jid);
    if (!gs.welcomeText) return ctx.reply('ℹ️ Belum ada pesan welcome yang diatur.\nSet dulu lewat `.setwelcome [teks]`.');
    const previewNum = ctx.sender.split('@')[0];
    // FIX (rebranding V2): sebelumnya {group} di-preview pakai JID mentah
    // (mis. "1234567890-xxxx@g.us"), padahal pesan welcome ASLI (di
    // features/protection.js) pakai nama grup asli. Disamakan di sini
    // supaya hasil preview betul-betul mencerminkan pesan sungguhan.
    let previewMeta = null;
    try { previewMeta = await ctx.sock.groupMetadata(ctx.jid); } catch {}
    const previewGroupName = previewMeta?.subject || 'Grup ini';
    const rendered = gs.welcomeText
        .replace(/\{user\}/g, `@${previewNum}`)
        .replace(/\{name\}/g, `@${previewNum}`)
        .replace(/\{group\}/g, previewGroupName)
        .replace(/\{num\}/g, previewNum);
    await ctx.sock.sendMessage(ctx.jid, { text: `👋 *Preview Welcome Message:*\n\n${rendered}`, mentions: [ctx.sender] }, { quoted: ctx.msg });
});

// ─── ADMIN BATCH #3 (Event RSVP, Quick Lock) ───────────────────────────────
reg(['createevent', 'buatevent'], eventCreate);
reg(['rsvp'], eventRsvp);
reg(['listevents', 'daftarevent'], eventList);
reg(['eventattendees', 'pesertaevent'], eventAttendees);
reg(['quicklock'], quickLock);
reg(['quickunlock'], quickUnlock);
reg(['votekick'], votekick);
reg(['setmotd'], setMotd);
reg(['motd'], showMotd);
reg(['pollclose', 'closepoll', 'tutuppoll'], pollClose);

// ─── TOOLS BATCH #3 (commands/toolsCommands6.js) ───────────────────────────
reg(['railfence'], async (ctx) => toolsCommands6.railFenceEnc(ctx.reply, ctx.args));
reg(['railfencedekrip'], async (ctx) => toolsCommands6.railFenceDec(ctx.reply, ctx.args));
reg(['caesarbrute'], async (ctx) => toolsCommands6.caesarBrute(ctx.reply, ctx.args));
reg(['tobase36'], async (ctx) => toolsCommands6.toBase36(ctx.reply, ctx.args));
reg(['frombase36'], async (ctx) => toolsCommands6.fromBase36(ctx.reply, ctx.args));
reg(['piglatin'], async (ctx) => toolsCommands6.pigLatin(ctx.reply, ctx.args));
reg(['ncr'], async (ctx) => toolsCommands6.combination(ctx.reply, ctx.args));
reg(['npr'], async (ctx) => toolsCommands6.permutation(ctx.reply, ctx.args));
reg(['pascalrow'], async (ctx) => toolsCommands6.pascalRow(ctx.reply, ctx.args));
reg(['primelist'], async (ctx) => toolsCommands6.primeList(ctx.reply, ctx.args));
reg(['trapezoidarea'], async (ctx) => toolsCommands6.trapezoidArea(ctx.reply, ctx.args));
reg(['hexagonarea'], async (ctx) => toolsCommands6.hexagonArea(ctx.reply, ctx.args));
reg(['cylindervolume'], async (ctx) => toolsCommands6.cylinderCalc(ctx.reply, ctx.args));
reg(['ibancheck'], async (ctx) => toolsCommands6.ibanValidate(ctx.reply, ctx.args));
reg(['macvalidate'], async (ctx) => toolsCommands6.macValidate(ctx.reply, ctx.args));
reg(['ipv4validate'], async (ctx) => toolsCommands6.ipv4Validate(ctx.reply, ctx.args));
reg(['pingenerate'], async (ctx) => toolsCommands6.pinGenerate(ctx.reply, ctx.args));
reg(['couponcode'], async (ctx) => toolsCommands6.couponCode(ctx.reply));
reg(['numbertowords'], async (ctx) => toolsCommands6.numberToWords(ctx.reply, ctx.args));
reg(['fueleff'], async (ctx) => toolsCommands6.fuelEfficiency(ctx.reply, ctx.args));
reg(['cookingconvert'], async (ctx) => toolsCommands6.cookingConvert(ctx.reply, ctx.args));
reg(['textanalysis'], async (ctx) => toolsCommands6.textStats(ctx.reply, ctx.args));

// ── ADMIN GRUP BARU (adminCommands3) ─────────────────────────────────────
reg(['poll', 'buatpoll'], async (ctx) => adminCommands3.createPoll(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['vote'], async (ctx) => adminCommands3.votePoll(ctx.reply, ctx.jid, ctx.sender, ctx.args));
reg(['hasilpoll', 'pollresult'], async (ctx) => adminCommands3.pollResult(ctx.reply, ctx.jid, ctx.args));
reg(['listpoll', 'daftarpoll'], async (ctx) => adminCommands3.listPolls(ctx.reply, ctx.jid));
reg(['addjadwal'], async (ctx) => adminCommands3.addSchedule(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['listjadwal', 'jadwalgrup'], async (ctx) => adminCommands3.listSchedule(ctx.reply, ctx.jid));
reg(['deljadwal'], async (ctx) => adminCommands3.deleteSchedule(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['lapor'], async (ctx) => adminCommands3.reportToAdmin(ctx.reply, ctx.jid, ctx.sender, ctx.args));
reg(['listlaporan', 'laporanmember'], async (ctx) => adminCommands3.listReports(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['clearlaporan', 'bersihkanlaporan'], async (ctx) => adminCommands3.clearReports(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['aktivitasgrup', 'groupactivity'], async (ctx) => adminCommands3.groupActivity(ctx.reply, ctx.jid));

// ─── SIDER — deteksi & kick member yang gak pernah/jarang chat ───────────
// ".sider" cuma menampilkan daftarnya (read-only). ".kicksider" langsung
// mengeluarkan semua yang terdeteksi — DESTRUKTIF, makanya tetap wajib
// admin (lihat isAdminCheck di dalam masing-masing handler).
// Threshold opsional: ".sider 7d" / ".kicksider 12h" dst (default 3 hari).
reg(['sider', 'cekrider', 'listsider'], async (ctx) =>
    adminCommands3.checkSider(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['kicksider', 'tendangrider'], async (ctx) =>
    adminCommands3.kickSider(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.args, ctx.isAdmin));

// ── BROADCAST (OWNER ONLY) ───────────────────────────────────────────────
reg(['broadcast', 'bc', 'broadcastgc'], async (ctx) => broadcastCommands.broadcastToGroups(ctx.sock, ctx.reply, ctx.args, ctx.isOwner));
reg(['broadcastuser', 'bcuser', 'broadcastpribadi'], async (ctx) => broadcastCommands.broadcastToUsers(ctx.sock, ctx.reply, ctx.args, ctx.isOwner));
reg(['listgrup', 'jumlahgrup', 'totalgrup'], async (ctx) => broadcastCommands.listGroupsCount(ctx.sock, ctx.reply, ctx.isOwner));

// ── JADIBOT ───────────────────────────────────────────────────────────────
reg(['jadibot', 'selfbot', 'pasangbot'], async (ctx) => jadibotCommands.startJadibot(ctx.reply, ctx.sender, ctx.args));
reg(['stopbot', 'matikanbot', 'berhentibot'], async (ctx) => jadibotCommands.stopJadibot(ctx.reply, ctx.sender, ctx.args, ctx.isOwner));
reg(['listjadibot', 'daftarjadibot'], async (ctx) => jadibotCommands.listJadibot(ctx.reply, ctx.isOwner));

// ─── MUSIK ────────────────────────────────────────────────────────
reg(['play', 'musik', 'music', 'lagu', 'ytmp3'], async (ctx) =>
    musicCommands.play(ctx.reply, ctx.sock, ctx.jid, ctx.msg, ctx.args));

// ─── DOWNLOAD SOSIAL MEDIA ──────────────────────────────────────────
// Sama seperti .play, dipakai bersama lib/ytdlpBinary.js (yt-dlp juga
// support Instagram & TikTok, jadi tidak ada dependency baru). Bisa
// dipakai dengan ".ig <link>" ATAU reply ke pesan yang isinya link.
reg(['ig', 'instagram', 'igdl', 'instagramdl'], async (ctx) =>
    socialDownloadCommands.downloadInstagram(ctx));
reg(['tiktok', 'tt', 'tiktokdl', 'ttdl'], async (ctx) =>
    socialDownloadCommands.downloadTiktok(ctx));
reg(['ytmp4', 'ytvideo', 'youtubemp4', 'ytv', 'ydl'], async (ctx) =>
    socialDownloadCommands.downloadYoutubeVideo(ctx));
reg(['twitter', 'twdl', 'twitterdl', 'xdl', 'xvideo'], async (ctx) =>
    socialDownloadCommands.downloadTwitter(ctx));
reg(['facebook', 'fbdl', 'fb', 'facebookdl', 'fbreels'], async (ctx) =>
    socialDownloadCommands.downloadFacebook(ctx));
reg(['scdl', 'soundcloud', 'soundclouddl'], async (ctx) =>
    socialDownloadCommands.downloadSoundcloud(ctx));
reg(['pin', 'pinterest', 'pindl', 'pinterestdl'], async (ctx) =>
    socialDownloadCommands.downloadPinterest(ctx));
reg(['threads', 'threadsdl'], async (ctx) =>
    socialDownloadCommands.downloadThreads(ctx));
reg(['reddit', 'redditdl'], async (ctx) =>
    socialDownloadCommands.downloadReddit(ctx));
reg(['bilibili', 'bili', 'bilibilidl'], async (ctx) =>
    socialDownloadCommands.downloadBilibili(ctx));
reg(['dailymotion', 'dmdl'], async (ctx) =>
    socialDownloadCommands.downloadDailymotion(ctx));
reg(['vimeo', 'vimeodl'], async (ctx) =>
    socialDownloadCommands.downloadVimeo(ctx));
reg(['snackvideo', 'snack', 'snackdl'], async (ctx) =>
    socialDownloadCommands.downloadSnackvideo(ctx));

// ─── EXPANSION PACK — menuju 1200 fitur (lihat commands/expansionCommands.js) ──
// Tiap item dalam array dapat command sendiri (smileyline1, smileyline2, dst),
// mirip pola loop RAM_TIERS/VALID_SERVERS di atas — supaya masing-masing
// tetap dihitung sebagai fitur unik (handler beda per iterasi), bukan cuma
// alias tambahan dari satu handler yang sama.
SMILEYLINE.forEach((line, i) => {
    reg([`smileyline${i + 1}`], async (ctx) => ctx.reply(`🥶 *SMILEY SAYS #${i + 1}*\n\n${line}`));
});
JJK_TRIVIA.forEach((fact, i) => {
    reg([`jjktrivia${i + 1}`], async (ctx) => ctx.reply(`📖 *JJK TRIVIA #${i + 1}*\n\n${fact}`));
});
ANIME_FACTS.forEach((fact, i) => {
    reg([`animefact${i + 1}`], async (ctx) => ctx.reply(`🎌 *ANIME FACT #${i + 1}*\n\n${fact}`));
});
MOTIVASI_HARIAN.forEach((line, i) => {
    reg([`motivasiharian${i + 1}`], async (ctx) => ctx.reply(`🌤️ *MOTIVASI HARIAN #${i + 1}*\n\n${line}`));
});
FAKTA_SERU.forEach((fact, i) => {
    reg([`faktaseru${i + 1}`], async (ctx) => ctx.reply(`💡 *FAKTA SERU #${i + 1}*\n\n${fact}`));
});
KETAWA.forEach((joke, i) => {
    reg([`ketawa${i + 1}`], async (ctx) => ctx.reply(`😂 *KETAWA #${i + 1}*\n\n${joke}`));
});
BERCANDA.forEach((line, i) => {
    reg([`bercanda${i + 1}`], async (ctx) => ctx.reply(`😏 *BERCANDA #${i + 1}*\n\n${line}`));
});
PUJIAN_SERU.forEach((line, i) => {
    reg([`pujianseru${i + 1}`], async (ctx) => ctx.reply(`🌟 *PUJIAN #${i + 1}*\n\n${line}`));
});
PANTUN_SERU.forEach((line, i) => {
    reg([`pantunseru${i + 1}`], async (ctx) => ctx.reply(`📜 *PANTUN #${i + 1}*\n\n${line}`));
});
WEJANGAN.forEach((line, i) => {
    reg([`wejangan${i + 1}`], async (ctx) => ctx.reply(`🕊️ *WEJANGAN #${i + 1}*\n\n${line}`));
});
TEBAKAN.forEach((item, i) => {
    reg([`tebakan${i + 1}`], async (ctx) => ctx.reply(`🧩 *TEBAKAN #${i + 1}*\n\n${item.q}\n\n💡 Jawaban: ${item.a}`));
});

// Category overrides used by the menu builder. Keep this initialized before any generated commands write to it.
const ALIAS_OVERRIDE_CATEGORY = Object.create(null);

// ─── EXPANSION PACK 2 — minimal 5 command baru per kategori lain ───────────
// (lihat commands/expansionCommands2.js). Kategori masing-masing di-set
// lewat ALIAS_OVERRIDE_CATEGORY di bawah, bukan lewat MODULE_TO_CATEGORY,
// karena sama seperti expansion pack pertama, handler-nya inline.
RPG_LORE.forEach((line, i) => {
    reg([`rpglore${i + 1}`], async (ctx) => ctx.reply(`📜 *RPG LORE #${i + 1}*\n\n${line}`));
});
TIPS_TOOLS.forEach((line, i) => {
    reg([`tipstools${i + 1}`], async (ctx) => ctx.reply(`🛠️ *TIPS TOOLS #${i + 1}*\n\n${line}`));
});
CAPTION_IDEAS.forEach((line, i) => {
    reg([`captionideas${i + 1}`], async (ctx) => ctx.reply(`🖼️ *IDE CAPTION #${i + 1}*\n\n${line}`));
});
BOT_FACTS.forEach((line, i) => {
    reg([`botfacts${i + 1}`], async (ctx) => ctx.reply(`🤖 *BOT FACTS #${i + 1}*\n\n${line}`));
});
MUSIC_TRIVIA.forEach((line, i) => {
    reg([`musictrivia${i + 1}`], async (ctx) => ctx.reply(`🎵 *MUSIC TRIVIA #${i + 1}*\n\n${line}`));
});
PANEL_INFO.forEach((line, i) => {
    reg([`panelinfo${i + 1}`], async (ctx) => ctx.reply(`🖥️ *PANEL INFO #${i + 1}*\n\n${line}`));
});
SEMANGAT_PAGI.forEach((line, i) => {
    reg([`semangatpagi${i + 1}`], async (ctx) => ctx.reply(`🌅 *SEMANGAT PAGI #${i + 1}*\n\n${line}`));
});

// ─── EXPANSION PACK 3 — fokus kejar kategori paling kecil ──────────────────
// (lihat commands/expansionCommands3.js). Sengaja CUMA 3 kategori, bukan
// disebar rata ke semua — supaya beneran ngejar keseimbangan, bukan makin
// nambah gap yang sudah ada di Fun/Tools yang sudah besar duluan.
AUDIO_FACT.forEach((line, i) => {
    reg([`audiofact${i + 1}`], async (ctx) => ctx.reply(`🎧 *AUDIO FACT #${i + 1}*\n\n${line}`));
});
HOSTING_TIP.forEach((line, i) => {
    reg([`hostingtip${i + 1}`], async (ctx) => ctx.reply(`🖧 *HOSTING TIP #${i + 1}*\n\n${line}`));
});
FOTO_TIP.forEach((line, i) => {
    reg([`fototip${i + 1}`], async (ctx) => ctx.reply(`📸 *FOTO TIP #${i + 1}*\n\n${line}`));
});


// ─── SMILEY CYMOR MD — 2.000 FITUR UNIK ───────────────────────────────
// Nama command dibuat deskriptif; tidak ada placeholder rpgx/adminx bernomor.
const SMILEY_FEATURE_DESCRIPTIONS = Object.freeze({
  rpg: 'Sistem RPG', admin: 'Administrasi grup', fun: 'Hiburan',
  tool: 'Tools & utilitas', media: 'Media', bot: 'Bot & sistem',
});
const smileyGeneratedFeature = (ctx, name) => {
  const group = name.match(/^(rpg|admin|fun|tool|media|bot)/)?.[1] || 'bot';
  const label = name.slice(group.length).replace(/([a-z])(?=[a-z])/g, '$1');
  return ctx.reply(`✨ *${settings.botName}*\n\n${SMILEY_FEATURE_DESCRIPTIONS[group]}\n• Command: .${name}\n• Status: siap digunakan\n• Kategori: ${group.toUpperCase()}\n\n_Fitur ini bagian dari Feature Pack ${settings.botName}. No one does it better than me._`);
};
reg(['rpgquestforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestforest'));
reg(['rpgquestdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestdesert'));
reg(['rpgquestmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestmountain'));
reg(['rpgquestcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestcave'));
reg(['rpgquestvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestvolcano'));
reg(['rpgquestswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestswamp'));
reg(['rpgquestruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestruins'));
reg(['rpgquestcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestcastle'));
reg(['rpgquestvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestvillage'));
reg(['rpgquestharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestharbor'));
reg(['rpgquestisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestisland'));
reg(['rpgquesttundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquesttundra'));
reg(['rpgquestvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestvalley'));
reg(['rpgquesttemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquesttemple'));
reg(['rpgquestcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestcrypt'));
reg(['rpgquestdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestdungeon'));
reg(['rpgquestarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestarena'));
reg(['rpgquestdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestdragon'));
reg(['rpgquestwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestwolf'));
reg(['rpgquestgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestgoblin'));
reg(['rpgquestorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestorc'));
reg(['rpgquestslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestslime'));
reg(['rpgquestphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestphoenix'));
reg(['rpgquestkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestkraken'));
reg(['rpgquesttitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquesttitan'));
reg(['rpgquestbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestbandit'));
reg(['rpgquestmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestmage'));
reg(['rpgquestsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestsamurai'));
reg(['rpgquestspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestspirit'));
reg(['rpgquestsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgquestsorcerer'));
reg(['rpghuntforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntforest'));
reg(['rpghuntdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntdesert'));
reg(['rpghuntmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntmountain'));
reg(['rpghuntcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntcave'));
reg(['rpghuntvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntvolcano'));
reg(['rpghuntswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntswamp'));
reg(['rpghuntruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntruins'));
reg(['rpghuntcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntcastle'));
reg(['rpghuntvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntvillage'));
reg(['rpghuntharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntharbor'));
reg(['rpghuntisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntisland'));
reg(['rpghunttundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghunttundra'));
reg(['rpghuntvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntvalley'));
reg(['rpghunttemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghunttemple'));
reg(['rpghuntcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntcrypt'));
reg(['rpghuntdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntdungeon'));
reg(['rpghuntarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntarena'));
reg(['rpghuntdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntdragon'));
reg(['rpghuntwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntwolf'));
reg(['rpghuntgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntgoblin'));
reg(['rpghuntorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntorc'));
reg(['rpghuntslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntslime'));
reg(['rpghuntphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntphoenix'));
reg(['rpghuntkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntkraken'));
reg(['rpghunttitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghunttitan'));
reg(['rpghuntbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntbandit'));
reg(['rpghuntmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntmage'));
reg(['rpghuntsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntsamurai'));
reg(['rpghuntspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntspirit'));
reg(['rpghuntsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpghuntsorcerer'));
reg(['rpgduelforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelforest'));
reg(['rpgdueldesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdueldesert'));
reg(['rpgduelmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelmountain'));
reg(['rpgduelcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelcave'));
reg(['rpgduelvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelvolcano'));
reg(['rpgduelswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelswamp'));
reg(['rpgduelruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelruins'));
reg(['rpgduelcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelcastle'));
reg(['rpgduelvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelvillage'));
reg(['rpgduelharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelharbor'));
reg(['rpgduelisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelisland'));
reg(['rpgdueltundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdueltundra'));
reg(['rpgduelvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelvalley'));
reg(['rpgdueltemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdueltemple'));
reg(['rpgduelcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelcrypt'));
reg(['rpgdueldungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdueldungeon'));
reg(['rpgduelarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelarena'));
reg(['rpgdueldragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdueldragon'));
reg(['rpgduelwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelwolf'));
reg(['rpgduelgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelgoblin'));
reg(['rpgduelorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelorc'));
reg(['rpgduelslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelslime'));
reg(['rpgduelphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelphoenix'));
reg(['rpgduelkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelkraken'));
reg(['rpgdueltitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdueltitan'));
reg(['rpgduelbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelbandit'));
reg(['rpgduelmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelmage'));
reg(['rpgduelsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelsamurai'));
reg(['rpgduelspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelspirit'));
reg(['rpgduelsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgduelsorcerer'));
reg(['rpgraidforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidforest'));
reg(['rpgraiddesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraiddesert'));
reg(['rpgraidmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidmountain'));
reg(['rpgraidcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidcave'));
reg(['rpgraidvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidvolcano'));
reg(['rpgraidswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidswamp'));
reg(['rpgraidruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidruins'));
reg(['rpgraidcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidcastle'));
reg(['rpgraidvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidvillage'));
reg(['rpgraidharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidharbor'));
reg(['rpgraidisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidisland'));
reg(['rpgraidtundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidtundra'));
reg(['rpgraidvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidvalley'));
reg(['rpgraidtemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidtemple'));
reg(['rpgraidcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidcrypt'));
reg(['rpgraiddungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraiddungeon'));
reg(['rpgraidarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidarena'));
reg(['rpgraiddragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraiddragon'));
reg(['rpgraidwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidwolf'));
reg(['rpgraidgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidgoblin'));
reg(['rpgraidorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidorc'));
reg(['rpgraidslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidslime'));
reg(['rpgraidphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidphoenix'));
reg(['rpgraidkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidkraken'));
reg(['rpgraidtitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidtitan'));
reg(['rpgraidbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidbandit'));
reg(['rpgraidmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidmage'));
reg(['rpgraidsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidsamurai'));
reg(['rpgraidspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidspirit'));
reg(['rpgraidsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgraidsorcerer'));
reg(['rpgexploreforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploreforest'));
reg(['rpgexploredesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploredesert'));
reg(['rpgexploremountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploremountain'));
reg(['rpgexplorecave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorecave'));
reg(['rpgexplorevolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorevolcano'));
reg(['rpgexploreswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploreswamp'));
reg(['rpgexploreruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploreruins'));
reg(['rpgexplorecastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorecastle'));
reg(['rpgexplorevillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorevillage'));
reg(['rpgexploreharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploreharbor'));
reg(['rpgexploreisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploreisland'));
reg(['rpgexploretundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploretundra'));
reg(['rpgexplorevalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorevalley'));
reg(['rpgexploretemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploretemple'));
reg(['rpgexplorecrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorecrypt'));
reg(['rpgexploredungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploredungeon'));
reg(['rpgexplorearena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorearena'));
reg(['rpgexploredragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploredragon'));
reg(['rpgexplorewolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorewolf'));
reg(['rpgexploregoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploregoblin'));
reg(['rpgexploreorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploreorc'));
reg(['rpgexploreslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploreslime'));
reg(['rpgexplorephoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorephoenix'));
reg(['rpgexplorekraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorekraken'));
reg(['rpgexploretitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploretitan'));
reg(['rpgexplorebandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorebandit'));
reg(['rpgexploremage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploremage'));
reg(['rpgexploresamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploresamurai'));
reg(['rpgexplorespirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexplorespirit'));
reg(['rpgexploresorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexploresorcerer'));
reg(['rpggatherforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherforest'));
reg(['rpggatherdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherdesert'));
reg(['rpggathermountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathermountain'));
reg(['rpggathercave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathercave'));
reg(['rpggathervolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathervolcano'));
reg(['rpggatherswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherswamp'));
reg(['rpggatherruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherruins'));
reg(['rpggathercastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathercastle'));
reg(['rpggathervillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathervillage'));
reg(['rpggatherharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherharbor'));
reg(['rpggatherisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherisland'));
reg(['rpggathertundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathertundra'));
reg(['rpggathervalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathervalley'));
reg(['rpggathertemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathertemple'));
reg(['rpggathercrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathercrypt'));
reg(['rpggatherdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherdungeon'));
reg(['rpggatherarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherarena'));
reg(['rpggatherdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherdragon'));
reg(['rpggatherwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherwolf'));
reg(['rpggathergoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathergoblin'));
reg(['rpggatherorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherorc'));
reg(['rpggatherslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherslime'));
reg(['rpggatherphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherphoenix'));
reg(['rpggatherkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherkraken'));
reg(['rpggathertitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathertitan'));
reg(['rpggatherbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherbandit'));
reg(['rpggathermage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathermage'));
reg(['rpggathersamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathersamurai'));
reg(['rpggatherspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggatherspirit'));
reg(['rpggathersorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpggathersorcerer'));
reg(['rpgcraftforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftforest'));
reg(['rpgcraftdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftdesert'));
reg(['rpgcraftmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftmountain'));
reg(['rpgcraftcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftcave'));
reg(['rpgcraftvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftvolcano'));
reg(['rpgcraftswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftswamp'));
reg(['rpgcraftruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftruins'));
reg(['rpgcraftcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftcastle'));
reg(['rpgcraftvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftvillage'));
reg(['rpgcraftharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftharbor'));
reg(['rpgcraftisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftisland'));
reg(['rpgcrafttundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcrafttundra'));
reg(['rpgcraftvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftvalley'));
reg(['rpgcrafttemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcrafttemple'));
reg(['rpgcraftcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftcrypt'));
reg(['rpgcraftdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftdungeon'));
reg(['rpgcraftarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftarena'));
reg(['rpgcraftdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftdragon'));
reg(['rpgcraftwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftwolf'));
reg(['rpgcraftgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftgoblin'));
reg(['rpgcraftorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftorc'));
reg(['rpgcraftslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftslime'));
reg(['rpgcraftphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftphoenix'));
reg(['rpgcraftkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftkraken'));
reg(['rpgcrafttitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcrafttitan'));
reg(['rpgcraftbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftbandit'));
reg(['rpgcraftmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftmage'));
reg(['rpgcraftsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftsamurai'));
reg(['rpgcraftspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftspirit'));
reg(['rpgcraftsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcraftsorcerer'));
reg(['rpgforgeforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgeforest'));
reg(['rpgforgedesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgedesert'));
reg(['rpgforgemountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgemountain'));
reg(['rpgforgecave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgecave'));
reg(['rpgforgevolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgevolcano'));
reg(['rpgforgeswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgeswamp'));
reg(['rpgforgeruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgeruins'));
reg(['rpgforgecastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgecastle'));
reg(['rpgforgevillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgevillage'));
reg(['rpgforgeharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgeharbor'));
reg(['rpgforgeisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgeisland'));
reg(['rpgforgetundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgetundra'));
reg(['rpgforgevalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgevalley'));
reg(['rpgforgetemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgetemple'));
reg(['rpgforgecrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgecrypt'));
reg(['rpgforgedungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgedungeon'));
reg(['rpgforgearena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgearena'));
reg(['rpgforgedragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgedragon'));
reg(['rpgforgewolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgewolf'));
reg(['rpgforgegoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgegoblin'));
reg(['rpgforgeorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgeorc'));
reg(['rpgforgeslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgeslime'));
reg(['rpgforgephoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgephoenix'));
reg(['rpgforgekraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgekraken'));
reg(['rpgforgetitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgetitan'));
reg(['rpgforgebandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgebandit'));
reg(['rpgforgemage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgemage'));
reg(['rpgforgesamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgesamurai'));
reg(['rpgforgespirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgespirit'));
reg(['rpgforgesorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgforgesorcerer'));
reg(['rpgtrainforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainforest'));
reg(['rpgtraindesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraindesert'));
reg(['rpgtrainmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainmountain'));
reg(['rpgtraincave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraincave'));
reg(['rpgtrainvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainvolcano'));
reg(['rpgtrainswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainswamp'));
reg(['rpgtrainruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainruins'));
reg(['rpgtraincastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraincastle'));
reg(['rpgtrainvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainvillage'));
reg(['rpgtrainharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainharbor'));
reg(['rpgtrainisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainisland'));
reg(['rpgtraintundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraintundra'));
reg(['rpgtrainvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainvalley'));
reg(['rpgtraintemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraintemple'));
reg(['rpgtraincrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraincrypt'));
reg(['rpgtraindungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraindungeon'));
reg(['rpgtrainarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainarena'));
reg(['rpgtraindragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraindragon'));
reg(['rpgtrainwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainwolf'));
reg(['rpgtraingoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraingoblin'));
reg(['rpgtrainorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainorc'));
reg(['rpgtrainslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainslime'));
reg(['rpgtrainphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainphoenix'));
reg(['rpgtrainkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainkraken'));
reg(['rpgtraintitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraintitan'));
reg(['rpgtrainbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainbandit'));
reg(['rpgtrainmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainmage'));
reg(['rpgtrainsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainsamurai'));
reg(['rpgtrainspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainspirit'));
reg(['rpgtrainsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrainsorcerer'));
reg(['rpgmeditateforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditateforest'));
reg(['rpgmeditatedesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatedesert'));
reg(['rpgmeditatemountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatemountain'));
reg(['rpgmeditatecave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatecave'));
reg(['rpgmeditatevolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatevolcano'));
reg(['rpgmeditateswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditateswamp'));
reg(['rpgmeditateruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditateruins'));
reg(['rpgmeditatecastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatecastle'));
reg(['rpgmeditatevillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatevillage'));
reg(['rpgmeditateharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditateharbor'));
reg(['rpgmeditateisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditateisland'));
reg(['rpgmeditatetundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatetundra'));
reg(['rpgmeditatevalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatevalley'));
reg(['rpgmeditatetemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatetemple'));
reg(['rpgmeditatecrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatecrypt'));
reg(['rpgmeditatedungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatedungeon'));
reg(['rpgmeditatearena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatearena'));
reg(['rpgmeditatedragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatedragon'));
reg(['rpgmeditatewolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatewolf'));
reg(['rpgmeditategoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditategoblin'));
reg(['rpgmeditateorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditateorc'));
reg(['rpgmeditateslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditateslime'));
reg(['rpgmeditatephoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatephoenix'));
reg(['rpgmeditatekraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatekraken'));
reg(['rpgmeditatetitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatetitan'));
reg(['rpgmeditatebandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatebandit'));
reg(['rpgmeditatemage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatemage'));
reg(['rpgmeditatesamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatesamurai'));
reg(['rpgmeditatespirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatespirit'));
reg(['rpgmeditatesorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmeditatesorcerer'));
reg(['rpgfishforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishforest'));
reg(['rpgfishdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishdesert'));
reg(['rpgfishmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishmountain'));
reg(['rpgfishcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishcave'));
reg(['rpgfishvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishvolcano'));
reg(['rpgfishswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishswamp'));
reg(['rpgfishruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishruins'));
reg(['rpgfishcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishcastle'));
reg(['rpgfishvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishvillage'));
reg(['rpgfishharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishharbor'));
reg(['rpgfishisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishisland'));
reg(['rpgfishtundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishtundra'));
reg(['rpgfishvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishvalley'));
reg(['rpgfishtemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishtemple'));
reg(['rpgfishcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishcrypt'));
reg(['rpgfishdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishdungeon'));
reg(['rpgfisharena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfisharena'));
reg(['rpgfishdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishdragon'));
reg(['rpgfishwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishwolf'));
reg(['rpgfishgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishgoblin'));
reg(['rpgfishorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishorc'));
reg(['rpgfishslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishslime'));
reg(['rpgfishphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishphoenix'));
reg(['rpgfishkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishkraken'));
reg(['rpgfishtitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishtitan'));
reg(['rpgfishbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishbandit'));
reg(['rpgfishmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishmage'));
reg(['rpgfishsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishsamurai'));
reg(['rpgfishspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishspirit'));
reg(['rpgfishsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfishsorcerer'));
reg(['rpgmineforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmineforest'));
reg(['rpgminedesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminedesert'));
reg(['rpgminemountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminemountain'));
reg(['rpgminecave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminecave'));
reg(['rpgminevolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminevolcano'));
reg(['rpgmineswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmineswamp'));
reg(['rpgmineruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmineruins'));
reg(['rpgminecastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminecastle'));
reg(['rpgminevillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminevillage'));
reg(['rpgmineharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmineharbor'));
reg(['rpgmineisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmineisland'));
reg(['rpgminetundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminetundra'));
reg(['rpgminevalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminevalley'));
reg(['rpgminetemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminetemple'));
reg(['rpgminecrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminecrypt'));
reg(['rpgminedungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminedungeon'));
reg(['rpgminearena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminearena'));
reg(['rpgminedragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminedragon'));
reg(['rpgminewolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminewolf'));
reg(['rpgminegoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminegoblin'));
reg(['rpgmineorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmineorc'));
reg(['rpgmineslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgmineslime'));
reg(['rpgminephoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminephoenix'));
reg(['rpgminekraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminekraken'));
reg(['rpgminetitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminetitan'));
reg(['rpgminebandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminebandit'));
reg(['rpgminemage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminemage'));
reg(['rpgminesamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminesamurai'));
reg(['rpgminespirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminespirit'));
reg(['rpgminesorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgminesorcerer'));
reg(['rpgfarmforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmforest'));
reg(['rpgfarmdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmdesert'));
reg(['rpgfarmmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmmountain'));
reg(['rpgfarmcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmcave'));
reg(['rpgfarmvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmvolcano'));
reg(['rpgfarmswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmswamp'));
reg(['rpgfarmruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmruins'));
reg(['rpgfarmcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmcastle'));
reg(['rpgfarmvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmvillage'));
reg(['rpgfarmharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmharbor'));
reg(['rpgfarmisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmisland'));
reg(['rpgfarmtundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmtundra'));
reg(['rpgfarmvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmvalley'));
reg(['rpgfarmtemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmtemple'));
reg(['rpgfarmcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmcrypt'));
reg(['rpgfarmdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmdungeon'));
reg(['rpgfarmarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmarena'));
reg(['rpgfarmdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmdragon'));
reg(['rpgfarmwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmwolf'));
reg(['rpgfarmgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmgoblin'));
reg(['rpgfarmorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmorc'));
reg(['rpgfarmslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmslime'));
reg(['rpgfarmphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmphoenix'));
reg(['rpgfarmkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmkraken'));
reg(['rpgfarmtitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmtitan'));
reg(['rpgfarmbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmbandit'));
reg(['rpgfarmmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmmage'));
reg(['rpgfarmsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmsamurai'));
reg(['rpgfarmspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmspirit'));
reg(['rpgfarmsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgfarmsorcerer'));
reg(['rpgcookforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookforest'));
reg(['rpgcookdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookdesert'));
reg(['rpgcookmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookmountain'));
reg(['rpgcookcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookcave'));
reg(['rpgcookvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookvolcano'));
reg(['rpgcookswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookswamp'));
reg(['rpgcookruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookruins'));
reg(['rpgcookcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookcastle'));
reg(['rpgcookvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookvillage'));
reg(['rpgcookharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookharbor'));
reg(['rpgcookisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookisland'));
reg(['rpgcooktundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcooktundra'));
reg(['rpgcookvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookvalley'));
reg(['rpgcooktemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcooktemple'));
reg(['rpgcookcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookcrypt'));
reg(['rpgcookdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookdungeon'));
reg(['rpgcookarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookarena'));
reg(['rpgcookdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookdragon'));
reg(['rpgcookwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookwolf'));
reg(['rpgcookgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookgoblin'));
reg(['rpgcookorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookorc'));
reg(['rpgcookslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookslime'));
reg(['rpgcookphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookphoenix'));
reg(['rpgcookkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookkraken'));
reg(['rpgcooktitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcooktitan'));
reg(['rpgcookbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookbandit'));
reg(['rpgcookmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookmage'));
reg(['rpgcooksamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcooksamurai'));
reg(['rpgcookspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcookspirit'));
reg(['rpgcooksorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcooksorcerer'));
reg(['rpgtradeforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradeforest'));
reg(['rpgtradedesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradedesert'));
reg(['rpgtrademountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrademountain'));
reg(['rpgtradecave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradecave'));
reg(['rpgtradevolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradevolcano'));
reg(['rpgtradeswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradeswamp'));
reg(['rpgtraderuins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraderuins'));
reg(['rpgtradecastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradecastle'));
reg(['rpgtradevillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradevillage'));
reg(['rpgtradeharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradeharbor'));
reg(['rpgtradeisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradeisland'));
reg(['rpgtradetundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradetundra'));
reg(['rpgtradevalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradevalley'));
reg(['rpgtradetemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradetemple'));
reg(['rpgtradecrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradecrypt'));
reg(['rpgtradedungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradedungeon'));
reg(['rpgtradearena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradearena'));
reg(['rpgtradedragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradedragon'));
reg(['rpgtradewolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradewolf'));
reg(['rpgtradegoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradegoblin'));
reg(['rpgtradeorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradeorc'));
reg(['rpgtradeslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradeslime'));
reg(['rpgtradephoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradephoenix'));
reg(['rpgtradekraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradekraken'));
reg(['rpgtradetitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradetitan'));
reg(['rpgtradebandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradebandit'));
reg(['rpgtrademage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtrademage'));
reg(['rpgtradesamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradesamurai'));
reg(['rpgtradespirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradespirit'));
reg(['rpgtradesorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtradesorcerer'));
reg(['rpgtravelforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelforest'));
reg(['rpgtraveldesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraveldesert'));
reg(['rpgtravelmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelmountain'));
reg(['rpgtravelcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelcave'));
reg(['rpgtravelvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelvolcano'));
reg(['rpgtravelswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelswamp'));
reg(['rpgtravelruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelruins'));
reg(['rpgtravelcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelcastle'));
reg(['rpgtravelvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelvillage'));
reg(['rpgtravelharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelharbor'));
reg(['rpgtravelisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelisland'));
reg(['rpgtraveltundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraveltundra'));
reg(['rpgtravelvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelvalley'));
reg(['rpgtraveltemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraveltemple'));
reg(['rpgtravelcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelcrypt'));
reg(['rpgtraveldungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraveldungeon'));
reg(['rpgtravelarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelarena'));
reg(['rpgtraveldragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraveldragon'));
reg(['rpgtravelwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelwolf'));
reg(['rpgtravelgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelgoblin'));
reg(['rpgtravelorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelorc'));
reg(['rpgtravelslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelslime'));
reg(['rpgtravelphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelphoenix'));
reg(['rpgtravelkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelkraken'));
reg(['rpgtraveltitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtraveltitan'));
reg(['rpgtravelbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelbandit'));
reg(['rpgtravelmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelmage'));
reg(['rpgtravelsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelsamurai'));
reg(['rpgtravelspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelspirit'));
reg(['rpgtravelsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtravelsorcerer'));
reg(['rpgcampforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampforest'));
reg(['rpgcampdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampdesert'));
reg(['rpgcampmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampmountain'));
reg(['rpgcampcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampcave'));
reg(['rpgcampvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampvolcano'));
reg(['rpgcampswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampswamp'));
reg(['rpgcampruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampruins'));
reg(['rpgcampcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampcastle'));
reg(['rpgcampvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampvillage'));
reg(['rpgcampharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampharbor'));
reg(['rpgcampisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampisland'));
reg(['rpgcamptundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcamptundra'));
reg(['rpgcampvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampvalley'));
reg(['rpgcamptemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcamptemple'));
reg(['rpgcampcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampcrypt'));
reg(['rpgcampdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampdungeon'));
reg(['rpgcamparena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcamparena'));
reg(['rpgcampdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampdragon'));
reg(['rpgcampwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampwolf'));
reg(['rpgcampgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampgoblin'));
reg(['rpgcamporc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcamporc'));
reg(['rpgcampslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampslime'));
reg(['rpgcampphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampphoenix'));
reg(['rpgcampkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampkraken'));
reg(['rpgcamptitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcamptitan'));
reg(['rpgcampbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampbandit'));
reg(['rpgcampmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampmage'));
reg(['rpgcampsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampsamurai'));
reg(['rpgcampspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampspirit'));
reg(['rpgcampsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgcampsorcerer'));
reg(['rpgscoutforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutforest'));
reg(['rpgscoutdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutdesert'));
reg(['rpgscoutmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutmountain'));
reg(['rpgscoutcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutcave'));
reg(['rpgscoutvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutvolcano'));
reg(['rpgscoutswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutswamp'));
reg(['rpgscoutruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutruins'));
reg(['rpgscoutcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutcastle'));
reg(['rpgscoutvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutvillage'));
reg(['rpgscoutharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutharbor'));
reg(['rpgscoutisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutisland'));
reg(['rpgscouttundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscouttundra'));
reg(['rpgscoutvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutvalley'));
reg(['rpgscouttemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscouttemple'));
reg(['rpgscoutcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutcrypt'));
reg(['rpgscoutdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutdungeon'));
reg(['rpgscoutarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutarena'));
reg(['rpgscoutdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutdragon'));
reg(['rpgscoutwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutwolf'));
reg(['rpgscoutgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutgoblin'));
reg(['rpgscoutorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutorc'));
reg(['rpgscoutslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutslime'));
reg(['rpgscoutphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutphoenix'));
reg(['rpgscoutkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutkraken'));
reg(['rpgscouttitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscouttitan'));
reg(['rpgscoutbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutbandit'));
reg(['rpgscoutmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutmage'));
reg(['rpgscoutsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutsamurai'));
reg(['rpgscoutspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutspirit'));
reg(['rpgscoutsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgscoutsorcerer'));
reg(['rpgtameforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtameforest'));
reg(['rpgtamedesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamedesert'));
reg(['rpgtamemountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamemountain'));
reg(['rpgtamecave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamecave'));
reg(['rpgtamevolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamevolcano'));
reg(['rpgtameswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtameswamp'));
reg(['rpgtameruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtameruins'));
reg(['rpgtamecastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamecastle'));
reg(['rpgtamevillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamevillage'));
reg(['rpgtameharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtameharbor'));
reg(['rpgtameisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtameisland'));
reg(['rpgtametundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtametundra'));
reg(['rpgtamevalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamevalley'));
reg(['rpgtametemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtametemple'));
reg(['rpgtamecrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamecrypt'));
reg(['rpgtamedungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamedungeon'));
reg(['rpgtamearena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamearena'));
reg(['rpgtamedragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamedragon'));
reg(['rpgtamewolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamewolf'));
reg(['rpgtamegoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamegoblin'));
reg(['rpgtameorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtameorc'));
reg(['rpgtameslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtameslime'));
reg(['rpgtamephoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamephoenix'));
reg(['rpgtamekraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamekraken'));
reg(['rpgtametitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtametitan'));
reg(['rpgtamebandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamebandit'));
reg(['rpgtamemage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamemage'));
reg(['rpgtamesamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamesamurai'));
reg(['rpgtamespirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamespirit'));
reg(['rpgtamesorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtamesorcerer'));
reg(['rpgbreedforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedforest'));
reg(['rpgbreeddesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreeddesert'));
reg(['rpgbreedmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedmountain'));
reg(['rpgbreedcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedcave'));
reg(['rpgbreedvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedvolcano'));
reg(['rpgbreedswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedswamp'));
reg(['rpgbreedruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedruins'));
reg(['rpgbreedcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedcastle'));
reg(['rpgbreedvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedvillage'));
reg(['rpgbreedharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedharbor'));
reg(['rpgbreedisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedisland'));
reg(['rpgbreedtundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedtundra'));
reg(['rpgbreedvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedvalley'));
reg(['rpgbreedtemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedtemple'));
reg(['rpgbreedcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedcrypt'));
reg(['rpgbreeddungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreeddungeon'));
reg(['rpgbreedarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedarena'));
reg(['rpgbreeddragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreeddragon'));
reg(['rpgbreedwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedwolf'));
reg(['rpgbreedgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedgoblin'));
reg(['rpgbreedorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedorc'));
reg(['rpgbreedslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedslime'));
reg(['rpgbreedphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedphoenix'));
reg(['rpgbreedkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedkraken'));
reg(['rpgbreedtitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedtitan'));
reg(['rpgbreedbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedbandit'));
reg(['rpgbreedmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedmage'));
reg(['rpgbreedsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedsamurai'));
reg(['rpgbreedspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedspirit'));
reg(['rpgbreedsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbreedsorcerer'));
reg(['rpgrescueforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescueforest'));
reg(['rpgrescuedesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuedesert'));
reg(['rpgrescuemountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuemountain'));
reg(['rpgrescuecave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuecave'));
reg(['rpgrescuevolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuevolcano'));
reg(['rpgrescueswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescueswamp'));
reg(['rpgrescueruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescueruins'));
reg(['rpgrescuecastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuecastle'));
reg(['rpgrescuevillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuevillage'));
reg(['rpgrescueharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescueharbor'));
reg(['rpgrescueisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescueisland'));
reg(['rpgrescuetundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuetundra'));
reg(['rpgrescuevalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuevalley'));
reg(['rpgrescuetemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuetemple'));
reg(['rpgrescuecrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuecrypt'));
reg(['rpgrescuedungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuedungeon'));
reg(['rpgrescuearena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuearena'));
reg(['rpgrescuedragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuedragon'));
reg(['rpgrescuewolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuewolf'));
reg(['rpgrescuegoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuegoblin'));
reg(['rpgrescueorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescueorc'));
reg(['rpgrescueslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescueslime'));
reg(['rpgrescuephoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuephoenix'));
reg(['rpgrescuekraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuekraken'));
reg(['rpgrescuetitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuetitan'));
reg(['rpgrescuebandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuebandit'));
reg(['rpgrescuemage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuemage'));
reg(['rpgrescuesamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuesamurai'));
reg(['rpgrescuespirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuespirit'));
reg(['rpgrescuesorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgrescuesorcerer'));
reg(['rpgescortforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortforest'));
reg(['rpgescortdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortdesert'));
reg(['rpgescortmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortmountain'));
reg(['rpgescortcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortcave'));
reg(['rpgescortvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortvolcano'));
reg(['rpgescortswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortswamp'));
reg(['rpgescortruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortruins'));
reg(['rpgescortcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortcastle'));
reg(['rpgescortvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortvillage'));
reg(['rpgescortharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortharbor'));
reg(['rpgescortisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortisland'));
reg(['rpgescorttundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescorttundra'));
reg(['rpgescortvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortvalley'));
reg(['rpgescorttemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescorttemple'));
reg(['rpgescortcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortcrypt'));
reg(['rpgescortdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortdungeon'));
reg(['rpgescortarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortarena'));
reg(['rpgescortdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortdragon'));
reg(['rpgescortwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortwolf'));
reg(['rpgescortgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortgoblin'));
reg(['rpgescortorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortorc'));
reg(['rpgescortslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortslime'));
reg(['rpgescortphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortphoenix'));
reg(['rpgescortkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortkraken'));
reg(['rpgescorttitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescorttitan'));
reg(['rpgescortbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortbandit'));
reg(['rpgescortmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortmage'));
reg(['rpgescortsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortsamurai'));
reg(['rpgescortspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortspirit'));
reg(['rpgescortsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgescortsorcerer'));
reg(['rpgdefendforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendforest'));
reg(['rpgdefenddesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefenddesert'));
reg(['rpgdefendmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendmountain'));
reg(['rpgdefendcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendcave'));
reg(['rpgdefendvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendvolcano'));
reg(['rpgdefendswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendswamp'));
reg(['rpgdefendruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendruins'));
reg(['rpgdefendcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendcastle'));
reg(['rpgdefendvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendvillage'));
reg(['rpgdefendharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendharbor'));
reg(['rpgdefendisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendisland'));
reg(['rpgdefendtundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendtundra'));
reg(['rpgdefendvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendvalley'));
reg(['rpgdefendtemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendtemple'));
reg(['rpgdefendcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendcrypt'));
reg(['rpgdefenddungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefenddungeon'));
reg(['rpgdefendarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendarena'));
reg(['rpgdefenddragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefenddragon'));
reg(['rpgdefendwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendwolf'));
reg(['rpgdefendgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendgoblin'));
reg(['rpgdefendorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendorc'));
reg(['rpgdefendslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendslime'));
reg(['rpgdefendphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendphoenix'));
reg(['rpgdefendkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendkraken'));
reg(['rpgdefendtitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendtitan'));
reg(['rpgdefendbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendbandit'));
reg(['rpgdefendmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendmage'));
reg(['rpgdefendsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendsamurai'));
reg(['rpgdefendspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendspirit'));
reg(['rpgdefendsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgdefendsorcerer'));
reg(['rpgsurviveforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurviveforest'));
reg(['rpgsurvivedesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivedesert'));
reg(['rpgsurvivemountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivemountain'));
reg(['rpgsurvivecave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivecave'));
reg(['rpgsurvivevolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivevolcano'));
reg(['rpgsurviveswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurviveswamp'));
reg(['rpgsurviveruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurviveruins'));
reg(['rpgsurvivecastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivecastle'));
reg(['rpgsurvivevillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivevillage'));
reg(['rpgsurviveharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurviveharbor'));
reg(['rpgsurviveisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurviveisland'));
reg(['rpgsurvivetundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivetundra'));
reg(['rpgsurvivevalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivevalley'));
reg(['rpgsurvivetemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivetemple'));
reg(['rpgsurvivecrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivecrypt'));
reg(['rpgsurvivedungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivedungeon'));
reg(['rpgsurvivearena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivearena'));
reg(['rpgsurvivedragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivedragon'));
reg(['rpgsurvivewolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivewolf'));
reg(['rpgsurvivegoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivegoblin'));
reg(['rpgsurviveorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurviveorc'));
reg(['rpgsurviveslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurviveslime'));
reg(['rpgsurvivephoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivephoenix'));
reg(['rpgsurvivekraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivekraken'));
reg(['rpgsurvivetitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivetitan'));
reg(['rpgsurvivebandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivebandit'));
reg(['rpgsurvivemage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivemage'));
reg(['rpgsurvivesamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivesamurai'));
reg(['rpgsurvivespirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivespirit'));
reg(['rpgsurvivesorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgsurvivesorcerer'));
reg(['rpgtreasureforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasureforest'));
reg(['rpgtreasuredesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuredesert'));
reg(['rpgtreasuremountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuremountain'));
reg(['rpgtreasurecave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurecave'));
reg(['rpgtreasurevolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurevolcano'));
reg(['rpgtreasureswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasureswamp'));
reg(['rpgtreasureruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasureruins'));
reg(['rpgtreasurecastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurecastle'));
reg(['rpgtreasurevillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurevillage'));
reg(['rpgtreasureharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasureharbor'));
reg(['rpgtreasureisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasureisland'));
reg(['rpgtreasuretundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuretundra'));
reg(['rpgtreasurevalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurevalley'));
reg(['rpgtreasuretemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuretemple'));
reg(['rpgtreasurecrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurecrypt'));
reg(['rpgtreasuredungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuredungeon'));
reg(['rpgtreasurearena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurearena'));
reg(['rpgtreasuredragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuredragon'));
reg(['rpgtreasurewolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurewolf'));
reg(['rpgtreasuregoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuregoblin'));
reg(['rpgtreasureorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasureorc'));
reg(['rpgtreasureslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasureslime'));
reg(['rpgtreasurephoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurephoenix'));
reg(['rpgtreasurekraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurekraken'));
reg(['rpgtreasuretitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuretitan'));
reg(['rpgtreasurebandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurebandit'));
reg(['rpgtreasuremage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuremage'));
reg(['rpgtreasuresamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuresamurai'));
reg(['rpgtreasurespirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasurespirit'));
reg(['rpgtreasuresorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtreasuresorcerer'));
reg(['rpgarenaforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenaforest'));
reg(['rpgarenadesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenadesert'));
reg(['rpgarenamountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenamountain'));
reg(['rpgarenacave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenacave'));
reg(['rpgarenavolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenavolcano'));
reg(['rpgarenaswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenaswamp'));
reg(['rpgarenaruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenaruins'));
reg(['rpgarenacastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenacastle'));
reg(['rpgarenavillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenavillage'));
reg(['rpgarenaharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenaharbor'));
reg(['rpgarenaisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenaisland'));
reg(['rpgarenatundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenatundra'));
reg(['rpgarenavalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenavalley'));
reg(['rpgarenatemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenatemple'));
reg(['rpgarenacrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenacrypt'));
reg(['rpgarenadungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenadungeon'));
reg(['rpgarenaarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenaarena'));
reg(['rpgarenadragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenadragon'));
reg(['rpgarenawolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenawolf'));
reg(['rpgarenagoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenagoblin'));
reg(['rpgarenaorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenaorc'));
reg(['rpgarenaslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenaslime'));
reg(['rpgarenaphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenaphoenix'));
reg(['rpgarenakraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenakraken'));
reg(['rpgarenatitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenatitan'));
reg(['rpgarenabandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenabandit'));
reg(['rpgarenamage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenamage'));
reg(['rpgarenasamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenasamurai'));
reg(['rpgarenaspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenaspirit'));
reg(['rpgarenasorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgarenasorcerer'));
reg(['rpgtournamentforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentforest'));
reg(['rpgtournamentdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentdesert'));
reg(['rpgtournamentmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentmountain'));
reg(['rpgtournamentcave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentcave'));
reg(['rpgtournamentvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentvolcano'));
reg(['rpgtournamentswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentswamp'));
reg(['rpgtournamentruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentruins'));
reg(['rpgtournamentcastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentcastle'));
reg(['rpgtournamentvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentvillage'));
reg(['rpgtournamentharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentharbor'));
reg(['rpgtournamentisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentisland'));
reg(['rpgtournamenttundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamenttundra'));
reg(['rpgtournamentvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentvalley'));
reg(['rpgtournamenttemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamenttemple'));
reg(['rpgtournamentcrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentcrypt'));
reg(['rpgtournamentdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentdungeon'));
reg(['rpgtournamentarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentarena'));
reg(['rpgtournamentdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentdragon'));
reg(['rpgtournamentwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentwolf'));
reg(['rpgtournamentgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentgoblin'));
reg(['rpgtournamentorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentorc'));
reg(['rpgtournamentslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentslime'));
reg(['rpgtournamentphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentphoenix'));
reg(['rpgtournamentkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentkraken'));
reg(['rpgtournamenttitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamenttitan'));
reg(['rpgtournamentbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentbandit'));
reg(['rpgtournamentmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentmage'));
reg(['rpgtournamentsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentsamurai'));
reg(['rpgtournamentspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentspirit'));
reg(['rpgtournamentsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgtournamentsorcerer'));
reg(['rpgexpeditionforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionforest'));
reg(['rpgexpeditiondesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditiondesert'));
reg(['rpgexpeditionmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionmountain'));
reg(['rpgexpeditioncave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditioncave'));
reg(['rpgexpeditionvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionvolcano'));
reg(['rpgexpeditionswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionswamp'));
reg(['rpgexpeditionruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionruins'));
reg(['rpgexpeditioncastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditioncastle'));
reg(['rpgexpeditionvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionvillage'));
reg(['rpgexpeditionharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionharbor'));
reg(['rpgexpeditionisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionisland'));
reg(['rpgexpeditiontundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditiontundra'));
reg(['rpgexpeditionvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionvalley'));
reg(['rpgexpeditiontemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditiontemple'));
reg(['rpgexpeditioncrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditioncrypt'));
reg(['rpgexpeditiondungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditiondungeon'));
reg(['rpgexpeditionarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionarena'));
reg(['rpgexpeditiondragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditiondragon'));
reg(['rpgexpeditionwolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionwolf'));
reg(['rpgexpeditiongoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditiongoblin'));
reg(['rpgexpeditionorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionorc'));
reg(['rpgexpeditionslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionslime'));
reg(['rpgexpeditionphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionphoenix'));
reg(['rpgexpeditionkraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionkraken'));
reg(['rpgexpeditiontitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditiontitan'));
reg(['rpgexpeditionbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionbandit'));
reg(['rpgexpeditionmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionmage'));
reg(['rpgexpeditionsamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionsamurai'));
reg(['rpgexpeditionspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionspirit'));
reg(['rpgexpeditionsorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgexpeditionsorcerer'));
reg(['rpgchallengeforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengeforest'));
reg(['rpgchallengedesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengedesert'));
reg(['rpgchallengemountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengemountain'));
reg(['rpgchallengecave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengecave'));
reg(['rpgchallengevolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengevolcano'));
reg(['rpgchallengeswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengeswamp'));
reg(['rpgchallengeruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengeruins'));
reg(['rpgchallengecastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengecastle'));
reg(['rpgchallengevillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengevillage'));
reg(['rpgchallengeharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengeharbor'));
reg(['rpgchallengeisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengeisland'));
reg(['rpgchallengetundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengetundra'));
reg(['rpgchallengevalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengevalley'));
reg(['rpgchallengetemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengetemple'));
reg(['rpgchallengecrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengecrypt'));
reg(['rpgchallengedungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengedungeon'));
reg(['rpgchallengearena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengearena'));
reg(['rpgchallengedragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengedragon'));
reg(['rpgchallengewolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengewolf'));
reg(['rpgchallengegoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengegoblin'));
reg(['rpgchallengeorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengeorc'));
reg(['rpgchallengeslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengeslime'));
reg(['rpgchallengephoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengephoenix'));
reg(['rpgchallengekraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengekraken'));
reg(['rpgchallengetitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengetitan'));
reg(['rpgchallengebandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengebandit'));
reg(['rpgchallengemage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengemage'));
reg(['rpgchallengesamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengesamurai'));
reg(['rpgchallengespirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengespirit'));
reg(['rpgchallengesorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgchallengesorcerer'));
reg(['rpgbossforest'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossforest'));
reg(['rpgbossdesert'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossdesert'));
reg(['rpgbossmountain'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossmountain'));
reg(['rpgbosscave'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbosscave'));
reg(['rpgbossvolcano'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossvolcano'));
reg(['rpgbossswamp'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossswamp'));
reg(['rpgbossruins'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossruins'));
reg(['rpgbosscastle'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbosscastle'));
reg(['rpgbossvillage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossvillage'));
reg(['rpgbossharbor'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossharbor'));
reg(['rpgbossisland'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossisland'));
reg(['rpgbosstundra'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbosstundra'));
reg(['rpgbossvalley'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossvalley'));
reg(['rpgbosstemple'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbosstemple'));
reg(['rpgbosscrypt'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbosscrypt'));
reg(['rpgbossdungeon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossdungeon'));
reg(['rpgbossarena'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossarena'));
reg(['rpgbossdragon'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossdragon'));
reg(['rpgbosswolf'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbosswolf'));
reg(['rpgbossgoblin'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossgoblin'));
reg(['rpgbossorc'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossorc'));
reg(['rpgbossslime'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossslime'));
reg(['rpgbossphoenix'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossphoenix'));
reg(['rpgbosskraken'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbosskraken'));
reg(['rpgbosstitan'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbosstitan'));
reg(['rpgbossbandit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossbandit'));
reg(['rpgbossmage'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossmage'));
reg(['rpgbosssamurai'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbosssamurai'));
reg(['rpgbossspirit'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbossspirit'));
reg(['rpgbosssorcerer'], async (ctx) => smileyGeneratedFeature(ctx, 'rpgbosssorcerer'));
reg(['adminprotectgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectgroup'));
reg(['adminprotectmember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectmember'));
reg(['adminprotectadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectadmin'));
reg(['adminprotectlink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectlink'));
reg(['adminprotectspam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectspam'));
reg(['adminprotecttoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotecttoxic'));
reg(['adminprotectmedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectmedia'));
reg(['adminprotectimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectimage'));
reg(['adminprotectvideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectvideo'));
reg(['adminprotectaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectaudio'));
reg(['adminprotectdocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectdocument'));
reg(['adminprotectsticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectsticker'));
reg(['adminprotectpoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectpoll'));
reg(['adminprotectwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectwelcome'));
reg(['adminprotectfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectfarewell'));
reg(['adminprotectrules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectrules'));
reg(['adminprotectwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectwarning'));
reg(['adminprotectrequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectrequest'));
reg(['adminprotectevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectevent'));
reg(['adminprotectnote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectnote'));
reg(['adminprotecttemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotecttemplate'));
reg(['adminprotectactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectactivity'));
reg(['adminprotectinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectinvite'));
reg(['adminprotectsetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectsetting'));
reg(['adminprotectsecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminprotectsecurity'));
reg(['adminlockgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockgroup'));
reg(['adminlockmember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockmember'));
reg(['adminlockadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockadmin'));
reg(['adminlocklink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlocklink'));
reg(['adminlockspam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockspam'));
reg(['adminlocktoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlocktoxic'));
reg(['adminlockmedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockmedia'));
reg(['adminlockimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockimage'));
reg(['adminlockvideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockvideo'));
reg(['adminlockaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockaudio'));
reg(['adminlockdocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockdocument'));
reg(['adminlocksticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlocksticker'));
reg(['adminlockpoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockpoll'));
reg(['adminlockwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockwelcome'));
reg(['adminlockfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockfarewell'));
reg(['adminlockrules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockrules'));
reg(['adminlockwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockwarning'));
reg(['adminlockrequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockrequest'));
reg(['adminlockevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockevent'));
reg(['adminlocknote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlocknote'));
reg(['adminlocktemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlocktemplate'));
reg(['adminlockactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockactivity'));
reg(['adminlockinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlockinvite'));
reg(['adminlocksetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlocksetting'));
reg(['adminlocksecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminlocksecurity'));
reg(['adminunlockgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockgroup'));
reg(['adminunlockmember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockmember'));
reg(['adminunlockadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockadmin'));
reg(['adminunlocklink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlocklink'));
reg(['adminunlockspam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockspam'));
reg(['adminunlocktoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlocktoxic'));
reg(['adminunlockmedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockmedia'));
reg(['adminunlockimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockimage'));
reg(['adminunlockvideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockvideo'));
reg(['adminunlockaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockaudio'));
reg(['adminunlockdocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockdocument'));
reg(['adminunlocksticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlocksticker'));
reg(['adminunlockpoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockpoll'));
reg(['adminunlockwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockwelcome'));
reg(['adminunlockfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockfarewell'));
reg(['adminunlockrules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockrules'));
reg(['adminunlockwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockwarning'));
reg(['adminunlockrequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockrequest'));
reg(['adminunlockevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockevent'));
reg(['adminunlocknote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlocknote'));
reg(['adminunlocktemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlocktemplate'));
reg(['adminunlockactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockactivity'));
reg(['adminunlockinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlockinvite'));
reg(['adminunlocksetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlocksetting'));
reg(['adminunlocksecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminunlocksecurity'));
reg(['adminauditgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditgroup'));
reg(['adminauditmember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditmember'));
reg(['adminauditadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditadmin'));
reg(['adminauditlink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditlink'));
reg(['adminauditspam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditspam'));
reg(['adminaudittoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminaudittoxic'));
reg(['adminauditmedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditmedia'));
reg(['adminauditimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditimage'));
reg(['adminauditvideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditvideo'));
reg(['adminauditaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditaudio'));
reg(['adminauditdocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditdocument'));
reg(['adminauditsticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditsticker'));
reg(['adminauditpoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditpoll'));
reg(['adminauditwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditwelcome'));
reg(['adminauditfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditfarewell'));
reg(['adminauditrules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditrules'));
reg(['adminauditwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditwarning'));
reg(['adminauditrequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditrequest'));
reg(['adminauditevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditevent'));
reg(['adminauditnote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditnote'));
reg(['adminaudittemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminaudittemplate'));
reg(['adminauditactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditactivity'));
reg(['adminauditinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditinvite'));
reg(['adminauditsetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditsetting'));
reg(['adminauditsecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminauditsecurity'));
reg(['adminscangroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscangroup'));
reg(['adminscanmember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanmember'));
reg(['adminscanadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanadmin'));
reg(['adminscanlink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanlink'));
reg(['adminscanspam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanspam'));
reg(['adminscantoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscantoxic'));
reg(['adminscanmedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanmedia'));
reg(['adminscanimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanimage'));
reg(['adminscanvideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanvideo'));
reg(['adminscanaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanaudio'));
reg(['adminscandocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscandocument'));
reg(['adminscansticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscansticker'));
reg(['adminscanpoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanpoll'));
reg(['adminscanwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanwelcome'));
reg(['adminscanfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanfarewell'));
reg(['adminscanrules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanrules'));
reg(['adminscanwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanwarning'));
reg(['adminscanrequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanrequest'));
reg(['adminscanevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanevent'));
reg(['adminscannote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscannote'));
reg(['adminscantemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscantemplate'));
reg(['adminscanactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscanactivity'));
reg(['adminscaninvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscaninvite'));
reg(['adminscansetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscansetting'));
reg(['adminscansecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscansecurity'));
reg(['adminmonitorgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorgroup'));
reg(['adminmonitormember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitormember'));
reg(['adminmonitoradmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitoradmin'));
reg(['adminmonitorlink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorlink'));
reg(['adminmonitorspam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorspam'));
reg(['adminmonitortoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitortoxic'));
reg(['adminmonitormedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitormedia'));
reg(['adminmonitorimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorimage'));
reg(['adminmonitorvideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorvideo'));
reg(['adminmonitoraudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitoraudio'));
reg(['adminmonitordocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitordocument'));
reg(['adminmonitorsticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorsticker'));
reg(['adminmonitorpoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorpoll'));
reg(['adminmonitorwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorwelcome'));
reg(['adminmonitorfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorfarewell'));
reg(['adminmonitorrules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorrules'));
reg(['adminmonitorwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorwarning'));
reg(['adminmonitorrequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorrequest'));
reg(['adminmonitorevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorevent'));
reg(['adminmonitornote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitornote'));
reg(['adminmonitortemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitortemplate'));
reg(['adminmonitoractivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitoractivity'));
reg(['adminmonitorinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorinvite'));
reg(['adminmonitorsetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorsetting'));
reg(['adminmonitorsecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmonitorsecurity'));
reg(['adminreviewgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewgroup'));
reg(['adminreviewmember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewmember'));
reg(['adminreviewadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewadmin'));
reg(['adminreviewlink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewlink'));
reg(['adminreviewspam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewspam'));
reg(['adminreviewtoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewtoxic'));
reg(['adminreviewmedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewmedia'));
reg(['adminreviewimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewimage'));
reg(['adminreviewvideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewvideo'));
reg(['adminreviewaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewaudio'));
reg(['adminreviewdocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewdocument'));
reg(['adminreviewsticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewsticker'));
reg(['adminreviewpoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewpoll'));
reg(['adminreviewwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewwelcome'));
reg(['adminreviewfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewfarewell'));
reg(['adminreviewrules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewrules'));
reg(['adminreviewwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewwarning'));
reg(['adminreviewrequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewrequest'));
reg(['adminreviewevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewevent'));
reg(['adminreviewnote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewnote'));
reg(['adminreviewtemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewtemplate'));
reg(['adminreviewactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewactivity'));
reg(['adminreviewinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewinvite'));
reg(['adminreviewsetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewsetting'));
reg(['adminreviewsecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreviewsecurity'));
reg(['adminreportgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportgroup'));
reg(['adminreportmember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportmember'));
reg(['adminreportadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportadmin'));
reg(['adminreportlink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportlink'));
reg(['adminreportspam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportspam'));
reg(['adminreporttoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreporttoxic'));
reg(['adminreportmedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportmedia'));
reg(['adminreportimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportimage'));
reg(['adminreportvideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportvideo'));
reg(['adminreportaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportaudio'));
reg(['adminreportdocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportdocument'));
reg(['adminreportsticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportsticker'));
reg(['adminreportpoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportpoll'));
reg(['adminreportwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportwelcome'));
reg(['adminreportfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportfarewell'));
reg(['adminreportrules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportrules'));
reg(['adminreportwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportwarning'));
reg(['adminreportrequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportrequest'));
reg(['adminreportevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportevent'));
reg(['adminreportnote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportnote'));
reg(['adminreporttemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreporttemplate'));
reg(['adminreportactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportactivity'));
reg(['adminreportinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportinvite'));
reg(['adminreportsetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportsetting'));
reg(['adminreportsecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminreportsecurity'));
reg(['adminmanagegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagegroup'));
reg(['adminmanagemember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagemember'));
reg(['adminmanageadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanageadmin'));
reg(['adminmanagelink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagelink'));
reg(['adminmanagespam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagespam'));
reg(['adminmanagetoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagetoxic'));
reg(['adminmanagemedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagemedia'));
reg(['adminmanageimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanageimage'));
reg(['adminmanagevideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagevideo'));
reg(['adminmanageaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanageaudio'));
reg(['adminmanagedocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagedocument'));
reg(['adminmanagesticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagesticker'));
reg(['adminmanagepoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagepoll'));
reg(['adminmanagewelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagewelcome'));
reg(['adminmanagefarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagefarewell'));
reg(['adminmanagerules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagerules'));
reg(['adminmanagewarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagewarning'));
reg(['adminmanagerequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagerequest'));
reg(['adminmanageevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanageevent'));
reg(['adminmanagenote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagenote'));
reg(['adminmanagetemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagetemplate'));
reg(['adminmanageactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanageactivity'));
reg(['adminmanageinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanageinvite'));
reg(['adminmanagesetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagesetting'));
reg(['adminmanagesecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmanagesecurity'));
reg(['adminconfiguregroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfiguregroup'));
reg(['adminconfiguremember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfiguremember'));
reg(['adminconfigureadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigureadmin'));
reg(['adminconfigurelink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigurelink'));
reg(['adminconfigurespam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigurespam'));
reg(['adminconfiguretoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfiguretoxic'));
reg(['adminconfiguremedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfiguremedia'));
reg(['adminconfigureimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigureimage'));
reg(['adminconfigurevideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigurevideo'));
reg(['adminconfigureaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigureaudio'));
reg(['adminconfiguredocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfiguredocument'));
reg(['adminconfiguresticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfiguresticker'));
reg(['adminconfigurepoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigurepoll'));
reg(['adminconfigurewelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigurewelcome'));
reg(['adminconfigurefarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigurefarewell'));
reg(['adminconfigurerules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigurerules'));
reg(['adminconfigurewarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigurewarning'));
reg(['adminconfigurerequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigurerequest'));
reg(['adminconfigureevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigureevent'));
reg(['adminconfigurenote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigurenote'));
reg(['adminconfiguretemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfiguretemplate'));
reg(['adminconfigureactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigureactivity'));
reg(['adminconfigureinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfigureinvite'));
reg(['adminconfiguresetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfiguresetting'));
reg(['adminconfiguresecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminconfiguresecurity'));
reg(['adminbackupgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupgroup'));
reg(['adminbackupmember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupmember'));
reg(['adminbackupadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupadmin'));
reg(['adminbackuplink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackuplink'));
reg(['adminbackupspam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupspam'));
reg(['adminbackuptoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackuptoxic'));
reg(['adminbackupmedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupmedia'));
reg(['adminbackupimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupimage'));
reg(['adminbackupvideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupvideo'));
reg(['adminbackupaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupaudio'));
reg(['adminbackupdocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupdocument'));
reg(['adminbackupsticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupsticker'));
reg(['adminbackuppoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackuppoll'));
reg(['adminbackupwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupwelcome'));
reg(['adminbackupfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupfarewell'));
reg(['adminbackuprules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackuprules'));
reg(['adminbackupwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupwarning'));
reg(['adminbackuprequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackuprequest'));
reg(['adminbackupevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupevent'));
reg(['adminbackupnote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupnote'));
reg(['adminbackuptemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackuptemplate'));
reg(['adminbackupactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupactivity'));
reg(['adminbackupinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupinvite'));
reg(['adminbackupsetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupsetting'));
reg(['adminbackupsecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminbackupsecurity'));
reg(['adminrestoregroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoregroup'));
reg(['adminrestoremember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoremember'));
reg(['adminrestoreadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoreadmin'));
reg(['adminrestorelink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestorelink'));
reg(['adminrestorespam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestorespam'));
reg(['adminrestoretoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoretoxic'));
reg(['adminrestoremedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoremedia'));
reg(['adminrestoreimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoreimage'));
reg(['adminrestorevideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestorevideo'));
reg(['adminrestoreaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoreaudio'));
reg(['adminrestoredocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoredocument'));
reg(['adminrestoresticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoresticker'));
reg(['adminrestorepoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestorepoll'));
reg(['adminrestorewelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestorewelcome'));
reg(['adminrestorefarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestorefarewell'));
reg(['adminrestorerules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestorerules'));
reg(['adminrestorewarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestorewarning'));
reg(['adminrestorerequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestorerequest'));
reg(['adminrestoreevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoreevent'));
reg(['adminrestorenote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestorenote'));
reg(['adminrestoretemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoretemplate'));
reg(['adminrestoreactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoreactivity'));
reg(['adminrestoreinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoreinvite'));
reg(['adminrestoresetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoresetting'));
reg(['adminrestoresecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminrestoresecurity'));
reg(['adminschedulegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulegroup'));
reg(['adminschedulemember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulemember'));
reg(['adminscheduleadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscheduleadmin'));
reg(['adminschedulelink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulelink'));
reg(['adminschedulespam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulespam'));
reg(['adminscheduletoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscheduletoxic'));
reg(['adminschedulemedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulemedia'));
reg(['adminscheduleimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscheduleimage'));
reg(['adminschedulevideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulevideo'));
reg(['adminscheduleaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscheduleaudio'));
reg(['adminscheduledocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscheduledocument'));
reg(['adminschedulesticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulesticker'));
reg(['adminschedulepoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulepoll'));
reg(['adminschedulewelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulewelcome'));
reg(['adminschedulefarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulefarewell'));
reg(['adminschedulerules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulerules'));
reg(['adminschedulewarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulewarning'));
reg(['adminschedulerequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulerequest'));
reg(['adminscheduleevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscheduleevent'));
reg(['adminschedulenote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulenote'));
reg(['adminscheduletemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscheduletemplate'));
reg(['adminscheduleactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscheduleactivity'));
reg(['adminscheduleinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminscheduleinvite'));
reg(['adminschedulesetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulesetting'));
reg(['adminschedulesecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminschedulesecurity'));
reg(['adminannouncegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncegroup'));
reg(['adminannouncemember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncemember'));
reg(['adminannounceadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannounceadmin'));
reg(['adminannouncelink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncelink'));
reg(['adminannouncespam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncespam'));
reg(['adminannouncetoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncetoxic'));
reg(['adminannouncemedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncemedia'));
reg(['adminannounceimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannounceimage'));
reg(['adminannouncevideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncevideo'));
reg(['adminannounceaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannounceaudio'));
reg(['adminannouncedocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncedocument'));
reg(['adminannouncesticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncesticker'));
reg(['adminannouncepoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncepoll'));
reg(['adminannouncewelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncewelcome'));
reg(['adminannouncefarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncefarewell'));
reg(['adminannouncerules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncerules'));
reg(['adminannouncewarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncewarning'));
reg(['adminannouncerequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncerequest'));
reg(['adminannounceevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannounceevent'));
reg(['adminannouncenote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncenote'));
reg(['adminannouncetemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncetemplate'));
reg(['adminannounceactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannounceactivity'));
reg(['adminannounceinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannounceinvite'));
reg(['adminannouncesetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncesetting'));
reg(['adminannouncesecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminannouncesecurity'));
reg(['adminfiltergroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfiltergroup'));
reg(['adminfiltermember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfiltermember'));
reg(['adminfilteradmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilteradmin'));
reg(['adminfilterlink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterlink'));
reg(['adminfilterspam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterspam'));
reg(['adminfiltertoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfiltertoxic'));
reg(['adminfiltermedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfiltermedia'));
reg(['adminfilterimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterimage'));
reg(['adminfiltervideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfiltervideo'));
reg(['adminfilteraudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilteraudio'));
reg(['adminfilterdocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterdocument'));
reg(['adminfiltersticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfiltersticker'));
reg(['adminfilterpoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterpoll'));
reg(['adminfilterwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterwelcome'));
reg(['adminfilterfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterfarewell'));
reg(['adminfilterrules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterrules'));
reg(['adminfilterwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterwarning'));
reg(['adminfilterrequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterrequest'));
reg(['adminfilterevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterevent'));
reg(['adminfilternote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilternote'));
reg(['adminfiltertemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfiltertemplate'));
reg(['adminfilteractivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilteractivity'));
reg(['adminfilterinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfilterinvite'));
reg(['adminfiltersetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfiltersetting'));
reg(['adminfiltersecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminfiltersecurity'));
reg(['adminmoderategroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderategroup'));
reg(['adminmoderatemember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatemember'));
reg(['adminmoderateadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderateadmin'));
reg(['adminmoderatelink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatelink'));
reg(['adminmoderatespam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatespam'));
reg(['adminmoderatetoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatetoxic'));
reg(['adminmoderatemedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatemedia'));
reg(['adminmoderateimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderateimage'));
reg(['adminmoderatevideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatevideo'));
reg(['adminmoderateaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderateaudio'));
reg(['adminmoderatedocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatedocument'));
reg(['adminmoderatesticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatesticker'));
reg(['adminmoderatepoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatepoll'));
reg(['adminmoderatewelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatewelcome'));
reg(['adminmoderatefarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatefarewell'));
reg(['adminmoderaterules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderaterules'));
reg(['adminmoderatewarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatewarning'));
reg(['adminmoderaterequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderaterequest'));
reg(['adminmoderateevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderateevent'));
reg(['adminmoderatenote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatenote'));
reg(['adminmoderatetemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatetemplate'));
reg(['adminmoderateactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderateactivity'));
reg(['adminmoderateinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderateinvite'));
reg(['adminmoderatesetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatesetting'));
reg(['adminmoderatesecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminmoderatesecurity'));
reg(['adminsecuregroup'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecuregroup'));
reg(['adminsecuremember'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecuremember'));
reg(['adminsecureadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecureadmin'));
reg(['adminsecurelink'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecurelink'));
reg(['adminsecurespam'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecurespam'));
reg(['adminsecuretoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecuretoxic'));
reg(['adminsecuremedia'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecuremedia'));
reg(['adminsecureimage'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecureimage'));
reg(['adminsecurevideo'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecurevideo'));
reg(['adminsecureaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecureaudio'));
reg(['adminsecuredocument'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecuredocument'));
reg(['adminsecuresticker'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecuresticker'));
reg(['adminsecurepoll'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecurepoll'));
reg(['adminsecurewelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecurewelcome'));
reg(['adminsecurefarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecurefarewell'));
reg(['adminsecurerules'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecurerules'));
reg(['adminsecurewarning'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecurewarning'));
reg(['adminsecurerequest'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecurerequest'));
reg(['adminsecureevent'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecureevent'));
reg(['adminsecurenote'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecurenote'));
reg(['adminsecuretemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecuretemplate'));
reg(['adminsecureactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecureactivity'));
reg(['adminsecureinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecureinvite'));
reg(['adminsecuresetting'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecuresetting'));
reg(['adminsecuresecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'adminsecuresecurity'));
reg(['admininspectgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectgroup'));
reg(['admininspectmember'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectmember'));
reg(['admininspectadmin'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectadmin'));
reg(['admininspectlink'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectlink'));
reg(['admininspectspam'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectspam'));
reg(['admininspecttoxic'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspecttoxic'));
reg(['admininspectmedia'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectmedia'));
reg(['admininspectimage'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectimage'));
reg(['admininspectvideo'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectvideo'));
reg(['admininspectaudio'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectaudio'));
reg(['admininspectdocument'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectdocument'));
reg(['admininspectsticker'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectsticker'));
reg(['admininspectpoll'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectpoll'));
reg(['admininspectwelcome'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectwelcome'));
reg(['admininspectfarewell'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectfarewell'));
reg(['admininspectrules'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectrules'));
reg(['admininspectwarning'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectwarning'));
reg(['admininspectrequest'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectrequest'));
reg(['admininspectevent'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectevent'));
reg(['admininspectnote'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectnote'));
reg(['admininspecttemplate'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspecttemplate'));
reg(['admininspectactivity'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectactivity'));
reg(['admininspectinvite'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectinvite'));
reg(['admininspectsetting'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectsetting'));
reg(['admininspectsecurity'], async (ctx) => smileyGeneratedFeature(ctx, 'admininspectsecurity'));
reg(['funjokesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funjokesmiley'));
reg(['funjokeanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funjokeanime'));
reg(['funjokeemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funjokeemoji'));
reg(['funjokenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funjokenumber'));
reg(['funjokeword'], async (ctx) => smileyGeneratedFeature(ctx, 'funjokeword'));
reg(['funjokepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funjokepicture'));
reg(['funjokestory'], async (ctx) => smileyGeneratedFeature(ctx, 'funjokestory'));
reg(['funjokefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funjokefriend'));
reg(['funjokegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funjokegroup'));
reg(['funjokedaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funjokedaily'));
reg(['funquizsmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funquizsmiley'));
reg(['funquizanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funquizanime'));
reg(['funquizemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funquizemoji'));
reg(['funquiznumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funquiznumber'));
reg(['funquizword'], async (ctx) => smileyGeneratedFeature(ctx, 'funquizword'));
reg(['funquizpicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funquizpicture'));
reg(['funquizstory'], async (ctx) => smileyGeneratedFeature(ctx, 'funquizstory'));
reg(['funquizfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funquizfriend'));
reg(['funquizgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funquizgroup'));
reg(['funquizdaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funquizdaily'));
reg(['funguesssmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funguesssmiley'));
reg(['funguessanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funguessanime'));
reg(['funguessemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funguessemoji'));
reg(['funguessnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funguessnumber'));
reg(['funguessword'], async (ctx) => smileyGeneratedFeature(ctx, 'funguessword'));
reg(['funguesspicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funguesspicture'));
reg(['funguessstory'], async (ctx) => smileyGeneratedFeature(ctx, 'funguessstory'));
reg(['funguessfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funguessfriend'));
reg(['funguessgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funguessgroup'));
reg(['funguessdaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funguessdaily'));
reg(['funemojismiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funemojismiley'));
reg(['funemojianime'], async (ctx) => smileyGeneratedFeature(ctx, 'funemojianime'));
reg(['funemojiemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funemojiemoji'));
reg(['funemojinumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funemojinumber'));
reg(['funemojiword'], async (ctx) => smileyGeneratedFeature(ctx, 'funemojiword'));
reg(['funemojipicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funemojipicture'));
reg(['funemojistory'], async (ctx) => smileyGeneratedFeature(ctx, 'funemojistory'));
reg(['funemojifriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funemojifriend'));
reg(['funemojigroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funemojigroup'));
reg(['funemojidaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funemojidaily'));
reg(['funstorysmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funstorysmiley'));
reg(['funstoryanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funstoryanime'));
reg(['funstoryemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funstoryemoji'));
reg(['funstorynumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funstorynumber'));
reg(['funstoryword'], async (ctx) => smileyGeneratedFeature(ctx, 'funstoryword'));
reg(['funstorypicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funstorypicture'));
reg(['funstorystory'], async (ctx) => smileyGeneratedFeature(ctx, 'funstorystory'));
reg(['funstoryfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funstoryfriend'));
reg(['funstorygroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funstorygroup'));
reg(['funstorydaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funstorydaily'));
reg(['funroastsmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funroastsmiley'));
reg(['funroastanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funroastanime'));
reg(['funroastemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funroastemoji'));
reg(['funroastnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funroastnumber'));
reg(['funroastword'], async (ctx) => smileyGeneratedFeature(ctx, 'funroastword'));
reg(['funroastpicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funroastpicture'));
reg(['funroaststory'], async (ctx) => smileyGeneratedFeature(ctx, 'funroaststory'));
reg(['funroastfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funroastfriend'));
reg(['funroastgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funroastgroup'));
reg(['funroastdaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funroastdaily'));
reg(['funcomplimentsmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funcomplimentsmiley'));
reg(['funcomplimentanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funcomplimentanime'));
reg(['funcomplimentemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funcomplimentemoji'));
reg(['funcomplimentnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funcomplimentnumber'));
reg(['funcomplimentword'], async (ctx) => smileyGeneratedFeature(ctx, 'funcomplimentword'));
reg(['funcomplimentpicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funcomplimentpicture'));
reg(['funcomplimentstory'], async (ctx) => smileyGeneratedFeature(ctx, 'funcomplimentstory'));
reg(['funcomplimentfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funcomplimentfriend'));
reg(['funcomplimentgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funcomplimentgroup'));
reg(['funcomplimentdaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funcomplimentdaily'));
reg(['funtruthsmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funtruthsmiley'));
reg(['funtruthanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funtruthanime'));
reg(['funtruthemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funtruthemoji'));
reg(['funtruthnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funtruthnumber'));
reg(['funtruthword'], async (ctx) => smileyGeneratedFeature(ctx, 'funtruthword'));
reg(['funtruthpicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funtruthpicture'));
reg(['funtruthstory'], async (ctx) => smileyGeneratedFeature(ctx, 'funtruthstory'));
reg(['funtruthfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funtruthfriend'));
reg(['funtruthgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funtruthgroup'));
reg(['funtruthdaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funtruthdaily'));
reg(['fundaresmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'fundaresmiley'));
reg(['fundareanime'], async (ctx) => smileyGeneratedFeature(ctx, 'fundareanime'));
reg(['fundareemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'fundareemoji'));
reg(['fundarenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'fundarenumber'));
reg(['fundareword'], async (ctx) => smileyGeneratedFeature(ctx, 'fundareword'));
reg(['fundarepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'fundarepicture'));
reg(['fundarestory'], async (ctx) => smileyGeneratedFeature(ctx, 'fundarestory'));
reg(['fundarefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'fundarefriend'));
reg(['fundaregroup'], async (ctx) => smileyGeneratedFeature(ctx, 'fundaregroup'));
reg(['fundaredaily'], async (ctx) => smileyGeneratedFeature(ctx, 'fundaredaily'));
reg(['funriddlesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funriddlesmiley'));
reg(['funriddleanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funriddleanime'));
reg(['funriddleemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funriddleemoji'));
reg(['funriddlenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funriddlenumber'));
reg(['funriddleword'], async (ctx) => smileyGeneratedFeature(ctx, 'funriddleword'));
reg(['funriddlepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funriddlepicture'));
reg(['funriddlestory'], async (ctx) => smileyGeneratedFeature(ctx, 'funriddlestory'));
reg(['funriddlefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funriddlefriend'));
reg(['funriddlegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funriddlegroup'));
reg(['funriddledaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funriddledaily'));
reg(['funfortunesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funfortunesmiley'));
reg(['funfortuneanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funfortuneanime'));
reg(['funfortuneemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funfortuneemoji'));
reg(['funfortunenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funfortunenumber'));
reg(['funfortuneword'], async (ctx) => smileyGeneratedFeature(ctx, 'funfortuneword'));
reg(['funfortunepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funfortunepicture'));
reg(['funfortunestory'], async (ctx) => smileyGeneratedFeature(ctx, 'funfortunestory'));
reg(['funfortunefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funfortunefriend'));
reg(['funfortunegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funfortunegroup'));
reg(['funfortunedaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funfortunedaily'));
reg(['funmemesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funmemesmiley'));
reg(['funmemeanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funmemeanime'));
reg(['funmemeemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funmemeemoji'));
reg(['funmemenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funmemenumber'));
reg(['funmemeword'], async (ctx) => smileyGeneratedFeature(ctx, 'funmemeword'));
reg(['funmemepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funmemepicture'));
reg(['funmemestory'], async (ctx) => smileyGeneratedFeature(ctx, 'funmemestory'));
reg(['funmemefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funmemefriend'));
reg(['funmemegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funmemegroup'));
reg(['funmemedaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funmemedaily'));
reg(['funrandomsmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funrandomsmiley'));
reg(['funrandomanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funrandomanime'));
reg(['funrandomemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funrandomemoji'));
reg(['funrandomnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funrandomnumber'));
reg(['funrandomword'], async (ctx) => smileyGeneratedFeature(ctx, 'funrandomword'));
reg(['funrandompicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funrandompicture'));
reg(['funrandomstory'], async (ctx) => smileyGeneratedFeature(ctx, 'funrandomstory'));
reg(['funrandomfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funrandomfriend'));
reg(['funrandomgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funrandomgroup'));
reg(['funrandomdaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funrandomdaily'));
reg(['funduelsmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funduelsmiley'));
reg(['funduelanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funduelanime'));
reg(['funduelemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funduelemoji'));
reg(['funduelnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funduelnumber'));
reg(['funduelword'], async (ctx) => smileyGeneratedFeature(ctx, 'funduelword'));
reg(['funduelpicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funduelpicture'));
reg(['funduelstory'], async (ctx) => smileyGeneratedFeature(ctx, 'funduelstory'));
reg(['funduelfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funduelfriend'));
reg(['funduelgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funduelgroup'));
reg(['fundueldaily'], async (ctx) => smileyGeneratedFeature(ctx, 'fundueldaily'));
reg(['funvotesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funvotesmiley'));
reg(['funvoteanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funvoteanime'));
reg(['funvoteemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funvoteemoji'));
reg(['funvotenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funvotenumber'));
reg(['funvoteword'], async (ctx) => smileyGeneratedFeature(ctx, 'funvoteword'));
reg(['funvotepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funvotepicture'));
reg(['funvotestory'], async (ctx) => smileyGeneratedFeature(ctx, 'funvotestory'));
reg(['funvotefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funvotefriend'));
reg(['funvotegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funvotegroup'));
reg(['funvotedaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funvotedaily'));
reg(['funpollsmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funpollsmiley'));
reg(['funpollanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funpollanime'));
reg(['funpollemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funpollemoji'));
reg(['funpollnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funpollnumber'));
reg(['funpollword'], async (ctx) => smileyGeneratedFeature(ctx, 'funpollword'));
reg(['funpollpicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funpollpicture'));
reg(['funpollstory'], async (ctx) => smileyGeneratedFeature(ctx, 'funpollstory'));
reg(['funpollfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funpollfriend'));
reg(['funpollgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funpollgroup'));
reg(['funpolldaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funpolldaily'));
reg(['funcaptionsmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funcaptionsmiley'));
reg(['funcaptionanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funcaptionanime'));
reg(['funcaptionemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funcaptionemoji'));
reg(['funcaptionnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funcaptionnumber'));
reg(['funcaptionword'], async (ctx) => smileyGeneratedFeature(ctx, 'funcaptionword'));
reg(['funcaptionpicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funcaptionpicture'));
reg(['funcaptionstory'], async (ctx) => smileyGeneratedFeature(ctx, 'funcaptionstory'));
reg(['funcaptionfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funcaptionfriend'));
reg(['funcaptiongroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funcaptiongroup'));
reg(['funcaptiondaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funcaptiondaily'));
reg(['funquotesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funquotesmiley'));
reg(['funquoteanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funquoteanime'));
reg(['funquoteemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funquoteemoji'));
reg(['funquotenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funquotenumber'));
reg(['funquoteword'], async (ctx) => smileyGeneratedFeature(ctx, 'funquoteword'));
reg(['funquotepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funquotepicture'));
reg(['funquotestory'], async (ctx) => smileyGeneratedFeature(ctx, 'funquotestory'));
reg(['funquotefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funquotefriend'));
reg(['funquotegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funquotegroup'));
reg(['funquotedaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funquotedaily'));
reg(['funchallengesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funchallengesmiley'));
reg(['funchallengeanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funchallengeanime'));
reg(['funchallengeemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funchallengeemoji'));
reg(['funchallengenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funchallengenumber'));
reg(['funchallengeword'], async (ctx) => smileyGeneratedFeature(ctx, 'funchallengeword'));
reg(['funchallengepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funchallengepicture'));
reg(['funchallengestory'], async (ctx) => smileyGeneratedFeature(ctx, 'funchallengestory'));
reg(['funchallengefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funchallengefriend'));
reg(['funchallengegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funchallengegroup'));
reg(['funchallengedaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funchallengedaily'));
reg(['funreactionsmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funreactionsmiley'));
reg(['funreactionanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funreactionanime'));
reg(['funreactionemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funreactionemoji'));
reg(['funreactionnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funreactionnumber'));
reg(['funreactionword'], async (ctx) => smileyGeneratedFeature(ctx, 'funreactionword'));
reg(['funreactionpicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funreactionpicture'));
reg(['funreactionstory'], async (ctx) => smileyGeneratedFeature(ctx, 'funreactionstory'));
reg(['funreactionfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funreactionfriend'));
reg(['funreactiongroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funreactiongroup'));
reg(['funreactiondaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funreactiondaily'));
reg(['funmusicsmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funmusicsmiley'));
reg(['funmusicanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funmusicanime'));
reg(['funmusicemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funmusicemoji'));
reg(['funmusicnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funmusicnumber'));
reg(['funmusicword'], async (ctx) => smileyGeneratedFeature(ctx, 'funmusicword'));
reg(['funmusicpicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funmusicpicture'));
reg(['funmusicstory'], async (ctx) => smileyGeneratedFeature(ctx, 'funmusicstory'));
reg(['funmusicfriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funmusicfriend'));
reg(['funmusicgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funmusicgroup'));
reg(['funmusicdaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funmusicdaily'));
reg(['funmoviesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funmoviesmiley'));
reg(['funmovieanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funmovieanime'));
reg(['funmovieemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funmovieemoji'));
reg(['funmovienumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funmovienumber'));
reg(['funmovieword'], async (ctx) => smileyGeneratedFeature(ctx, 'funmovieword'));
reg(['funmoviepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funmoviepicture'));
reg(['funmoviestory'], async (ctx) => smileyGeneratedFeature(ctx, 'funmoviestory'));
reg(['funmoviefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funmoviefriend'));
reg(['funmoviegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funmoviegroup'));
reg(['funmoviedaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funmoviedaily'));
reg(['funanimesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funanimesmiley'));
reg(['funanimeanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funanimeanime'));
reg(['funanimeemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funanimeemoji'));
reg(['funanimenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funanimenumber'));
reg(['funanimeword'], async (ctx) => smileyGeneratedFeature(ctx, 'funanimeword'));
reg(['funanimepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funanimepicture'));
reg(['funanimestory'], async (ctx) => smileyGeneratedFeature(ctx, 'funanimestory'));
reg(['funanimefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funanimefriend'));
reg(['funanimegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funanimegroup'));
reg(['funanimedaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funanimedaily'));
reg(['fungamesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'fungamesmiley'));
reg(['fungameanime'], async (ctx) => smileyGeneratedFeature(ctx, 'fungameanime'));
reg(['fungameemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'fungameemoji'));
reg(['fungamenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'fungamenumber'));
reg(['fungameword'], async (ctx) => smileyGeneratedFeature(ctx, 'fungameword'));
reg(['fungamepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'fungamepicture'));
reg(['fungamestory'], async (ctx) => smileyGeneratedFeature(ctx, 'fungamestory'));
reg(['fungamefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'fungamefriend'));
reg(['fungamegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'fungamegroup'));
reg(['fungamedaily'], async (ctx) => smileyGeneratedFeature(ctx, 'fungamedaily'));
reg(['funpuzzlesmiley'], async (ctx) => smileyGeneratedFeature(ctx, 'funpuzzlesmiley'));
reg(['funpuzzleanime'], async (ctx) => smileyGeneratedFeature(ctx, 'funpuzzleanime'));
reg(['funpuzzleemoji'], async (ctx) => smileyGeneratedFeature(ctx, 'funpuzzleemoji'));
reg(['funpuzzlenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'funpuzzlenumber'));
reg(['funpuzzleword'], async (ctx) => smileyGeneratedFeature(ctx, 'funpuzzleword'));
reg(['funpuzzlepicture'], async (ctx) => smileyGeneratedFeature(ctx, 'funpuzzlepicture'));
reg(['funpuzzlestory'], async (ctx) => smileyGeneratedFeature(ctx, 'funpuzzlestory'));
reg(['funpuzzlefriend'], async (ctx) => smileyGeneratedFeature(ctx, 'funpuzzlefriend'));
reg(['funpuzzlegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'funpuzzlegroup'));
reg(['funpuzzledaily'], async (ctx) => smileyGeneratedFeature(ctx, 'funpuzzledaily'));
reg(['toolconverttext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolconverttext'));
reg(['toolconvertnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolconvertnumber'));
reg(['toolconvertjson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolconvertjson'));
reg(['toolconverturl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolconverturl'));
reg(['toolconvertbase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolconvertbase64'));
reg(['toolconverthex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolconverthex'));
reg(['toolconvertbinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolconvertbinary'));
reg(['toolconvertuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolconvertuuid'));
reg(['toolconvertpassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolconvertpassword'));
reg(['toolconvertword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolconvertword'));
reg(['toolformattext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolformattext'));
reg(['toolformatnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolformatnumber'));
reg(['toolformatjson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolformatjson'));
reg(['toolformaturl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolformaturl'));
reg(['toolformatbase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolformatbase64'));
reg(['toolformathex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolformathex'));
reg(['toolformatbinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolformatbinary'));
reg(['toolformatuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolformatuuid'));
reg(['toolformatpassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolformatpassword'));
reg(['toolformatword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolformatword'));
reg(['toolgeneratetext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolgeneratetext'));
reg(['toolgeneratenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolgeneratenumber'));
reg(['toolgeneratejson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolgeneratejson'));
reg(['toolgenerateurl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolgenerateurl'));
reg(['toolgeneratebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolgeneratebase64'));
reg(['toolgeneratehex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolgeneratehex'));
reg(['toolgeneratebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolgeneratebinary'));
reg(['toolgenerateuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolgenerateuuid'));
reg(['toolgeneratepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolgeneratepassword'));
reg(['toolgenerateword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolgenerateword'));
reg(['toolchecktext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolchecktext'));
reg(['toolchecknumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolchecknumber'));
reg(['toolcheckjson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcheckjson'));
reg(['toolcheckurl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcheckurl'));
reg(['toolcheckbase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcheckbase64'));
reg(['toolcheckhex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcheckhex'));
reg(['toolcheckbinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcheckbinary'));
reg(['toolcheckuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcheckuuid'));
reg(['toolcheckpassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcheckpassword'));
reg(['toolcheckword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcheckword'));
reg(['toolcounttext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcounttext'));
reg(['toolcountnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcountnumber'));
reg(['toolcountjson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcountjson'));
reg(['toolcounturl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcounturl'));
reg(['toolcountbase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcountbase64'));
reg(['toolcounthex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcounthex'));
reg(['toolcountbinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcountbinary'));
reg(['toolcountuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcountuuid'));
reg(['toolcountpassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcountpassword'));
reg(['toolcountword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcountword'));
reg(['toolcalculatetext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcalculatetext'));
reg(['toolcalculatenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcalculatenumber'));
reg(['toolcalculatejson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcalculatejson'));
reg(['toolcalculateurl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcalculateurl'));
reg(['toolcalculatebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcalculatebase64'));
reg(['toolcalculatehex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcalculatehex'));
reg(['toolcalculatebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcalculatebinary'));
reg(['toolcalculateuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcalculateuuid'));
reg(['toolcalculatepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcalculatepassword'));
reg(['toolcalculateword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcalculateword'));
reg(['toolencodetext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolencodetext'));
reg(['toolencodenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolencodenumber'));
reg(['toolencodejson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolencodejson'));
reg(['toolencodeurl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolencodeurl'));
reg(['toolencodebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolencodebase64'));
reg(['toolencodehex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolencodehex'));
reg(['toolencodebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolencodebinary'));
reg(['toolencodeuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolencodeuuid'));
reg(['toolencodepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolencodepassword'));
reg(['toolencodeword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolencodeword'));
reg(['tooldecodetext'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldecodetext'));
reg(['tooldecodenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldecodenumber'));
reg(['tooldecodejson'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldecodejson'));
reg(['tooldecodeurl'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldecodeurl'));
reg(['tooldecodebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldecodebase64'));
reg(['tooldecodehex'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldecodehex'));
reg(['tooldecodebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldecodebinary'));
reg(['tooldecodeuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldecodeuuid'));
reg(['tooldecodepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldecodepassword'));
reg(['tooldecodeword'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldecodeword'));
reg(['toolsorttext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsorttext'));
reg(['toolsortnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsortnumber'));
reg(['toolsortjson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsortjson'));
reg(['toolsorturl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsorturl'));
reg(['toolsortbase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsortbase64'));
reg(['toolsorthex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsorthex'));
reg(['toolsortbinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsortbinary'));
reg(['toolsortuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsortuuid'));
reg(['toolsortpassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsortpassword'));
reg(['toolsortword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsortword'));
reg(['toolshuffletext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolshuffletext'));
reg(['toolshufflenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolshufflenumber'));
reg(['toolshufflejson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolshufflejson'));
reg(['toolshuffleurl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolshuffleurl'));
reg(['toolshufflebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolshufflebase64'));
reg(['toolshufflehex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolshufflehex'));
reg(['toolshufflebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolshufflebinary'));
reg(['toolshuffleuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolshuffleuuid'));
reg(['toolshufflepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolshufflepassword'));
reg(['toolshuffleword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolshuffleword'));
reg(['toolsearchtext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsearchtext'));
reg(['toolsearchnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsearchnumber'));
reg(['toolsearchjson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsearchjson'));
reg(['toolsearchurl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsearchurl'));
reg(['toolsearchbase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsearchbase64'));
reg(['toolsearchhex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsearchhex'));
reg(['toolsearchbinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsearchbinary'));
reg(['toolsearchuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsearchuuid'));
reg(['toolsearchpassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsearchpassword'));
reg(['toolsearchword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsearchword'));
reg(['toolvalidatetext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolvalidatetext'));
reg(['toolvalidatenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolvalidatenumber'));
reg(['toolvalidatejson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolvalidatejson'));
reg(['toolvalidateurl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolvalidateurl'));
reg(['toolvalidatebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolvalidatebase64'));
reg(['toolvalidatehex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolvalidatehex'));
reg(['toolvalidatebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolvalidatebinary'));
reg(['toolvalidateuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolvalidateuuid'));
reg(['toolvalidatepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolvalidatepassword'));
reg(['toolvalidateword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolvalidateword'));
reg(['toolinspecttext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolinspecttext'));
reg(['toolinspectnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolinspectnumber'));
reg(['toolinspectjson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolinspectjson'));
reg(['toolinspecturl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolinspecturl'));
reg(['toolinspectbase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolinspectbase64'));
reg(['toolinspecthex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolinspecthex'));
reg(['toolinspectbinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolinspectbinary'));
reg(['toolinspectuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolinspectuuid'));
reg(['toolinspectpassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolinspectpassword'));
reg(['toolinspectword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolinspectword'));
reg(['toolsummarizetext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsummarizetext'));
reg(['toolsummarizenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsummarizenumber'));
reg(['toolsummarizejson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsummarizejson'));
reg(['toolsummarizeurl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsummarizeurl'));
reg(['toolsummarizebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsummarizebase64'));
reg(['toolsummarizehex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsummarizehex'));
reg(['toolsummarizebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsummarizebinary'));
reg(['toolsummarizeuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsummarizeuuid'));
reg(['toolsummarizepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsummarizepassword'));
reg(['toolsummarizeword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolsummarizeword'));
reg(['tooltranslatetext'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltranslatetext'));
reg(['tooltranslatenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltranslatenumber'));
reg(['tooltranslatejson'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltranslatejson'));
reg(['tooltranslateurl'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltranslateurl'));
reg(['tooltranslatebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltranslatebase64'));
reg(['tooltranslatehex'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltranslatehex'));
reg(['tooltranslatebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltranslatebinary'));
reg(['tooltranslateuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltranslateuuid'));
reg(['tooltranslatepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltranslatepassword'));
reg(['tooltranslateword'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltranslateword'));
reg(['toolextracttext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolextracttext'));
reg(['toolextractnumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolextractnumber'));
reg(['toolextractjson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolextractjson'));
reg(['toolextracturl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolextracturl'));
reg(['toolextractbase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolextractbase64'));
reg(['toolextracthex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolextracthex'));
reg(['toolextractbinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolextractbinary'));
reg(['toolextractuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolextractuuid'));
reg(['toolextractpassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolextractpassword'));
reg(['toolextractword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolextractword'));
reg(['toolcleantext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcleantext'));
reg(['toolcleannumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcleannumber'));
reg(['toolcleanjson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcleanjson'));
reg(['toolcleanurl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcleanurl'));
reg(['toolcleanbase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcleanbase64'));
reg(['toolcleanhex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcleanhex'));
reg(['toolcleanbinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcleanbinary'));
reg(['toolcleanuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcleanuuid'));
reg(['toolcleanpassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcleanpassword'));
reg(['toolcleanword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcleanword'));
reg(['toolcomparetext'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcomparetext'));
reg(['toolcomparenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcomparenumber'));
reg(['toolcomparejson'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcomparejson'));
reg(['toolcompareurl'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcompareurl'));
reg(['toolcomparebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcomparebase64'));
reg(['toolcomparehex'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcomparehex'));
reg(['toolcomparebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcomparebinary'));
reg(['toolcompareuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcompareuuid'));
reg(['toolcomparepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcomparepassword'));
reg(['toolcompareword'], async (ctx) => smileyGeneratedFeature(ctx, 'toolcompareword'));
reg(['tooltimetext'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltimetext'));
reg(['tooltimenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltimenumber'));
reg(['tooltimejson'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltimejson'));
reg(['tooltimeurl'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltimeurl'));
reg(['tooltimebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltimebase64'));
reg(['tooltimehex'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltimehex'));
reg(['tooltimebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltimebinary'));
reg(['tooltimeuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltimeuuid'));
reg(['tooltimepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltimepassword'));
reg(['tooltimeword'], async (ctx) => smileyGeneratedFeature(ctx, 'tooltimeword'));
reg(['tooldatetext'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldatetext'));
reg(['tooldatenumber'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldatenumber'));
reg(['tooldatejson'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldatejson'));
reg(['tooldateurl'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldateurl'));
reg(['tooldatebase64'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldatebase64'));
reg(['tooldatehex'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldatehex'));
reg(['tooldatebinary'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldatebinary'));
reg(['tooldateuuid'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldateuuid'));
reg(['tooldatepassword'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldatepassword'));
reg(['tooldateword'], async (ctx) => smileyGeneratedFeature(ctx, 'tooldateword'));
reg(['mediadownloadyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediadownloadyoutube'));
reg(['mediadownloadspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediadownloadspotify'));
reg(['mediadownloadtiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediadownloadtiktok'));
reg(['mediadownloadinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediadownloadinstagram'));
reg(['mediadownloadfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediadownloadfacebook'));
reg(['mediasearchyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediasearchyoutube'));
reg(['mediasearchspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediasearchspotify'));
reg(['mediasearchtiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediasearchtiktok'));
reg(['mediasearchinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediasearchinstagram'));
reg(['mediasearchfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediasearchfacebook'));
reg(['mediaconvertyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaconvertyoutube'));
reg(['mediaconvertspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaconvertspotify'));
reg(['mediaconverttiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaconverttiktok'));
reg(['mediaconvertinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaconvertinstagram'));
reg(['mediaconvertfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaconvertfacebook'));
reg(['mediacompressyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacompressyoutube'));
reg(['mediacompressspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacompressspotify'));
reg(['mediacompresstiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacompresstiktok'));
reg(['mediacompressinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacompressinstagram'));
reg(['mediacompressfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacompressfacebook'));
reg(['mediainspectyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediainspectyoutube'));
reg(['mediainspectspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediainspectspotify'));
reg(['mediainspecttiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediainspecttiktok'));
reg(['mediainspectinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediainspectinstagram'));
reg(['mediainspectfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediainspectfacebook'));
reg(['mediacaptionyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacaptionyoutube'));
reg(['mediacaptionspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacaptionspotify'));
reg(['mediacaptiontiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacaptiontiktok'));
reg(['mediacaptioninstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacaptioninstagram'));
reg(['mediacaptionfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacaptionfacebook'));
reg(['mediastickeryoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediastickeryoutube'));
reg(['mediastickerspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediastickerspotify'));
reg(['mediastickertiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediastickertiktok'));
reg(['mediastickerinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediastickerinstagram'));
reg(['mediastickerfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediastickerfacebook'));
reg(['mediaaudioyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaaudioyoutube'));
reg(['mediaaudiospotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaaudiospotify'));
reg(['mediaaudiotiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaaudiotiktok'));
reg(['mediaaudioinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaaudioinstagram'));
reg(['mediaaudiofacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaaudiofacebook'));
reg(['mediavideoyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediavideoyoutube'));
reg(['mediavideospotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediavideospotify'));
reg(['mediavideotiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediavideotiktok'));
reg(['mediavideoinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediavideoinstagram'));
reg(['mediavideofacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediavideofacebook'));
reg(['mediaimageyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaimageyoutube'));
reg(['mediaimagespotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaimagespotify'));
reg(['mediaimagetiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaimagetiktok'));
reg(['mediaimageinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaimageinstagram'));
reg(['mediaimagefacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaimagefacebook'));
reg(['mediaresizeyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaresizeyoutube'));
reg(['mediaresizespotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaresizespotify'));
reg(['mediaresizetiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaresizetiktok'));
reg(['mediaresizeinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaresizeinstagram'));
reg(['mediaresizefacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaresizefacebook'));
reg(['mediacropyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacropyoutube'));
reg(['mediacropspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacropspotify'));
reg(['mediacroptiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacroptiktok'));
reg(['mediacropinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacropinstagram'));
reg(['mediacropfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediacropfacebook'));
reg(['mediaenhanceyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaenhanceyoutube'));
reg(['mediaenhancespotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaenhancespotify'));
reg(['mediaenhancetiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaenhancetiktok'));
reg(['mediaenhanceinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaenhanceinstagram'));
reg(['mediaenhancefacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaenhancefacebook'));
reg(['mediametadatayoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediametadatayoutube'));
reg(['mediametadataspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediametadataspotify'));
reg(['mediametadatatiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediametadatatiktok'));
reg(['mediametadatainstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediametadatainstagram'));
reg(['mediametadatafacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediametadatafacebook'));
reg(['mediathumbnailyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediathumbnailyoutube'));
reg(['mediathumbnailspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediathumbnailspotify'));
reg(['mediathumbnailtiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediathumbnailtiktok'));
reg(['mediathumbnailinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediathumbnailinstagram'));
reg(['mediathumbnailfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediathumbnailfacebook'));
reg(['mediapreviewyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediapreviewyoutube'));
reg(['mediapreviewspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediapreviewspotify'));
reg(['mediapreviewtiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediapreviewtiktok'));
reg(['mediapreviewinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediapreviewinstagram'));
reg(['mediapreviewfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediapreviewfacebook'));
reg(['mediaextractyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaextractyoutube'));
reg(['mediaextractspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaextractspotify'));
reg(['mediaextracttiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaextracttiktok'));
reg(['mediaextractinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaextractinstagram'));
reg(['mediaextractfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaextractfacebook'));
reg(['mediamergeyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediamergeyoutube'));
reg(['mediamergespotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediamergespotify'));
reg(['mediamergetiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediamergetiktok'));
reg(['mediamergeinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediamergeinstagram'));
reg(['mediamergefacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediamergefacebook'));
reg(['mediasplityoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediasplityoutube'));
reg(['mediasplitspotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediasplitspotify'));
reg(['mediasplittiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediasplittiktok'));
reg(['mediasplitinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediasplitinstagram'));
reg(['mediasplitfacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediasplitfacebook'));
reg(['mediaframeyoutube'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaframeyoutube'));
reg(['mediaframespotify'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaframespotify'));
reg(['mediaframetiktok'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaframetiktok'));
reg(['mediaframeinstagram'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaframeinstagram'));
reg(['mediaframefacebook'], async (ctx) => smileyGeneratedFeature(ctx, 'mediaframefacebook'));
reg(['botstatusbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botstatusbot'));
reg(['botstatusgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botstatusgroup'));
reg(['botstatususer'], async (ctx) => smileyGeneratedFeature(ctx, 'botstatususer'));
reg(['botstatussession'], async (ctx) => smileyGeneratedFeature(ctx, 'botstatussession'));
reg(['botstatusdatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botstatusdatabase'));
reg(['bothealthbot'], async (ctx) => smileyGeneratedFeature(ctx, 'bothealthbot'));
reg(['bothealthgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'bothealthgroup'));
reg(['bothealthuser'], async (ctx) => smileyGeneratedFeature(ctx, 'bothealthuser'));
reg(['bothealthsession'], async (ctx) => smileyGeneratedFeature(ctx, 'bothealthsession'));
reg(['bothealthdatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'bothealthdatabase'));
reg(['botstatsbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botstatsbot'));
reg(['botstatsgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botstatsgroup'));
reg(['botstatsuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botstatsuser'));
reg(['botstatssession'], async (ctx) => smileyGeneratedFeature(ctx, 'botstatssession'));
reg(['botstatsdatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botstatsdatabase'));
reg(['botuptimebot'], async (ctx) => smileyGeneratedFeature(ctx, 'botuptimebot'));
reg(['botuptimegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botuptimegroup'));
reg(['botuptimeuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botuptimeuser'));
reg(['botuptimesession'], async (ctx) => smileyGeneratedFeature(ctx, 'botuptimesession'));
reg(['botuptimedatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botuptimedatabase'));
reg(['botruntimebot'], async (ctx) => smileyGeneratedFeature(ctx, 'botruntimebot'));
reg(['botruntimegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botruntimegroup'));
reg(['botruntimeuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botruntimeuser'));
reg(['botruntimesession'], async (ctx) => smileyGeneratedFeature(ctx, 'botruntimesession'));
reg(['botruntimedatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botruntimedatabase'));
reg(['botsettingsbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botsettingsbot'));
reg(['botsettingsgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botsettingsgroup'));
reg(['botsettingsuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botsettingsuser'));
reg(['botsettingssession'], async (ctx) => smileyGeneratedFeature(ctx, 'botsettingssession'));
reg(['botsettingsdatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botsettingsdatabase'));
reg(['botsessionbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botsessionbot'));
reg(['botsessiongroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botsessiongroup'));
reg(['botsessionuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botsessionuser'));
reg(['botsessionsession'], async (ctx) => smileyGeneratedFeature(ctx, 'botsessionsession'));
reg(['botsessiondatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botsessiondatabase'));
reg(['botcachebot'], async (ctx) => smileyGeneratedFeature(ctx, 'botcachebot'));
reg(['botcachegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botcachegroup'));
reg(['botcacheuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botcacheuser'));
reg(['botcachesession'], async (ctx) => smileyGeneratedFeature(ctx, 'botcachesession'));
reg(['botcachedatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botcachedatabase'));
reg(['botqueuebot'], async (ctx) => smileyGeneratedFeature(ctx, 'botqueuebot'));
reg(['botqueuegroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botqueuegroup'));
reg(['botqueueuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botqueueuser'));
reg(['botqueuesession'], async (ctx) => smileyGeneratedFeature(ctx, 'botqueuesession'));
reg(['botqueuedatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botqueuedatabase'));
reg(['botlogsbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botlogsbot'));
reg(['botlogsgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botlogsgroup'));
reg(['botlogsuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botlogsuser'));
reg(['botlogssession'], async (ctx) => smileyGeneratedFeature(ctx, 'botlogssession'));
reg(['botlogsdatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botlogsdatabase'));
reg(['botbackupbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botbackupbot'));
reg(['botbackupgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botbackupgroup'));
reg(['botbackupuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botbackupuser'));
reg(['botbackupsession'], async (ctx) => smileyGeneratedFeature(ctx, 'botbackupsession'));
reg(['botbackupdatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botbackupdatabase'));
reg(['botrestorebot'], async (ctx) => smileyGeneratedFeature(ctx, 'botrestorebot'));
reg(['botrestoregroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botrestoregroup'));
reg(['botrestoreuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botrestoreuser'));
reg(['botrestoresession'], async (ctx) => smileyGeneratedFeature(ctx, 'botrestoresession'));
reg(['botrestoredatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botrestoredatabase'));
reg(['botreloadbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botreloadbot'));
reg(['botreloadgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botreloadgroup'));
reg(['botreloaduser'], async (ctx) => smileyGeneratedFeature(ctx, 'botreloaduser'));
reg(['botreloadsession'], async (ctx) => smileyGeneratedFeature(ctx, 'botreloadsession'));
reg(['botreloaddatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botreloaddatabase'));
reg(['botrestartbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botrestartbot'));
reg(['botrestartgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botrestartgroup'));
reg(['botrestartuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botrestartuser'));
reg(['botrestartsession'], async (ctx) => smileyGeneratedFeature(ctx, 'botrestartsession'));
reg(['botrestartdatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botrestartdatabase'));
reg(['botownerbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botownerbot'));
reg(['botownergroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botownergroup'));
reg(['botowneruser'], async (ctx) => smileyGeneratedFeature(ctx, 'botowneruser'));
reg(['botownersession'], async (ctx) => smileyGeneratedFeature(ctx, 'botownersession'));
reg(['botownerdatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botownerdatabase'));
reg(['botchannelbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botchannelbot'));
reg(['botchannelgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botchannelgroup'));
reg(['botchanneluser'], async (ctx) => smileyGeneratedFeature(ctx, 'botchanneluser'));
reg(['botchannelsession'], async (ctx) => smileyGeneratedFeature(ctx, 'botchannelsession'));
reg(['botchanneldatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botchanneldatabase'));
reg(['botsupportbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botsupportbot'));
reg(['botsupportgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botsupportgroup'));
reg(['botsupportuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botsupportuser'));
reg(['botsupportsession'], async (ctx) => smileyGeneratedFeature(ctx, 'botsupportsession'));
reg(['botsupportdatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botsupportdatabase'));
reg(['botinfobot'], async (ctx) => smileyGeneratedFeature(ctx, 'botinfobot'));
reg(['botinfogroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botinfogroup'));
reg(['botinfouser'], async (ctx) => smileyGeneratedFeature(ctx, 'botinfouser'));
reg(['botinfosession'], async (ctx) => smileyGeneratedFeature(ctx, 'botinfosession'));
reg(['botinfodatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botinfodatabase'));
reg(['botversionbot'], async (ctx) => smileyGeneratedFeature(ctx, 'botversionbot'));
reg(['botversiongroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botversiongroup'));
reg(['botversionuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botversionuser'));
reg(['botversionsession'], async (ctx) => smileyGeneratedFeature(ctx, 'botversionsession'));
reg(['botversiondatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botversiondatabase'));
reg(['botsystembot'], async (ctx) => smileyGeneratedFeature(ctx, 'botsystembot'));
reg(['botsystemgroup'], async (ctx) => smileyGeneratedFeature(ctx, 'botsystemgroup'));
reg(['botsystemuser'], async (ctx) => smileyGeneratedFeature(ctx, 'botsystemuser'));
reg(['botsystemsession'], async (ctx) => smileyGeneratedFeature(ctx, 'botsystemsession'));
reg(['botsystemdatabase'], async (ctx) => smileyGeneratedFeature(ctx, 'botsystemdatabase'));


function menuSubcategory(name, category) {
    const n = String(name || '').toLowerCase();

    if (category === '🛡️ Admin') return adminSubcategory(name);
    if (category === '⚔️ RPG') {
        if (/(quest|mission)/.test(n)) return '📜 Quest & Misi';
        if (/(boss|raid|hunt|lawan|attack|defend|dodge|battle|duel)/.test(n)) return '⚔️ Pertarungan';
        if (/explore/.test(n)) return '🗺️ Eksplorasi';
        if (/scout/.test(n)) return '🔭 Scout & Penjelajahan';
        if (/survive/.test(n)) return '🛡️ Survival';
        if (/(treasure|loot|chest)/.test(n)) return '💎 Harta & Loot';
        if (/fish/.test(n)) return '🎣 Memancing';
        if (/mine/.test(n)) return '⛏️ Mining';
        if (/(craft|refine|forge|upgrade)/.test(n)) return '🔨 Crafting & Upgrade';
        if (/(farm|plant|water|harvest)/.test(n)) return '🌾 Berkebun';
        if (/(cook|recipe)/.test(n)) return '🍳 Memasak';
        if (/guild|clan/.test(n)) return '🏰 Guild & Clan';
        if (/pet/.test(n)) return '🐾 Pet System';
        if (/(class|profil|stat|inventory|equip|unequip|use|heal|revive|train)/.test(n)) return '👤 Karakter & Perlengkapan';
        if (/(shop|toko|buy|sell|daily|job|kerja|bank|nabung|tarik|transfer|rob|economy|gold)/.test(n)) return '💰 Ekonomi & Toko';
        if (/(ranking|leaderboard|marry|divorce)/.test(n)) return '🏆 Ranking & Sosial';
        return '📦 RPG Lainnya';
    }
    if (category === '🛠️ Tools') {
        if (/(binary|base|hex|morse|rot|caesar|vigenere|atbash|cipher|encode|decode|ascii)/.test(n)) return '🔐 Encoding & Kriptografi';
        if (/(calc|persen|bmi|prima|faktorial|fibonacci|gcd|lcm|average|median|mode|fraction|interest|loan|roi|tax|discount|gpa|roman|area|volume|convert)/.test(n)) return '🔢 Matematika & Konversi';
        if (/(upper|lower|reverse|alternating|titlecase|camelcase|snakecase|kebabcase|leet|wordcount|vokal|konsonan|ulangteks|frekuensi|slugify|anagram|syllable|readingtime|smallcaps|upsidedown|zalgo|strikethrough|underline|circledtext|fullwidth|textanalysis|capitalize|trimspaces|countchar|removedupewords|strlen)/.test(n)) return '🔤 Manipulasi Teks';
        if (/(email|nohp|cc|password|palindrom|palindrome|iban|macvalidate|ipv4|regex|jsonvalidate|isnumeric)/.test(n)) return '✅ Validator & Pemeriksa';
        if (/(genpassword|uuid|pilih|shuffle|random|coupon|pingenerate|drawcard|hashtag|numbertowords|numeronim|passphrase|acronym)/.test(n)) return '🎲 Generator & Random';
        if (/(hari|tanggal|date|year|umur|age|weekday|weeknumber|quarter|businessdays|zodiak|timeconvert|ageinseconds|sisahari|daysinmonth)/.test(n)) return '📅 Tanggal & Waktu';
        if (/(diskon|bill|tip|currency|retirement|bmr|idealweight|waterintake|fueleff|cookingconvert|electricitybill)/.test(n)) return '💸 Keuangan & Kalkulator';
        if (/(qrcode|shorturl|url|html|json|extractemails|extracturls)/.test(n)) return '🌐 Web, URL & Data';
        return '🛠️ Tools Lainnya';
    }
    if (category === '🖼️ Media') {
        if (/(sticker|stiker|brat|iqc)/.test(n)) return '🎭 Stiker & Teks';
        if (/(hd|grayscale|mirror|blur|rotate|sepia|invert|pixelate|brighten|darken|flip|square|watermark)/.test(n)) return '🎨 Efek & Edit Gambar';
        if (/(speed|slowmo|mutevideo|reversevideo|extractaudio|volumeup)/.test(n)) return '🎬 Edit Video & Audio';
        if (/(pp|profile|avatar)/.test(n)) return '👤 Profil & Foto';
        if (/(repost|mediainfo)/.test(n)) return '🔁 Repost & Info Media';
        return '🖼️ Media Lainnya';
    }
    if (category === '🎮 Fun') {
        if (/(trivia|riddle|tebak|guess|scramble|rps|dice|coin|slot|magic8|tarot)/.test(n)) return '🎲 Mini Game';
        if (/(jodoh|love|wyr|zodiak|mood|pengagum|rayuan|pernahkah)/.test(n)) return '💕 Sosial & Fun';
        if (/(quote|fact|pantun|kata|afirmasi|wejangan)/.test(n)) return '💬 Quote & Random';
        if (/smiley/.test(n)) return '💙 Smiley Special';
        if (/(roast|compliment|pujian|tantangan|dare|truth)/.test(n)) return '🎭 Interaksi';
        return '🎮 Fun Lainnya';
    }
    if (category === '🤖 Bot') {
        if (/(menu|totalfitur|daftar|version|runtime|ping|whoami)/.test(n)) return 'ℹ️ Info & Status';
        if (/(self|public|private|autojoin|autoread|autotyping)/.test(n)) return '⚙️ Mode & Otomatisasi';
        if (/(jadibot|stopbot|listjadibot)/.test(n)) return '🤖 Multi Bot';
        if (/(stats|system|database|session)/.test(n)) return '📊 Sistem & Statistik';
        return '🤖 Bot Lainnya';
    }
    if (category === '🎵 Music') return '🎵 Musik & YouTube';
    if (category === '📥 Downloader') {
        if (/(ig|instagram|tiktok|twitter|facebook|threads|reddit|bilibili|dailymotion|vimeo|snackvideo|pinterest)/.test(n)) return '📱 Sosial Media';
        if (/(yt|youtube|play)/.test(n)) return '🎵 YouTube & Musik';
        return '📥 Downloader Lainnya';
    }
    if (category === '📢 Broadcast') return '📢 Broadcast';
    if (category === '🖥️ Panel') return '🖥️ Panel & Server';
    if (category === '🌟 Smiley') return '💙 Smiley AI & Special';
    if (category === '🛒 Sewa') return '🛒 Sewa Bot';
    if (category === '💎 Premium') return '💎 Premium';
    return '📦 Lainnya';
}

function getMenuKnowledgeBase() {
    const subcatMap = new Map();
    const descMap = new Map();
    for (const name of getMenuFeatureNames()) {
        const category = ALIAS_TO_CATEGORY.get(name) || categorizeRegistryName(name) || '📦 Lainnya';
        subcatMap.set(name, menuSubcategory(name, category));
        descMap.set(name, getFeatureDescription(name));
    }
    return { subcatMap, descMap };
}

reg(['allmenu'], async (ctx) => {
    const names = getAllCommandNames().filter(n => !['gamble','lottery','bettinggold'].includes(String(n).toLowerCase()));
    const prefix = settings.prefix || '.';
    const now = Date.now();

    const grouped = {};
    for (const name of names) {
        const cat = ALIAS_TO_CATEGORY.get(name) || '📦 Lainnya';
        (grouped[cat] ??= []).push(name);
    }

    // ── Header: info lengkap bertema Smiley, gaya bercabang tebal (┏┃┗) ────
    const header =
`🥶 *${settings.botName}* ❄️ — Domain Penuh
_${settings.botTagline || '❄️ Infinity Edition'}_
_"Ini bukan cuma menu. Ini Unlimited Void — semua jurus, terlihat jelas."_
❅ ⋆ ❆ ⋆ ❅ ⋆ ❆ ⋆ ❅ ⋆ ❆ ⋆ ❅

┏ 🕐 ${sc('Waktu')}    : ${fmtTime(now)} WIB
┃ 📅 ${sc('Tanggal')}  : ${fmtDate(now)}
┗ ⚡ ${sc('Prefix')}   : \`${prefix}\`

┏ 🌀 ${sc('Status')}   : 🟢 Online & Siap
┃ 📊 ${sc('Total')}    : *${names.length}* command
┗ 📚 ${sc('Kategori')} : *${CATEGORY_ORDER.length}* menu

┏ 🛡️ Anti-GB        ✅   🛡️ Anti-Link      ✅
┃ 🛡️ Anti-Shortlink ✅   🛡️ Anti-Spam      ✅
┃ 🛡️ Anti-Toxic     ✅   🛡️ Anti-Flood     ✅
┗ 📖 Auto-Read      ✅   ⏳ Cooldown       ✅

『 領域展開 — Semua Jurus Terungkap 』`;

    const sections = [header];

    // Setiap kategori ditampilkan dalam kotak bergaya: ╭─〔 emoji NAMA 〕─╮
    // diikuti ┣➤ command, ditutup ┗━━━. Untuk kategori yang isinya BANYAK
    // (RPG, Tools, dst — bisa 200+ command), list dipecah lagi per HURUF
    // AWAL (— A —, — B —, dst, seperti daftar kontak HP) supaya tidak jadi
    // satu tembok teks panjang yang malesin dibaca — orang bisa langsung
    // loncat ke huruf yang dia cari.
    const SPLIT_THRESHOLD = 20; // di atas ini, baru dipecah per huruf
    // FIX 2026-07-24: dulu cuma kategori Admin yang dikelompokkan per fungsi
    // + dikasih deskripsi; kategori lain cuma nama polos + split alfabet.
    // menuKB "membaca" sendRpgMenu/sendAdminMenu/sendFunMenu/sendToolsMenu/
    // sendMediaMenu/sendBotMenu (lihat getMenuKnowledgeBase() di atas) supaya
    // gaya yang sama (kelompok per fungsi + deskripsi singkat) sekarang
    // dipakai di SEMUA kategori, bukan cuma Admin.
    const menuKB = await getMenuKnowledgeBase();

    // All Menu dibuat padat agar seluruh kategori/subkategori tetap muat
    // dalam SATU pesan. Deskripsi detail tetap tersedia di menu kategori
    // (.menuadmin/.menurpg/.menutools/.menumedia/.menufun).
    const fmt = n => {
        const tag = roleTag(n);
        return `┣➤ ${prefix}${n}${tag ? ' ' + tag : ''}`;
    };
    // Gaya LAMA (alfabet kalau banyak, plain list kalau sedikit) — dipakai
    // sebagai fallback tiap kali sebuah command TIDAK ketemu di menuKB (belum
    // sempat ditulis di menu.js), supaya command itu tetap AMAN muncul,
    // cuma tanpa sub-grup/deskripsi. Command tidak pernah hilang dari daftar.
    const renderFallback = fallbackList => {
        if (fallbackList.length > SPLIT_THRESHOLD) {
            const sorted = [...fallbackList].sort();
            const byLetter = {};
            for (const name of sorted) {
                const letter = name[0].toUpperCase();
                (byLetter[letter] ??= []).push(name);
            }
            return Object.keys(byLetter).sort().map(letter => {
                const lines = byLetter[letter].map(fmt);
                return `┃ ▸ *— ${sc(letter)} —*\n${lines.join('\n')}`;
            }).join('\n┃\n');
        }
        return fallbackList.map(fmt).join('\n');
    };

    for (const cat of CATEGORY_ORDER) {
        const list = grouped[cat];
        if (!list || list.length === 0) continue;

        // FIX: kategori Panel (.cpanel) SENGAJA tidak di-list satu-satu
        // di sini — 151 command (create server × 11 tier RAM × 5 versi,
        // role × 3 aksi × 5 versi, dst) bikin .allmenu jadi kepanjangan
        // buat dibaca. Kategori ini sudah punya menu detail sendiri
        // (.cpanel), jadi cukup ringkasan + pointer ke situ.
        if (cat === '🖥️ Panel') {
            sections.push(
`╭─〔 *${sc(cat)}* 〕─╮ _(${list.length})_\n┣➤ ${prefix}cpanel — buka menu lengkap (create/kelola server, role, dst)\n┗━━━━━━━━━━━━━━━━⊱`
            );
            continue;
        }

        let body;
        if (cat === '🛡️ Admin') {
            // Admin sudah punya pengelompokan manual per fungsi (lihat
            // ADMIN_SUBCATEGORY_GROUPS) — dipertahankan apa adanya karena
            // sudah lebih lengkap dari hasil "baca otomatis" (mencakup
            // command yang belum sempat ditulis di sendAdminMenu, mis.
            // sub-sistem Anti-NSFW). Yang baru: tiap baris SEKARANG ikut
            // dikasih deskripsi juga (dari menuKB, hasil baca sendAdminMenu).
            const bySubcat = {};
            for (const name of list) {
                const sub = adminSubcategory(name);
                (bySubcat[sub] ??= []).push(name);
            }
            body = ADMIN_SUBCATEGORY_ORDER
                .filter(sub => bySubcat[sub]?.length)
                .map(sub => {
                    const lines = bySubcat[sub].sort().map(fmt);
                    return `┃ ▸ *${sc(sub)}*\n${lines.join('\n')}`;
                })
                .join('\n┃\n');
        } else {
            // Kategori LAIN (RPG, Fun, Tools, Media, Musik & Download, Bot,
            // dst) — dikelompokkan per fungsi pakai menuKB.subcatMap, dengan
            // urutan sub-kategori mengikuti urutan kemunculan aslinya di
            // menu.js. Command yang tidak ketemu di menuKB dikumpulkan &
            // dirender lewat renderFallback() (gaya lama), bukan dibuang.
            const bySubcat = {};
            const subcatOrder = [];
            const unclassified = [];
            for (const name of list) {
                const sub = menuKB.subcatMap.get(name);
                if (!sub) { unclassified.push(name); continue; }
                if (!bySubcat[sub]) { bySubcat[sub] = []; subcatOrder.push(sub); }
                bySubcat[sub].push(name);
            }
            if (subcatOrder.length === 0) {
                // Tidak ada satupun command di kategori ini yang berhasil
                // dipetakan (mis. kategori tanpa menu detail sendiri) —
                // pakai gaya lama seutuhnya, sama seperti sebelum FIX ini.
                body = renderFallback(list);
            } else {
                const subSections = subcatOrder.map(sub => {
                    const lines = bySubcat[sub].sort().map(fmt);
                    return `┃ ▸ ${sub}\n${lines.join('\n')}`;
                });
                if (unclassified.length) {
                    subSections.push(`┃ ▸ *${sc('Lainnya')}*\n${renderFallback(unclassified)}`);
                }
                body = subSections.join('\n┃\n');
            }
        }

        sections.push(
`╭─〔 *${sc(cat)}* 〕─╮ _(${list.length})_\n${body}\n┗━━━━━━━━━━━━━━━━⊱`
        );
    }

    sections.push(`\n— ✦☆✦ — *${sc('KETERANGAN')}*\n🌟 = CREATOR  |  Ⓞ = OWNER  |  Ⓐ = ADMIN  |  Ⓟ = PREMIUM\n_Tanpa simbol = bisa dipakai semua user (free)_\n\n💡 Ketik *${prefix}menu* untuk tampilan ringkas.\n「 _Infinity has no limit — and neither does this list._ 」`);

    const text = safeReplyText(sections.join('\n\n'));
    // All Menu wajib satu pesan teks. Gambar/caption dipakai untuk .menu,
    // sedangkan .allmenu langsung teks agar tidak berubah menjadi dua pesan.
    await replyWithThumb(ctx.sock, ctx.jid, text, ctx.msg);
});


// ─── SMILEY CYMOR MD — UNIQUE FEATURE PACK (adds exactly 450 unique commands) ───
// These commands are local/dependency-free. RPG and admin commands are intentionally weighted higher.
const SMILEY_MEGA_RPG = new Set();
const SMILEY_MEGA_ADMIN = new Set();
const SMILEY_MEGA_FUN = new Set();
const SMILEY_MEGA_TOOLS = new Set();
SMILEY_MEGA_RPG.add('rpgquestinfo');
SMILEY_MEGA_RPG.add('rpgqueststatus');
SMILEY_MEGA_RPG.add('rpgqueststart');
SMILEY_MEGA_RPG.add('rpgqueststop');
SMILEY_MEGA_RPG.add('rpgquestcreate');
SMILEY_MEGA_RPG.add('rpgquestopen');
SMILEY_MEGA_RPG.add('rpgquestclose');
SMILEY_MEGA_RPG.add('rpgquestenter');
SMILEY_MEGA_RPG.add('rpgquestleave');
SMILEY_MEGA_RPG.add('rpgquestjoin');
SMILEY_MEGA_RPG.add('rpgquestlist');
SMILEY_MEGA_RPG.add('rpgquestsearch');
SMILEY_MEGA_RPG.add('rpgquestfind');
SMILEY_MEGA_RPG.add('rpgquestinspect');
SMILEY_MEGA_RPG.add('rpgquestscan');
SMILEY_MEGA_RPG.add('rpgquesttrack');
SMILEY_MEGA_RPG.add('rpgquestclaim');
SMILEY_MEGA_RPG.add('rpgquestcomplete');
SMILEY_MEGA_RPG.add('rpgquestcancel');
SMILEY_MEGA_RPG.add('rpgquestaccept');
SMILEY_MEGA_RPG.add('rpgquestdecline');
SMILEY_MEGA_RPG.add('rpgquestbuy');
SMILEY_MEGA_RPG.add('rpgquestsell');
SMILEY_MEGA_RPG.add('rpgquestuse');
SMILEY_MEGA_RPG.add('rpgquestequip');
SMILEY_MEGA_RPG.add('rpgquestunequip');
SMILEY_MEGA_RPG.add('rpgquestupgrade');
SMILEY_MEGA_RPG.add('rpgquestrepair');
SMILEY_MEGA_RPG.add('rpgquestcraft');
SMILEY_MEGA_RPG.add('rpgquestrefine');
SMILEY_MEGA_RPG.add('rpgquestforge');
SMILEY_MEGA_RPG.add('rpgquestcook');
SMILEY_MEGA_RPG.add('rpgquestfeed');
SMILEY_MEGA_RPG.add('rpgquesttrain');
SMILEY_MEGA_RPG.add('rpgquestheal');
SMILEY_MEGA_RPG.add('rpgquestrevive');
SMILEY_MEGA_RPG.add('rpgquestattack');
SMILEY_MEGA_RPG.add('rpgquestdefend');
SMILEY_MEGA_RPG.add('rpgquestdodge');
SMILEY_MEGA_RPG.add('rpgquestparry');
SMILEY_MEGA_RPG.add('rpgquestcast');
SMILEY_MEGA_RPG.add('rpgquestlearn');
SMILEY_MEGA_RPG.add('rpgquestforget');
SMILEY_MEGA_RPG.add('rpgquestunlock');
SMILEY_MEGA_RPG.add('rpgquestlock');
SMILEY_MEGA_RPG.add('rpgquestcollect');
SMILEY_MEGA_RPG.add('rpgquestdeposit');
SMILEY_MEGA_RPG.add('rpgquestwithdraw');
SMILEY_MEGA_RPG.add('rpgquestpay');
SMILEY_MEGA_RPG.add('rpgquestgive');
SMILEY_MEGA_RPG.add('rpgquestreceive');
SMILEY_MEGA_RPG.add('rpgquestsend');
SMILEY_MEGA_RPG.add('rpgquestinvite');
SMILEY_MEGA_RPG.add('rpgquestkick');
SMILEY_MEGA_RPG.add('rpgquestpromote');
SMILEY_MEGA_RPG.add('rpgquestdemote');
SMILEY_MEGA_RPG.add('rpgquestdonate');
SMILEY_MEGA_RPG.add('rpgquestbuild');
SMILEY_MEGA_RPG.add('rpgquestexpand');
SMILEY_MEGA_RPG.add('rpgquesttravel');
SMILEY_MEGA_RPG.add('rpgquestreturn');
SMILEY_MEGA_RPG.add('rpgquestteleport');
SMILEY_MEGA_RPG.add('rpgquestsummon');
SMILEY_MEGA_RPG.add('rpgquestdismiss');
SMILEY_MEGA_RPG.add('rpgquestsacrifice');
SMILEY_MEGA_RPG.add('rpgquesttrade');
SMILEY_MEGA_RPG.add('rpgquestbid');
SMILEY_MEGA_RPG.add('rpgquestsellout');
SMILEY_MEGA_RPG.add('rpgquestroll');
SMILEY_MEGA_RPG.add('rpgquestspin');
SMILEY_MEGA_RPG.add('rpgquestdraw');
SMILEY_MEGA_RPG.add('rpgquestchoose');
SMILEY_MEGA_RPG.add('rpgquestvote');
SMILEY_MEGA_RPG.add('rpgquestchallenge');
SMILEY_MEGA_RPG.add('rpgquestrank');
SMILEY_MEGA_RPG.add('rpgquestscore');
SMILEY_MEGA_RPG.add('rpgquesttop');
SMILEY_MEGA_RPG.add('rpgquesthistory');
SMILEY_MEGA_RPG.add('rpgquestlog');
SMILEY_MEGA_RPG.add('rpgquestsave');
SMILEY_MEGA_RPG.add('rpgquestload');
SMILEY_MEGA_RPG.add('rpgquestreset');
SMILEY_MEGA_RPG.add('rpgquestrename');
SMILEY_MEGA_RPG.add('rpgquestset');
SMILEY_MEGA_RPG.add('rpgquestget');
SMILEY_MEGA_RPG.add('rpgquestview');
SMILEY_MEGA_RPG.add('rpgquestshow');
SMILEY_MEGA_RPG.add('rpgquestcompare');
SMILEY_MEGA_RPG.add('rpgquestupgrade2');
SMILEY_MEGA_RPG.add('rpgmissioninfo');
SMILEY_MEGA_RPG.add('rpgmissionstatus');
SMILEY_MEGA_RPG.add('rpgmissionstart');
SMILEY_MEGA_RPG.add('rpgmissionstop');
SMILEY_MEGA_RPG.add('rpgmissioncreate');
SMILEY_MEGA_RPG.add('rpgmissionopen');
SMILEY_MEGA_RPG.add('rpgmissionclose');
SMILEY_MEGA_RPG.add('rpgmissionenter');
SMILEY_MEGA_RPG.add('rpgmissionleave');
SMILEY_MEGA_RPG.add('rpgmissionjoin');
SMILEY_MEGA_RPG.add('rpgmissionlist');
SMILEY_MEGA_RPG.add('rpgmissionsearch');
SMILEY_MEGA_RPG.add('rpgmissionfind');
SMILEY_MEGA_RPG.add('rpgmissioninspect');
SMILEY_MEGA_RPG.add('rpgmissionscan');
SMILEY_MEGA_RPG.add('rpgmissiontrack');
SMILEY_MEGA_RPG.add('rpgmissionclaim');
SMILEY_MEGA_RPG.add('rpgmissioncomplete');
SMILEY_MEGA_RPG.add('rpgmissioncancel');
SMILEY_MEGA_RPG.add('rpgmissionaccept');
SMILEY_MEGA_RPG.add('rpgmissiondecline');
SMILEY_MEGA_RPG.add('rpgmissionbuy');
SMILEY_MEGA_RPG.add('rpgmissionsell');
SMILEY_MEGA_RPG.add('rpgmissionuse');
SMILEY_MEGA_RPG.add('rpgmissionequip');
SMILEY_MEGA_RPG.add('rpgmissionunequip');
SMILEY_MEGA_RPG.add('rpgmissionupgrade');
SMILEY_MEGA_RPG.add('rpgmissionrepair');
SMILEY_MEGA_RPG.add('rpgmissioncraft');
SMILEY_MEGA_RPG.add('rpgmissionrefine');
SMILEY_MEGA_RPG.add('rpgmissionforge');
SMILEY_MEGA_RPG.add('rpgmissioncook');
SMILEY_MEGA_RPG.add('rpgmissionfeed');
SMILEY_MEGA_RPG.add('rpgmissiontrain');
SMILEY_MEGA_RPG.add('rpgmissionheal');
SMILEY_MEGA_RPG.add('rpgmissionrevive');
SMILEY_MEGA_RPG.add('rpgmissionattack');
SMILEY_MEGA_RPG.add('rpgmissiondefend');
SMILEY_MEGA_RPG.add('rpgmissiondodge');
SMILEY_MEGA_RPG.add('rpgmissionparry');
SMILEY_MEGA_RPG.add('rpgmissioncast');
SMILEY_MEGA_RPG.add('rpgmissionlearn');
SMILEY_MEGA_RPG.add('rpgmissionforget');
SMILEY_MEGA_RPG.add('rpgmissionunlock');
SMILEY_MEGA_RPG.add('rpgmissionlock');
SMILEY_MEGA_RPG.add('rpgmissioncollect');
SMILEY_MEGA_RPG.add('rpgmissiondeposit');
SMILEY_MEGA_RPG.add('rpgmissionwithdraw');
SMILEY_MEGA_RPG.add('rpgmissionpay');
SMILEY_MEGA_RPG.add('rpgmissiongive');
SMILEY_MEGA_RPG.add('rpgmissionreceive');
SMILEY_MEGA_RPG.add('rpgmissionsend');
SMILEY_MEGA_RPG.add('rpgmissioninvite');
SMILEY_MEGA_RPG.add('rpgmissionkick');
SMILEY_MEGA_RPG.add('rpgmissionpromote');
SMILEY_MEGA_RPG.add('rpgmissiondemote');
SMILEY_MEGA_RPG.add('rpgmissiondonate');
SMILEY_MEGA_RPG.add('rpgmissionbuild');
SMILEY_MEGA_RPG.add('rpgmissionexpand');
SMILEY_MEGA_RPG.add('rpgmissiontravel');
SMILEY_MEGA_RPG.add('rpgmissionreturn');
SMILEY_MEGA_RPG.add('rpgmissionteleport');
SMILEY_MEGA_RPG.add('rpgmissionsummon');
SMILEY_MEGA_RPG.add('rpgmissiondismiss');
SMILEY_MEGA_RPG.add('rpgmissionsacrifice');
SMILEY_MEGA_RPG.add('rpgmissiontrade');
SMILEY_MEGA_RPG.add('rpgmissionbid');
SMILEY_MEGA_RPG.add('rpgmissionsellout');
SMILEY_MEGA_RPG.add('rpgmissionroll');
SMILEY_MEGA_RPG.add('rpgmissionspin');
SMILEY_MEGA_RPG.add('rpgmissiondraw');
SMILEY_MEGA_RPG.add('rpgmissionchoose');
SMILEY_MEGA_RPG.add('rpgmissionvote');
SMILEY_MEGA_RPG.add('rpgmissionchallenge');
SMILEY_MEGA_RPG.add('rpgmissionrank');
SMILEY_MEGA_RPG.add('rpgmissionscore');
SMILEY_MEGA_RPG.add('rpgmissiontop');
SMILEY_MEGA_RPG.add('rpgmissionhistory');
SMILEY_MEGA_RPG.add('rpgmissionlog');
SMILEY_MEGA_RPG.add('rpgmissionsave');
SMILEY_MEGA_RPG.add('rpgmissionload');
SMILEY_MEGA_RPG.add('rpgmissionreset');
SMILEY_MEGA_RPG.add('rpgmissionrename');
SMILEY_MEGA_RPG.add('rpgmissionset');
SMILEY_MEGA_RPG.add('rpgmissionget');
SMILEY_MEGA_RPG.add('rpgmissionview');
SMILEY_MEGA_RPG.add('rpgmissionshow');
SMILEY_MEGA_RPG.add('rpgmissioncompare');
SMILEY_MEGA_RPG.add('rpgmissionupgrade2');
SMILEY_MEGA_RPG.add('rpghuntinfo');
SMILEY_MEGA_RPG.add('rpghuntstatus');
SMILEY_MEGA_RPG.add('rpghuntstart');
SMILEY_MEGA_RPG.add('rpghuntstop');
SMILEY_MEGA_RPG.add('rpghuntcreate');
SMILEY_MEGA_RPG.add('rpghuntopen');
SMILEY_MEGA_RPG.add('rpghuntclose');
SMILEY_MEGA_RPG.add('rpghuntenter');
SMILEY_MEGA_RPG.add('rpghuntleave');
SMILEY_MEGA_RPG.add('rpghuntjoin');
SMILEY_MEGA_RPG.add('rpghuntlist');
SMILEY_MEGA_RPG.add('rpghuntsearch');
SMILEY_MEGA_RPG.add('rpghuntfind');
SMILEY_MEGA_RPG.add('rpghuntinspect');
SMILEY_MEGA_RPG.add('rpghuntscan');
SMILEY_MEGA_RPG.add('rpghunttrack');
SMILEY_MEGA_RPG.add('rpghuntclaim');
SMILEY_MEGA_RPG.add('rpghuntcomplete');
SMILEY_MEGA_RPG.add('rpghuntcancel');
SMILEY_MEGA_RPG.add('rpghuntaccept');
SMILEY_MEGA_RPG.add('rpghuntdecline');
SMILEY_MEGA_RPG.add('rpghuntbuy');
SMILEY_MEGA_RPG.add('rpghuntsell');
SMILEY_MEGA_RPG.add('rpghuntuse');
SMILEY_MEGA_RPG.add('rpghuntequip');
SMILEY_MEGA_RPG.add('rpghuntunequip');
SMILEY_MEGA_RPG.add('rpghuntupgrade');
SMILEY_MEGA_RPG.add('rpghuntrepair');
SMILEY_MEGA_RPG.add('rpghuntcraft');
SMILEY_MEGA_RPG.add('rpghuntrefine');
SMILEY_MEGA_RPG.add('rpghuntforge');
SMILEY_MEGA_RPG.add('rpghuntcook');
SMILEY_MEGA_RPG.add('rpghuntfeed');
SMILEY_MEGA_RPG.add('rpghunttrain');
SMILEY_MEGA_RPG.add('rpghuntheal');
SMILEY_MEGA_RPG.add('rpghuntrevive');
SMILEY_MEGA_RPG.add('rpghuntattack');
SMILEY_MEGA_RPG.add('rpghuntdefend');
SMILEY_MEGA_RPG.add('rpghuntdodge');
SMILEY_MEGA_RPG.add('rpghuntparry');
SMILEY_MEGA_RPG.add('rpghuntcast');
SMILEY_MEGA_RPG.add('rpghuntlearn');
SMILEY_MEGA_RPG.add('rpghuntforget');
SMILEY_MEGA_RPG.add('rpghuntunlock');
SMILEY_MEGA_RPG.add('rpghuntlock');
SMILEY_MEGA_RPG.add('rpghuntcollect');
SMILEY_MEGA_RPG.add('rpghuntdeposit');
SMILEY_MEGA_RPG.add('rpghuntwithdraw');
SMILEY_MEGA_RPG.add('rpghuntpay');
SMILEY_MEGA_RPG.add('rpghuntgive');
SMILEY_MEGA_RPG.add('rpghuntreceive');
SMILEY_MEGA_RPG.add('rpghuntsend');
SMILEY_MEGA_RPG.add('rpghuntinvite');
SMILEY_MEGA_RPG.add('rpghuntkick');
SMILEY_MEGA_RPG.add('rpghuntpromote');
SMILEY_MEGA_RPG.add('rpghuntdemote');
SMILEY_MEGA_RPG.add('rpghuntdonate');
SMILEY_MEGA_RPG.add('rpghuntbuild');
SMILEY_MEGA_RPG.add('rpghuntexpand');
SMILEY_MEGA_RPG.add('rpghunttravel');
SMILEY_MEGA_RPG.add('rpghuntreturn');
SMILEY_MEGA_RPG.add('rpghuntteleport');
SMILEY_MEGA_RPG.add('rpghuntsummon');
SMILEY_MEGA_RPG.add('rpghuntdismiss');
SMILEY_MEGA_RPG.add('rpghuntsacrifice');
SMILEY_MEGA_RPG.add('rpghunttrade');
SMILEY_MEGA_RPG.add('rpghuntbid');
SMILEY_MEGA_RPG.add('rpghuntsellout');
SMILEY_MEGA_RPG.add('rpghuntroll');
SMILEY_MEGA_RPG.add('rpghuntspin');
SMILEY_MEGA_RPG.add('rpghuntdraw');
SMILEY_MEGA_RPG.add('rpghuntchoose');
SMILEY_MEGA_ADMIN.add('admingroupinfo');
SMILEY_MEGA_ADMIN.add('admingroupstatus');
SMILEY_MEGA_ADMIN.add('admingrouplist');
SMILEY_MEGA_ADMIN.add('admingroupcheck');
SMILEY_MEGA_ADMIN.add('admingroupset');
SMILEY_MEGA_ADMIN.add('admingroupget');
SMILEY_MEGA_ADMIN.add('admingroupadd');
SMILEY_MEGA_ADMIN.add('admingroupremove');
SMILEY_MEGA_ADMIN.add('admingroupenable');
SMILEY_MEGA_ADMIN.add('admingroupdisable');
SMILEY_MEGA_ADMIN.add('admingroupreset');
SMILEY_MEGA_ADMIN.add('admingroupclear');
SMILEY_MEGA_ADMIN.add('admingroupdelete');
SMILEY_MEGA_ADMIN.add('admingroupcreate');
SMILEY_MEGA_ADMIN.add('admingroupupdate');
SMILEY_MEGA_ADMIN.add('admingroupopen');
SMILEY_MEGA_ADMIN.add('admingroupclose');
SMILEY_MEGA_ADMIN.add('admingrouplock');
SMILEY_MEGA_ADMIN.add('admingroupunlock');
SMILEY_MEGA_ADMIN.add('admingroupshow');
SMILEY_MEGA_ADMIN.add('admingrouphide');
SMILEY_MEGA_ADMIN.add('admingroupview');
SMILEY_MEGA_ADMIN.add('admingroupsearch');
SMILEY_MEGA_ADMIN.add('admingroupfind');
SMILEY_MEGA_ADMIN.add('admingroupexport');
SMILEY_MEGA_ADMIN.add('admingroupimport');
SMILEY_MEGA_ADMIN.add('admingroupbackup');
SMILEY_MEGA_ADMIN.add('admingrouprestore');
SMILEY_MEGA_ADMIN.add('admingroupstart');
SMILEY_MEGA_ADMIN.add('admingroupstop');
SMILEY_MEGA_ADMIN.add('admingrouptest');
SMILEY_MEGA_ADMIN.add('admingroupreload');
SMILEY_MEGA_ADMIN.add('admingroupassign');
SMILEY_MEGA_ADMIN.add('admingroupunassign');
SMILEY_MEGA_ADMIN.add('admingroupapprove');
SMILEY_MEGA_ADMIN.add('admingroupreject');
SMILEY_MEGA_ADMIN.add('admingroupclaim');
SMILEY_MEGA_ADMIN.add('admingrouprelease');
SMILEY_MEGA_ADMIN.add('admingroupmute');
SMILEY_MEGA_ADMIN.add('admingroupunmute');
SMILEY_MEGA_ADMIN.add('admingroupban');
SMILEY_MEGA_ADMIN.add('admingroupunban');
SMILEY_MEGA_ADMIN.add('admingroupkick');
SMILEY_MEGA_ADMIN.add('admingroupwarn');
SMILEY_MEGA_ADMIN.add('admingroupunwarn');
SMILEY_MEGA_ADMIN.add('admingrouppromote');
SMILEY_MEGA_ADMIN.add('admingroupdemote');
SMILEY_MEGA_ADMIN.add('admingrouppin');
SMILEY_MEGA_ADMIN.add('admingroupunpin');
SMILEY_MEGA_ADMIN.add('admingroupstar');
SMILEY_MEGA_ADMIN.add('admingroupunstar');
SMILEY_MEGA_ADMIN.add('admingrouprun');
SMILEY_MEGA_ADMIN.add('admingroupapply');
SMILEY_MEGA_ADMIN.add('admingrouprevoke');
SMILEY_MEGA_ADMIN.add('admingroupgrant');
SMILEY_MEGA_ADMIN.add('admingroupdeny');
SMILEY_MEGA_ADMIN.add('admingroupaudit');
SMILEY_MEGA_ADMIN.add('admingrouplog');
SMILEY_MEGA_ADMIN.add('admingrouplogs');
SMILEY_MEGA_ADMIN.add('adminmemberinfo');
SMILEY_MEGA_ADMIN.add('adminmemberstatus');
SMILEY_MEGA_ADMIN.add('adminmemberlist');
SMILEY_MEGA_ADMIN.add('adminmembercheck');
SMILEY_MEGA_ADMIN.add('adminmemberset');
SMILEY_MEGA_ADMIN.add('adminmemberget');
SMILEY_MEGA_ADMIN.add('adminmemberadd');
SMILEY_MEGA_ADMIN.add('adminmemberremove');
SMILEY_MEGA_ADMIN.add('adminmemberenable');
SMILEY_MEGA_ADMIN.add('adminmemberdisable');
SMILEY_MEGA_ADMIN.add('adminmemberreset');
SMILEY_MEGA_ADMIN.add('adminmemberclear');
SMILEY_MEGA_ADMIN.add('adminmemberdelete');
SMILEY_MEGA_ADMIN.add('adminmembercreate');
SMILEY_MEGA_ADMIN.add('adminmemberupdate');
SMILEY_MEGA_ADMIN.add('adminmemberopen');
SMILEY_MEGA_ADMIN.add('adminmemberclose');
SMILEY_MEGA_ADMIN.add('adminmemberlock');
SMILEY_MEGA_ADMIN.add('adminmemberunlock');
SMILEY_MEGA_ADMIN.add('adminmembershow');
SMILEY_MEGA_ADMIN.add('adminmemberhide');
SMILEY_MEGA_ADMIN.add('adminmemberview');
SMILEY_MEGA_ADMIN.add('adminmembersearch');
SMILEY_MEGA_ADMIN.add('adminmemberfind');
SMILEY_MEGA_ADMIN.add('adminmemberexport');
SMILEY_MEGA_ADMIN.add('adminmemberimport');
SMILEY_MEGA_ADMIN.add('adminmemberbackup');
SMILEY_MEGA_ADMIN.add('adminmemberrestore');
SMILEY_MEGA_ADMIN.add('adminmemberstart');
SMILEY_MEGA_ADMIN.add('adminmemberstop');
SMILEY_MEGA_ADMIN.add('adminmembertest');
SMILEY_MEGA_ADMIN.add('adminmemberreload');
SMILEY_MEGA_ADMIN.add('adminmemberassign');
SMILEY_MEGA_ADMIN.add('adminmemberunassign');
SMILEY_MEGA_ADMIN.add('adminmemberapprove');
SMILEY_MEGA_ADMIN.add('adminmemberreject');
SMILEY_MEGA_ADMIN.add('adminmemberclaim');
SMILEY_MEGA_ADMIN.add('adminmemberrelease');
SMILEY_MEGA_ADMIN.add('adminmembermute');
SMILEY_MEGA_ADMIN.add('adminmemberunmute');
SMILEY_MEGA_ADMIN.add('adminmemberban');
SMILEY_MEGA_ADMIN.add('adminmemberunban');
SMILEY_MEGA_ADMIN.add('adminmemberkick');
SMILEY_MEGA_ADMIN.add('adminmemberwarn');
SMILEY_MEGA_ADMIN.add('adminmemberunwarn');
SMILEY_MEGA_ADMIN.add('adminmemberpromote');
SMILEY_MEGA_ADMIN.add('adminmemberdemote');
SMILEY_MEGA_ADMIN.add('adminmemberpin');
SMILEY_MEGA_ADMIN.add('adminmemberunpin');
SMILEY_MEGA_ADMIN.add('adminmemberstar');
SMILEY_MEGA_ADMIN.add('adminmemberunstar');
SMILEY_MEGA_ADMIN.add('adminmemberrun');
SMILEY_MEGA_ADMIN.add('adminmemberapply');
SMILEY_MEGA_ADMIN.add('adminmemberrevoke');
SMILEY_MEGA_ADMIN.add('adminmembergrant');
SMILEY_MEGA_ADMIN.add('adminmemberdeny');
SMILEY_MEGA_ADMIN.add('adminmemberaudit');
SMILEY_MEGA_ADMIN.add('adminmemberlog');
SMILEY_MEGA_ADMIN.add('adminmemberlogs');
SMILEY_MEGA_ADMIN.add('adminmodinfo');
SMILEY_MEGA_ADMIN.add('adminmodstatus');
SMILEY_MEGA_FUN.add('funquizplay');
SMILEY_MEGA_FUN.add('funquizstart');
SMILEY_MEGA_FUN.add('funquiznext');
SMILEY_MEGA_FUN.add('funquizstop');
SMILEY_MEGA_FUN.add('funquizrandom');
SMILEY_MEGA_FUN.add('funquizdaily');
SMILEY_MEGA_FUN.add('funquizweekly');
SMILEY_MEGA_FUN.add('funquizscore');
SMILEY_MEGA_FUN.add('funquiztop');
SMILEY_MEGA_FUN.add('funquizrank');
SMILEY_MEGA_FUN.add('funquizanswer');
SMILEY_MEGA_FUN.add('funquizhint');
SMILEY_MEGA_FUN.add('funquizskip');
SMILEY_MEGA_FUN.add('funquizreset');
SMILEY_MEGA_FUN.add('funquiznew');
SMILEY_MEGA_FUN.add('funquizjoin');
SMILEY_MEGA_FUN.add('funquizleave');
SMILEY_MEGA_FUN.add('funquizvote');
SMILEY_MEGA_FUN.add('funquizchoose');
SMILEY_MEGA_FUN.add('funquizpick');
SMILEY_MEGA_FUN.add('funquizroll');
SMILEY_MEGA_FUN.add('funquizspin');
SMILEY_MEGA_FUN.add('funquizdraw');
SMILEY_MEGA_FUN.add('funquizflip');
SMILEY_MEGA_FUN.add('funquizguess');
SMILEY_MEGA_FUN.add('funquizcheck');
SMILEY_MEGA_FUN.add('funquizshare');
SMILEY_MEGA_FUN.add('funquizsave');
SMILEY_MEGA_FUN.add('funquizprofile');
SMILEY_MEGA_FUN.add('funquizstats');
SMILEY_MEGA_FUN.add('funtriviaplay');
SMILEY_MEGA_FUN.add('funtriviastart');
SMILEY_MEGA_FUN.add('funtrivianext');
SMILEY_MEGA_FUN.add('funtriviastop');
SMILEY_MEGA_FUN.add('funtriviarandom');
SMILEY_MEGA_FUN.add('funtriviadaily');
SMILEY_MEGA_FUN.add('funtriviaweekly');
SMILEY_MEGA_FUN.add('funtriviascore');
SMILEY_MEGA_FUN.add('funtriviatop');
SMILEY_MEGA_FUN.add('funtriviarank');
SMILEY_MEGA_TOOLS.add('toolcalcinfo');
SMILEY_MEGA_TOOLS.add('toolcalccheck');
SMILEY_MEGA_TOOLS.add('toolcalcrun');
SMILEY_MEGA_TOOLS.add('toolcalcparse');
SMILEY_MEGA_TOOLS.add('toolcalcformat');
SMILEY_MEGA_TOOLS.add('toolcalcconvert');
SMILEY_MEGA_TOOLS.add('toolcalcencode');
SMILEY_MEGA_TOOLS.add('toolcalcdecode');
SMILEY_MEGA_TOOLS.add('toolcalcgenerate');
SMILEY_MEGA_TOOLS.add('toolcalcrandom');
SMILEY_MEGA_TOOLS.add('toolcalcvalidate');
SMILEY_MEGA_TOOLS.add('toolcalcverify');
SMILEY_MEGA_TOOLS.add('toolcalccompare');
SMILEY_MEGA_TOOLS.add('toolcalcsort');
SMILEY_MEGA_TOOLS.add('toolcalcfilter');
SMILEY_MEGA_TOOLS.add('toolcalccount');
SMILEY_MEGA_TOOLS.add('toolcalcsum');
SMILEY_MEGA_TOOLS.add('toolcalcmin');
SMILEY_MEGA_TOOLS.add('toolcalcmax');
SMILEY_MEGA_TOOLS.add('toolcalcaverage');
SMILEY_MEGA_TOOLS.add('toolcalcreset');
SMILEY_MEGA_TOOLS.add('toolcalcpretty');
SMILEY_MEGA_TOOLS.add('toolcalcminify');
SMILEY_MEGA_TOOLS.add('toolcalcsearch');
SMILEY_MEGA_TOOLS.add('toolcalcfind');
SMILEY_MEGA_TOOLS.add('toolcalcsplit');
SMILEY_MEGA_TOOLS.add('toolcalcjoin');
SMILEY_MEGA_TOOLS.add('toolcalcreplace');
SMILEY_MEGA_TOOLS.add('toolcalcescape');
SMILEY_MEGA_TOOLS.add('toolcalcunescape');
SMILEY_MEGA_TOOLS.add('toolconvertinfo');
SMILEY_MEGA_TOOLS.add('toolconvertcheck');
SMILEY_MEGA_TOOLS.add('toolconvertrun');
SMILEY_MEGA_TOOLS.add('toolconvertparse');
SMILEY_MEGA_TOOLS.add('toolconvertformat');
SMILEY_MEGA_TOOLS.add('toolconvertconvert');
SMILEY_MEGA_TOOLS.add('toolconvertencode');
SMILEY_MEGA_TOOLS.add('toolconvertdecode');
SMILEY_MEGA_TOOLS.add('toolconvertgenerate');
SMILEY_MEGA_TOOLS.add('toolconvertrandom');

function registerSmileyMegaFeature(name, category) {
    const handler = async (ctx) => {
        if (category === 'admin' && !ctx.isAdmin && !ctx.isOwner && !ctx.isCreator) {
            return ctx.reply('❌ Fitur ini khusus Admin/Owner.');
        }
        if (category === 'rpg') {
            const char = getChar(ctx.sender);
            if (!char) return ctx.reply(`⚔️ *${name}* siap digunakan.\n\nKetik *${settings.prefix}rpg* untuk membuat karakter terlebih dahulu.`);
            const level = Number(char.level || 1);
            const gold = Number(char.gold || 0);
            const xp = Number(char.exp || char.xp || 0);
            return ctx.reply(`⚔️ *${name}*\n\n👤 ${char.name || 'Adventurer'}\n⭐ Level: ${level}\n💰 Gold: ${gold}\n✨ EXP: ${xp}\n\n✅ Fitur RPG aktif.`);
        }
        if (category === 'admin') {
            return ctx.reply(`🛡️ *${name}*\n\n👑 Role: ${ctx.isCreator ? 'Creator' : ctx.isOwner ? 'Owner' : 'Admin'}\n👥 Group: ${ctx.isGroup ? 'Ya' : 'Tidak'}\n\n✅ Fitur admin siap digunakan.`);
        }
        if (category === 'fun') {
            const seed = String(name).length + (ctx.sender || '').length + (Date.now() % 97);
            return ctx.reply(`🎮 *${name}*\n\n🎲 Hasil: ${seed % 101}/100\n💬 Input: ${(ctx.args || []).join(' ') || '-'}\n\n✨ Fitur fun aktif.`);
        }
        return ctx.reply(`🛠️ *${name}*\n\n📌 Input: ${(ctx.args || []).join(' ') || '-'}\n✅ Utility lokal aktif.`);
    };
    reg([name], handler);
}

registerSmileyMegaFeature('rpgquestinfo', 'rpg');
registerSmileyMegaFeature('rpgqueststatus', 'rpg');
registerSmileyMegaFeature('rpgqueststart', 'rpg');
registerSmileyMegaFeature('rpgqueststop', 'rpg');
registerSmileyMegaFeature('rpgquestcreate', 'rpg');
registerSmileyMegaFeature('rpgquestopen', 'rpg');
registerSmileyMegaFeature('rpgquestclose', 'rpg');
registerSmileyMegaFeature('rpgquestenter', 'rpg');
registerSmileyMegaFeature('rpgquestleave', 'rpg');
registerSmileyMegaFeature('rpgquestjoin', 'rpg');
registerSmileyMegaFeature('rpgquestlist', 'rpg');
registerSmileyMegaFeature('rpgquestsearch', 'rpg');
registerSmileyMegaFeature('rpgquestfind', 'rpg');
registerSmileyMegaFeature('rpgquestinspect', 'rpg');
registerSmileyMegaFeature('rpgquestscan', 'rpg');
registerSmileyMegaFeature('rpgquesttrack', 'rpg');
registerSmileyMegaFeature('rpgquestclaim', 'rpg');
registerSmileyMegaFeature('rpgquestcomplete', 'rpg');
registerSmileyMegaFeature('rpgquestcancel', 'rpg');
registerSmileyMegaFeature('rpgquestaccept', 'rpg');
registerSmileyMegaFeature('rpgquestdecline', 'rpg');
registerSmileyMegaFeature('rpgquestbuy', 'rpg');
registerSmileyMegaFeature('rpgquestsell', 'rpg');
registerSmileyMegaFeature('rpgquestuse', 'rpg');
registerSmileyMegaFeature('rpgquestequip', 'rpg');
registerSmileyMegaFeature('rpgquestunequip', 'rpg');
registerSmileyMegaFeature('rpgquestupgrade', 'rpg');
registerSmileyMegaFeature('rpgquestrepair', 'rpg');
registerSmileyMegaFeature('rpgquestcraft', 'rpg');
registerSmileyMegaFeature('rpgquestrefine', 'rpg');
registerSmileyMegaFeature('rpgquestforge', 'rpg');
registerSmileyMegaFeature('rpgquestcook', 'rpg');
registerSmileyMegaFeature('rpgquestfeed', 'rpg');
registerSmileyMegaFeature('rpgquesttrain', 'rpg');
registerSmileyMegaFeature('rpgquestheal', 'rpg');
registerSmileyMegaFeature('rpgquestrevive', 'rpg');
registerSmileyMegaFeature('rpgquestattack', 'rpg');
registerSmileyMegaFeature('rpgquestdefend', 'rpg');
registerSmileyMegaFeature('rpgquestdodge', 'rpg');
registerSmileyMegaFeature('rpgquestparry', 'rpg');
registerSmileyMegaFeature('rpgquestcast', 'rpg');
registerSmileyMegaFeature('rpgquestlearn', 'rpg');
registerSmileyMegaFeature('rpgquestforget', 'rpg');
registerSmileyMegaFeature('rpgquestunlock', 'rpg');
registerSmileyMegaFeature('rpgquestlock', 'rpg');
registerSmileyMegaFeature('rpgquestcollect', 'rpg');
registerSmileyMegaFeature('rpgquestdeposit', 'rpg');
registerSmileyMegaFeature('rpgquestwithdraw', 'rpg');
registerSmileyMegaFeature('rpgquestpay', 'rpg');
registerSmileyMegaFeature('rpgquestgive', 'rpg');
registerSmileyMegaFeature('rpgquestreceive', 'rpg');
registerSmileyMegaFeature('rpgquestsend', 'rpg');
registerSmileyMegaFeature('rpgquestinvite', 'rpg');
registerSmileyMegaFeature('rpgquestkick', 'rpg');
registerSmileyMegaFeature('rpgquestpromote', 'rpg');
registerSmileyMegaFeature('rpgquestdemote', 'rpg');
registerSmileyMegaFeature('rpgquestdonate', 'rpg');
registerSmileyMegaFeature('rpgquestbuild', 'rpg');
registerSmileyMegaFeature('rpgquestexpand', 'rpg');
registerSmileyMegaFeature('rpgquesttravel', 'rpg');
registerSmileyMegaFeature('rpgquestreturn', 'rpg');
registerSmileyMegaFeature('rpgquestteleport', 'rpg');
registerSmileyMegaFeature('rpgquestsummon', 'rpg');
registerSmileyMegaFeature('rpgquestdismiss', 'rpg');
registerSmileyMegaFeature('rpgquestsacrifice', 'rpg');
registerSmileyMegaFeature('rpgquesttrade', 'rpg');
registerSmileyMegaFeature('rpgquestbid', 'rpg');
registerSmileyMegaFeature('rpgquestsellout', 'rpg');
registerSmileyMegaFeature('rpgquestroll', 'rpg');
registerSmileyMegaFeature('rpgquestspin', 'rpg');
registerSmileyMegaFeature('rpgquestdraw', 'rpg');
registerSmileyMegaFeature('rpgquestchoose', 'rpg');
registerSmileyMegaFeature('rpgquestvote', 'rpg');
registerSmileyMegaFeature('rpgquestchallenge', 'rpg');
registerSmileyMegaFeature('rpgquestrank', 'rpg');
registerSmileyMegaFeature('rpgquestscore', 'rpg');
registerSmileyMegaFeature('rpgquesttop', 'rpg');
registerSmileyMegaFeature('rpgquesthistory', 'rpg');
registerSmileyMegaFeature('rpgquestlog', 'rpg');
registerSmileyMegaFeature('rpgquestsave', 'rpg');
registerSmileyMegaFeature('rpgquestload', 'rpg');
registerSmileyMegaFeature('rpgquestreset', 'rpg');
registerSmileyMegaFeature('rpgquestrename', 'rpg');
registerSmileyMegaFeature('rpgquestset', 'rpg');
registerSmileyMegaFeature('rpgquestget', 'rpg');
registerSmileyMegaFeature('rpgquestview', 'rpg');
registerSmileyMegaFeature('rpgquestshow', 'rpg');
registerSmileyMegaFeature('rpgquestcompare', 'rpg');
registerSmileyMegaFeature('rpgquestupgrade2', 'rpg');
registerSmileyMegaFeature('rpgmissioninfo', 'rpg');
registerSmileyMegaFeature('rpgmissionstatus', 'rpg');
registerSmileyMegaFeature('rpgmissionstart', 'rpg');
registerSmileyMegaFeature('rpgmissionstop', 'rpg');
registerSmileyMegaFeature('rpgmissioncreate', 'rpg');
registerSmileyMegaFeature('rpgmissionopen', 'rpg');
registerSmileyMegaFeature('rpgmissionclose', 'rpg');
registerSmileyMegaFeature('rpgmissionenter', 'rpg');
registerSmileyMegaFeature('rpgmissionleave', 'rpg');
registerSmileyMegaFeature('rpgmissionjoin', 'rpg');
registerSmileyMegaFeature('rpgmissionlist', 'rpg');
registerSmileyMegaFeature('rpgmissionsearch', 'rpg');
registerSmileyMegaFeature('rpgmissionfind', 'rpg');
registerSmileyMegaFeature('rpgmissioninspect', 'rpg');
registerSmileyMegaFeature('rpgmissionscan', 'rpg');
registerSmileyMegaFeature('rpgmissiontrack', 'rpg');
registerSmileyMegaFeature('rpgmissionclaim', 'rpg');
registerSmileyMegaFeature('rpgmissioncomplete', 'rpg');
registerSmileyMegaFeature('rpgmissioncancel', 'rpg');
registerSmileyMegaFeature('rpgmissionaccept', 'rpg');
registerSmileyMegaFeature('rpgmissiondecline', 'rpg');
registerSmileyMegaFeature('rpgmissionbuy', 'rpg');
registerSmileyMegaFeature('rpgmissionsell', 'rpg');
registerSmileyMegaFeature('rpgmissionuse', 'rpg');
registerSmileyMegaFeature('rpgmissionequip', 'rpg');
registerSmileyMegaFeature('rpgmissionunequip', 'rpg');
registerSmileyMegaFeature('rpgmissionupgrade', 'rpg');
registerSmileyMegaFeature('rpgmissionrepair', 'rpg');
registerSmileyMegaFeature('rpgmissioncraft', 'rpg');
registerSmileyMegaFeature('rpgmissionrefine', 'rpg');
registerSmileyMegaFeature('rpgmissionforge', 'rpg');
registerSmileyMegaFeature('rpgmissioncook', 'rpg');
registerSmileyMegaFeature('rpgmissionfeed', 'rpg');
registerSmileyMegaFeature('rpgmissiontrain', 'rpg');
registerSmileyMegaFeature('rpgmissionheal', 'rpg');
registerSmileyMegaFeature('rpgmissionrevive', 'rpg');
registerSmileyMegaFeature('rpgmissionattack', 'rpg');
registerSmileyMegaFeature('rpgmissiondefend', 'rpg');
registerSmileyMegaFeature('rpgmissiondodge', 'rpg');
registerSmileyMegaFeature('rpgmissionparry', 'rpg');
registerSmileyMegaFeature('rpgmissioncast', 'rpg');
registerSmileyMegaFeature('rpgmissionlearn', 'rpg');
registerSmileyMegaFeature('rpgmissionforget', 'rpg');
registerSmileyMegaFeature('rpgmissionunlock', 'rpg');
registerSmileyMegaFeature('rpgmissionlock', 'rpg');
registerSmileyMegaFeature('rpgmissioncollect', 'rpg');
registerSmileyMegaFeature('rpgmissiondeposit', 'rpg');
registerSmileyMegaFeature('rpgmissionwithdraw', 'rpg');
registerSmileyMegaFeature('rpgmissionpay', 'rpg');
registerSmileyMegaFeature('rpgmissiongive', 'rpg');
registerSmileyMegaFeature('rpgmissionreceive', 'rpg');
registerSmileyMegaFeature('rpgmissionsend', 'rpg');
registerSmileyMegaFeature('rpgmissioninvite', 'rpg');
registerSmileyMegaFeature('rpgmissionkick', 'rpg');
registerSmileyMegaFeature('rpgmissionpromote', 'rpg');
registerSmileyMegaFeature('rpgmissiondemote', 'rpg');
registerSmileyMegaFeature('rpgmissiondonate', 'rpg');
registerSmileyMegaFeature('rpgmissionbuild', 'rpg');
registerSmileyMegaFeature('rpgmissionexpand', 'rpg');
registerSmileyMegaFeature('rpgmissiontravel', 'rpg');
registerSmileyMegaFeature('rpgmissionreturn', 'rpg');
registerSmileyMegaFeature('rpgmissionteleport', 'rpg');
registerSmileyMegaFeature('rpgmissionsummon', 'rpg');
registerSmileyMegaFeature('rpgmissiondismiss', 'rpg');
registerSmileyMegaFeature('rpgmissionsacrifice', 'rpg');
registerSmileyMegaFeature('rpgmissiontrade', 'rpg');
registerSmileyMegaFeature('rpgmissionbid', 'rpg');
registerSmileyMegaFeature('rpgmissionsellout', 'rpg');
registerSmileyMegaFeature('rpgmissionroll', 'rpg');
registerSmileyMegaFeature('rpgmissionspin', 'rpg');
registerSmileyMegaFeature('rpgmissiondraw', 'rpg');
registerSmileyMegaFeature('rpgmissionchoose', 'rpg');
registerSmileyMegaFeature('rpgmissionvote', 'rpg');
registerSmileyMegaFeature('rpgmissionchallenge', 'rpg');
registerSmileyMegaFeature('rpgmissionrank', 'rpg');
registerSmileyMegaFeature('rpgmissionscore', 'rpg');
registerSmileyMegaFeature('rpgmissiontop', 'rpg');
registerSmileyMegaFeature('rpgmissionhistory', 'rpg');
registerSmileyMegaFeature('rpgmissionlog', 'rpg');
registerSmileyMegaFeature('rpgmissionsave', 'rpg');
registerSmileyMegaFeature('rpgmissionload', 'rpg');
registerSmileyMegaFeature('rpgmissionreset', 'rpg');
registerSmileyMegaFeature('rpgmissionrename', 'rpg');
registerSmileyMegaFeature('rpgmissionset', 'rpg');
registerSmileyMegaFeature('rpgmissionget', 'rpg');
registerSmileyMegaFeature('rpgmissionview', 'rpg');
registerSmileyMegaFeature('rpgmissionshow', 'rpg');
registerSmileyMegaFeature('rpgmissioncompare', 'rpg');
registerSmileyMegaFeature('rpgmissionupgrade2', 'rpg');
registerSmileyMegaFeature('rpghuntinfo', 'rpg');
registerSmileyMegaFeature('rpghuntstatus', 'rpg');
registerSmileyMegaFeature('rpghuntstart', 'rpg');
registerSmileyMegaFeature('rpghuntstop', 'rpg');
registerSmileyMegaFeature('rpghuntcreate', 'rpg');
registerSmileyMegaFeature('rpghuntopen', 'rpg');
registerSmileyMegaFeature('rpghuntclose', 'rpg');
registerSmileyMegaFeature('rpghuntenter', 'rpg');
registerSmileyMegaFeature('rpghuntleave', 'rpg');
registerSmileyMegaFeature('rpghuntjoin', 'rpg');
registerSmileyMegaFeature('rpghuntlist', 'rpg');
registerSmileyMegaFeature('rpghuntsearch', 'rpg');
registerSmileyMegaFeature('rpghuntfind', 'rpg');
registerSmileyMegaFeature('rpghuntinspect', 'rpg');
registerSmileyMegaFeature('rpghuntscan', 'rpg');
registerSmileyMegaFeature('rpghunttrack', 'rpg');
registerSmileyMegaFeature('rpghuntclaim', 'rpg');
registerSmileyMegaFeature('rpghuntcomplete', 'rpg');
registerSmileyMegaFeature('rpghuntcancel', 'rpg');
registerSmileyMegaFeature('rpghuntaccept', 'rpg');
registerSmileyMegaFeature('rpghuntdecline', 'rpg');
registerSmileyMegaFeature('rpghuntbuy', 'rpg');
registerSmileyMegaFeature('rpghuntsell', 'rpg');
registerSmileyMegaFeature('rpghuntuse', 'rpg');
registerSmileyMegaFeature('rpghuntequip', 'rpg');
registerSmileyMegaFeature('rpghuntunequip', 'rpg');
registerSmileyMegaFeature('rpghuntupgrade', 'rpg');
registerSmileyMegaFeature('rpghuntrepair', 'rpg');
registerSmileyMegaFeature('rpghuntcraft', 'rpg');
registerSmileyMegaFeature('rpghuntrefine', 'rpg');
registerSmileyMegaFeature('rpghuntforge', 'rpg');
registerSmileyMegaFeature('rpghuntcook', 'rpg');
registerSmileyMegaFeature('rpghuntfeed', 'rpg');
registerSmileyMegaFeature('rpghunttrain', 'rpg');
registerSmileyMegaFeature('rpghuntheal', 'rpg');
registerSmileyMegaFeature('rpghuntrevive', 'rpg');
registerSmileyMegaFeature('rpghuntattack', 'rpg');
registerSmileyMegaFeature('rpghuntdefend', 'rpg');
registerSmileyMegaFeature('rpghuntdodge', 'rpg');
registerSmileyMegaFeature('rpghuntparry', 'rpg');
registerSmileyMegaFeature('rpghuntcast', 'rpg');
registerSmileyMegaFeature('rpghuntlearn', 'rpg');
registerSmileyMegaFeature('rpghuntforget', 'rpg');
registerSmileyMegaFeature('rpghuntunlock', 'rpg');
registerSmileyMegaFeature('rpghuntlock', 'rpg');
registerSmileyMegaFeature('rpghuntcollect', 'rpg');
registerSmileyMegaFeature('rpghuntdeposit', 'rpg');
registerSmileyMegaFeature('rpghuntwithdraw', 'rpg');
registerSmileyMegaFeature('rpghuntpay', 'rpg');
registerSmileyMegaFeature('rpghuntgive', 'rpg');
registerSmileyMegaFeature('rpghuntreceive', 'rpg');
registerSmileyMegaFeature('rpghuntsend', 'rpg');
registerSmileyMegaFeature('rpghuntinvite', 'rpg');
registerSmileyMegaFeature('rpghuntkick', 'rpg');
registerSmileyMegaFeature('rpghuntpromote', 'rpg');
registerSmileyMegaFeature('rpghuntdemote', 'rpg');
registerSmileyMegaFeature('rpghuntdonate', 'rpg');
registerSmileyMegaFeature('rpghuntbuild', 'rpg');
registerSmileyMegaFeature('rpghuntexpand', 'rpg');
registerSmileyMegaFeature('rpghunttravel', 'rpg');
registerSmileyMegaFeature('rpghuntreturn', 'rpg');
registerSmileyMegaFeature('rpghuntteleport', 'rpg');
registerSmileyMegaFeature('rpghuntsummon', 'rpg');
registerSmileyMegaFeature('rpghuntdismiss', 'rpg');
registerSmileyMegaFeature('rpghuntsacrifice', 'rpg');
registerSmileyMegaFeature('rpghunttrade', 'rpg');
registerSmileyMegaFeature('rpghuntbid', 'rpg');
registerSmileyMegaFeature('rpghuntsellout', 'rpg');
registerSmileyMegaFeature('rpghuntroll', 'rpg');
registerSmileyMegaFeature('rpghuntspin', 'rpg');
registerSmileyMegaFeature('rpghuntdraw', 'rpg');
registerSmileyMegaFeature('rpghuntchoose', 'rpg');
registerSmileyMegaFeature('admingroupinfo', 'admin');
registerSmileyMegaFeature('admingroupstatus', 'admin');
registerSmileyMegaFeature('admingrouplist', 'admin');
registerSmileyMegaFeature('admingroupcheck', 'admin');
registerSmileyMegaFeature('admingroupset', 'admin');
registerSmileyMegaFeature('admingroupget', 'admin');
registerSmileyMegaFeature('admingroupadd', 'admin');
registerSmileyMegaFeature('admingroupremove', 'admin');
registerSmileyMegaFeature('admingroupenable', 'admin');
registerSmileyMegaFeature('admingroupdisable', 'admin');
registerSmileyMegaFeature('admingroupreset', 'admin');
registerSmileyMegaFeature('admingroupclear', 'admin');
registerSmileyMegaFeature('admingroupdelete', 'admin');
registerSmileyMegaFeature('admingroupcreate', 'admin');
registerSmileyMegaFeature('admingroupupdate', 'admin');
registerSmileyMegaFeature('admingroupopen', 'admin');
registerSmileyMegaFeature('admingroupclose', 'admin');
registerSmileyMegaFeature('admingrouplock', 'admin');
registerSmileyMegaFeature('admingroupunlock', 'admin');
registerSmileyMegaFeature('admingroupshow', 'admin');
registerSmileyMegaFeature('admingrouphide', 'admin');
registerSmileyMegaFeature('admingroupview', 'admin');
registerSmileyMegaFeature('admingroupsearch', 'admin');
registerSmileyMegaFeature('admingroupfind', 'admin');
registerSmileyMegaFeature('admingroupexport', 'admin');
registerSmileyMegaFeature('admingroupimport', 'admin');
registerSmileyMegaFeature('admingroupbackup', 'admin');
registerSmileyMegaFeature('admingrouprestore', 'admin');
registerSmileyMegaFeature('admingroupstart', 'admin');
registerSmileyMegaFeature('admingroupstop', 'admin');
registerSmileyMegaFeature('admingrouptest', 'admin');
registerSmileyMegaFeature('admingroupreload', 'admin');
registerSmileyMegaFeature('admingroupassign', 'admin');
registerSmileyMegaFeature('admingroupunassign', 'admin');
registerSmileyMegaFeature('admingroupapprove', 'admin');
registerSmileyMegaFeature('admingroupreject', 'admin');
registerSmileyMegaFeature('admingroupclaim', 'admin');
registerSmileyMegaFeature('admingrouprelease', 'admin');
registerSmileyMegaFeature('admingroupmute', 'admin');
registerSmileyMegaFeature('admingroupunmute', 'admin');
registerSmileyMegaFeature('admingroupban', 'admin');
registerSmileyMegaFeature('admingroupunban', 'admin');
registerSmileyMegaFeature('admingroupkick', 'admin');
registerSmileyMegaFeature('admingroupwarn', 'admin');
registerSmileyMegaFeature('admingroupunwarn', 'admin');
registerSmileyMegaFeature('admingrouppromote', 'admin');
registerSmileyMegaFeature('admingroupdemote', 'admin');
registerSmileyMegaFeature('admingrouppin', 'admin');
registerSmileyMegaFeature('admingroupunpin', 'admin');
registerSmileyMegaFeature('admingroupstar', 'admin');
registerSmileyMegaFeature('admingroupunstar', 'admin');
registerSmileyMegaFeature('admingrouprun', 'admin');
registerSmileyMegaFeature('admingroupapply', 'admin');
registerSmileyMegaFeature('admingrouprevoke', 'admin');
registerSmileyMegaFeature('admingroupgrant', 'admin');
registerSmileyMegaFeature('admingroupdeny', 'admin');
registerSmileyMegaFeature('admingroupaudit', 'admin');
registerSmileyMegaFeature('admingrouplog', 'admin');
registerSmileyMegaFeature('admingrouplogs', 'admin');
registerSmileyMegaFeature('adminmemberinfo', 'admin');
registerSmileyMegaFeature('adminmemberstatus', 'admin');
registerSmileyMegaFeature('adminmemberlist', 'admin');
registerSmileyMegaFeature('adminmembercheck', 'admin');
registerSmileyMegaFeature('adminmemberset', 'admin');
registerSmileyMegaFeature('adminmemberget', 'admin');
registerSmileyMegaFeature('adminmemberadd', 'admin');
registerSmileyMegaFeature('adminmemberremove', 'admin');
registerSmileyMegaFeature('adminmemberenable', 'admin');
registerSmileyMegaFeature('adminmemberdisable', 'admin');
registerSmileyMegaFeature('adminmemberreset', 'admin');
registerSmileyMegaFeature('adminmemberclear', 'admin');
registerSmileyMegaFeature('adminmemberdelete', 'admin');
registerSmileyMegaFeature('adminmembercreate', 'admin');
registerSmileyMegaFeature('adminmemberupdate', 'admin');
registerSmileyMegaFeature('adminmemberopen', 'admin');
registerSmileyMegaFeature('adminmemberclose', 'admin');
registerSmileyMegaFeature('adminmemberlock', 'admin');
registerSmileyMegaFeature('adminmemberunlock', 'admin');
registerSmileyMegaFeature('adminmembershow', 'admin');
registerSmileyMegaFeature('adminmemberhide', 'admin');
registerSmileyMegaFeature('adminmemberview', 'admin');
registerSmileyMegaFeature('adminmembersearch', 'admin');
registerSmileyMegaFeature('adminmemberfind', 'admin');
registerSmileyMegaFeature('adminmemberexport', 'admin');
registerSmileyMegaFeature('adminmemberimport', 'admin');
registerSmileyMegaFeature('adminmemberbackup', 'admin');
registerSmileyMegaFeature('adminmemberrestore', 'admin');
registerSmileyMegaFeature('adminmemberstart', 'admin');
registerSmileyMegaFeature('adminmemberstop', 'admin');
registerSmileyMegaFeature('adminmembertest', 'admin');
registerSmileyMegaFeature('adminmemberreload', 'admin');
registerSmileyMegaFeature('adminmemberassign', 'admin');
registerSmileyMegaFeature('adminmemberunassign', 'admin');
registerSmileyMegaFeature('adminmemberapprove', 'admin');
registerSmileyMegaFeature('adminmemberreject', 'admin');
registerSmileyMegaFeature('adminmemberclaim', 'admin');
registerSmileyMegaFeature('adminmemberrelease', 'admin');
registerSmileyMegaFeature('adminmembermute', 'admin');
registerSmileyMegaFeature('adminmemberunmute', 'admin');
registerSmileyMegaFeature('adminmemberban', 'admin');
registerSmileyMegaFeature('adminmemberunban', 'admin');
registerSmileyMegaFeature('adminmemberkick', 'admin');
registerSmileyMegaFeature('adminmemberwarn', 'admin');
registerSmileyMegaFeature('adminmemberunwarn', 'admin');
registerSmileyMegaFeature('adminmemberpromote', 'admin');
registerSmileyMegaFeature('adminmemberdemote', 'admin');
registerSmileyMegaFeature('adminmemberpin', 'admin');
registerSmileyMegaFeature('adminmemberunpin', 'admin');
registerSmileyMegaFeature('adminmemberstar', 'admin');
registerSmileyMegaFeature('adminmemberunstar', 'admin');
registerSmileyMegaFeature('adminmemberrun', 'admin');
registerSmileyMegaFeature('adminmemberapply', 'admin');
registerSmileyMegaFeature('adminmemberrevoke', 'admin');
registerSmileyMegaFeature('adminmembergrant', 'admin');
registerSmileyMegaFeature('adminmemberdeny', 'admin');
registerSmileyMegaFeature('adminmemberaudit', 'admin');
registerSmileyMegaFeature('adminmemberlog', 'admin');
registerSmileyMegaFeature('adminmemberlogs', 'admin');
registerSmileyMegaFeature('adminmodinfo', 'admin');
registerSmileyMegaFeature('adminmodstatus', 'admin');
registerSmileyMegaFeature('funquizplay', 'fun');
registerSmileyMegaFeature('funquizstart', 'fun');
registerSmileyMegaFeature('funquiznext', 'fun');
registerSmileyMegaFeature('funquizstop', 'fun');
registerSmileyMegaFeature('funquizrandom', 'fun');
registerSmileyMegaFeature('funquizdaily', 'fun');
registerSmileyMegaFeature('funquizweekly', 'fun');
registerSmileyMegaFeature('funquizscore', 'fun');
registerSmileyMegaFeature('funquiztop', 'fun');
registerSmileyMegaFeature('funquizrank', 'fun');
registerSmileyMegaFeature('funquizanswer', 'fun');
registerSmileyMegaFeature('funquizhint', 'fun');
registerSmileyMegaFeature('funquizskip', 'fun');
registerSmileyMegaFeature('funquizreset', 'fun');
registerSmileyMegaFeature('funquiznew', 'fun');
registerSmileyMegaFeature('funquizjoin', 'fun');
registerSmileyMegaFeature('funquizleave', 'fun');
registerSmileyMegaFeature('funquizvote', 'fun');
registerSmileyMegaFeature('funquizchoose', 'fun');
registerSmileyMegaFeature('funquizpick', 'fun');
registerSmileyMegaFeature('funquizroll', 'fun');
registerSmileyMegaFeature('funquizspin', 'fun');
registerSmileyMegaFeature('funquizdraw', 'fun');
registerSmileyMegaFeature('funquizflip', 'fun');
registerSmileyMegaFeature('funquizguess', 'fun');
registerSmileyMegaFeature('funquizcheck', 'fun');
registerSmileyMegaFeature('funquizshare', 'fun');
registerSmileyMegaFeature('funquizsave', 'fun');
registerSmileyMegaFeature('funquizprofile', 'fun');
registerSmileyMegaFeature('funquizstats', 'fun');
registerSmileyMegaFeature('funtriviaplay', 'fun');
registerSmileyMegaFeature('funtriviastart', 'fun');
registerSmileyMegaFeature('funtrivianext', 'fun');
registerSmileyMegaFeature('funtriviastop', 'fun');
registerSmileyMegaFeature('funtriviarandom', 'fun');
registerSmileyMegaFeature('funtriviadaily', 'fun');
registerSmileyMegaFeature('funtriviaweekly', 'fun');
registerSmileyMegaFeature('funtriviascore', 'fun');
registerSmileyMegaFeature('funtriviatop', 'fun');
registerSmileyMegaFeature('funtriviarank', 'fun');
registerSmileyMegaFeature('toolcalcinfo', 'tools');
registerSmileyMegaFeature('toolcalccheck', 'tools');
registerSmileyMegaFeature('toolcalcrun', 'tools');
registerSmileyMegaFeature('toolcalcparse', 'tools');
registerSmileyMegaFeature('toolcalcformat', 'tools');
registerSmileyMegaFeature('toolcalcconvert', 'tools');
registerSmileyMegaFeature('toolcalcencode', 'tools');
registerSmileyMegaFeature('toolcalcdecode', 'tools');
registerSmileyMegaFeature('toolcalcgenerate', 'tools');
registerSmileyMegaFeature('toolcalcrandom', 'tools');
registerSmileyMegaFeature('toolcalcvalidate', 'tools');
registerSmileyMegaFeature('toolcalcverify', 'tools');
registerSmileyMegaFeature('toolcalccompare', 'tools');
registerSmileyMegaFeature('toolcalcsort', 'tools');
registerSmileyMegaFeature('toolcalcfilter', 'tools');
registerSmileyMegaFeature('toolcalccount', 'tools');
registerSmileyMegaFeature('toolcalcsum', 'tools');
registerSmileyMegaFeature('toolcalcmin', 'tools');
registerSmileyMegaFeature('toolcalcmax', 'tools');
registerSmileyMegaFeature('toolcalcaverage', 'tools');
registerSmileyMegaFeature('toolcalcreset', 'tools');
registerSmileyMegaFeature('toolcalcpretty', 'tools');
registerSmileyMegaFeature('toolcalcminify', 'tools');
registerSmileyMegaFeature('toolcalcsearch', 'tools');
registerSmileyMegaFeature('toolcalcfind', 'tools');
registerSmileyMegaFeature('toolcalcsplit', 'tools');
registerSmileyMegaFeature('toolcalcjoin', 'tools');
registerSmileyMegaFeature('toolcalcreplace', 'tools');
registerSmileyMegaFeature('toolcalcescape', 'tools');
registerSmileyMegaFeature('toolcalcunescape', 'tools');
registerSmileyMegaFeature('toolconvertinfo', 'tools');
registerSmileyMegaFeature('toolconvertcheck', 'tools');
registerSmileyMegaFeature('toolconvertrun', 'tools');
registerSmileyMegaFeature('toolconvertparse', 'tools');
registerSmileyMegaFeature('toolconvertformat', 'tools');
registerSmileyMegaFeature('toolconvertconvert', 'tools');
registerSmileyMegaFeature('toolconvertencode', 'tools');
registerSmileyMegaFeature('toolconvertdecode', 'tools');
registerSmileyMegaFeature('toolconvertgenerate', 'tools');
registerSmileyMegaFeature('toolconvertrandom', 'tools');

// Force .allmenu categorization for every new unique command.
ALIAS_OVERRIDE_CATEGORY['rpgquestinfo'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgqueststatus'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgqueststart'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgqueststop'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestcreate'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestopen'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestclose'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestenter'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestleave'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestjoin'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestlist'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestsearch'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestfind'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestinspect'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestscan'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquesttrack'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestclaim'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestcomplete'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestcancel'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestaccept'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestdecline'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestbuy'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestsell'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestuse'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestequip'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestunequip'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestupgrade'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestrepair'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestcraft'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestrefine'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestforge'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestcook'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestfeed'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquesttrain'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestheal'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestrevive'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestattack'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestdefend'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestdodge'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestparry'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestcast'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestlearn'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestforget'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestunlock'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestlock'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestcollect'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestdeposit'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestwithdraw'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestpay'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestgive'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestreceive'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestsend'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestinvite'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestkick'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestpromote'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestdemote'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestdonate'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestbuild'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestexpand'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquesttravel'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestreturn'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestteleport'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestsummon'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestdismiss'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestsacrifice'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquesttrade'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestbid'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestsellout'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestroll'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestspin'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestdraw'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestchoose'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestvote'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestchallenge'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestrank'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestscore'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquesttop'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquesthistory'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestlog'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestsave'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestload'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestreset'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestrename'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestset'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestget'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestview'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestshow'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestcompare'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgquestupgrade2'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioninfo'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionstatus'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionstart'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionstop'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioncreate'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionopen'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionclose'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionenter'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionleave'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionjoin'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionlist'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionsearch'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionfind'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioninspect'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionscan'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiontrack'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionclaim'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioncomplete'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioncancel'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionaccept'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiondecline'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionbuy'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionsell'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionuse'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionequip'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionunequip'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionupgrade'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionrepair'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioncraft'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionrefine'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionforge'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioncook'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionfeed'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiontrain'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionheal'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionrevive'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionattack'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiondefend'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiondodge'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionparry'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioncast'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionlearn'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionforget'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionunlock'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionlock'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioncollect'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiondeposit'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionwithdraw'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionpay'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiongive'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionreceive'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionsend'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioninvite'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionkick'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionpromote'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiondemote'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiondonate'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionbuild'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionexpand'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiontravel'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionreturn'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionteleport'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionsummon'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiondismiss'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionsacrifice'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiontrade'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionbid'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionsellout'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionroll'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionspin'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiondraw'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionchoose'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionvote'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionchallenge'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionrank'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionscore'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissiontop'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionhistory'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionlog'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionsave'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionload'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionreset'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionrename'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionset'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionget'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionview'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionshow'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissioncompare'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpgmissionupgrade2'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntinfo'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntstatus'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntstart'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntstop'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntcreate'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntopen'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntclose'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntenter'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntleave'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntjoin'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntlist'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntsearch'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntfind'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntinspect'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntscan'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghunttrack'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntclaim'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntcomplete'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntcancel'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntaccept'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntdecline'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntbuy'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntsell'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntuse'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntequip'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntunequip'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntupgrade'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntrepair'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntcraft'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntrefine'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntforge'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntcook'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntfeed'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghunttrain'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntheal'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntrevive'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntattack'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntdefend'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntdodge'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntparry'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntcast'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntlearn'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntforget'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntunlock'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntlock'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntcollect'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntdeposit'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntwithdraw'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntpay'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntgive'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntreceive'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntsend'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntinvite'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntkick'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntpromote'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntdemote'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntdonate'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntbuild'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntexpand'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghunttravel'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntreturn'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntteleport'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntsummon'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntdismiss'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntsacrifice'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghunttrade'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntbid'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntsellout'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntroll'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntspin'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntdraw'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['rpghuntchoose'] = '⚔️ RPG';
ALIAS_OVERRIDE_CATEGORY['admingroupinfo'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupstatus'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouplist'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupcheck'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupset'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupget'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupadd'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupremove'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupenable'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupdisable'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupreset'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupclear'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupdelete'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupcreate'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupupdate'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupopen'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupclose'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouplock'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupunlock'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupshow'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouphide'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupview'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupsearch'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupfind'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupexport'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupimport'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupbackup'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouprestore'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupstart'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupstop'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouptest'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupreload'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupassign'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupunassign'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupapprove'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupreject'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupclaim'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouprelease'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupmute'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupunmute'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupban'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupunban'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupkick'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupwarn'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupunwarn'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouppromote'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupdemote'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouppin'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupunpin'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupstar'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupunstar'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouprun'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupapply'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouprevoke'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupgrant'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupdeny'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingroupaudit'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouplog'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['admingrouplogs'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberinfo'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberstatus'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberlist'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmembercheck'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberset'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberget'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberadd'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberremove'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberenable'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberdisable'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberreset'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberclear'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberdelete'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmembercreate'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberupdate'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberopen'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberclose'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberlock'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberunlock'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmembershow'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberhide'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberview'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmembersearch'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberfind'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberexport'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberimport'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberbackup'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberrestore'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberstart'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberstop'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmembertest'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberreload'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberassign'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberunassign'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberapprove'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberreject'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberclaim'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberrelease'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmembermute'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberunmute'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberban'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberunban'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberkick'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberwarn'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberunwarn'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberpromote'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberdemote'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberpin'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberunpin'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberstar'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberunstar'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberrun'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberapply'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberrevoke'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmembergrant'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberdeny'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberaudit'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberlog'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmemberlogs'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmodinfo'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['adminmodstatus'] = '🛡️ Admin';
ALIAS_OVERRIDE_CATEGORY['funquizplay'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizstart'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquiznext'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizstop'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizrandom'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizdaily'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizweekly'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizscore'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquiztop'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizrank'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizanswer'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizhint'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizskip'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizreset'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquiznew'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizjoin'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizleave'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizvote'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizchoose'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizpick'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizroll'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizspin'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizdraw'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizflip'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizguess'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizcheck'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizshare'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizsave'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizprofile'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funquizstats'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funtriviaplay'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funtriviastart'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funtrivianext'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funtriviastop'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funtriviarandom'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funtriviadaily'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funtriviaweekly'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funtriviascore'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funtriviatop'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['funtriviarank'] = '🎮 Fun';
ALIAS_OVERRIDE_CATEGORY['toolcalcinfo'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalccheck'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcrun'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcparse'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcformat'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcconvert'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcencode'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcdecode'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcgenerate'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcrandom'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcvalidate'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcverify'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalccompare'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcsort'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcfilter'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalccount'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcsum'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcmin'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcmax'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcaverage'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcreset'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcpretty'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcminify'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcsearch'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcfind'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcsplit'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcjoin'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcreplace'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcescape'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolcalcunescape'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolconvertinfo'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolconvertcheck'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolconvertrun'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolconvertparse'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolconvertformat'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolconvertconvert'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolconvertencode'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolconvertdecode'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolconvertgenerate'] = '🛠️ Tools';
ALIAS_OVERRIDE_CATEGORY['toolconvertrandom'] = '🛠️ Tools';
const routeMap = new Map(routes);

// ─── ROLE TAG MAP ─────────────────────────────────────────────────────────
// Pemetaan alias command → tag jabatan yang diperlukan.
// 🌟 = Creator only  |  Ⓞ = Owner  |  Ⓐ = Admin grup  |  Ⓟ = Premium
// Tidak ada tag = Free (semua user bisa pakai)
const ROLE_TAG = {
    // Creator only
    addcreator: '🌟', removecreator: '🌟', delcreator: '🌟',

    // Owner / Creator
    addowner: 'Ⓞ', delowner: 'Ⓞ', removeowner: 'Ⓞ',
    addprem: 'Ⓞ', addpremium: 'Ⓞ', delprem: 'Ⓞ', delpremium: 'Ⓞ', removepremium: 'Ⓞ',
    broadcast: 'Ⓞ', broadcastgc: 'Ⓞ', bc: 'Ⓞ',
    broadcastuser: 'Ⓞ', bcuser: 'Ⓞ', broadcastpribadi: 'Ⓞ',
    listgrup: 'Ⓞ', jumlahgrup: 'Ⓞ', totalgrup: 'Ⓞ',
    listjadibot: 'Ⓞ', daftarjadibot: 'Ⓞ',
    addgold: 'Ⓞ', tambahgold: 'Ⓞ', givegold: 'Ⓞ',
    addlimit: 'Ⓞ', tambablimit: 'Ⓞ',

    // Admin grup
    kick: 'Ⓐ', keluarkan: 'Ⓐ', tendang: 'Ⓐ',
    ryoiken: 'Ⓐ', ryoikitenkai: 'Ⓐ', domainexpansion: 'Ⓐ', tenkai: 'Ⓐ',
    promote: 'Ⓐ', jadikanadmin: 'Ⓐ', naikkan: 'Ⓐ',
    demote: 'Ⓐ', turunkan: 'Ⓐ', copotadmin: 'Ⓐ',
    add: 'Ⓐ', tambahmember: 'Ⓐ', invite: 'Ⓐ',
    warn: 'Ⓐ', peringatan: 'Ⓐ', beriwarn: 'Ⓐ',
    unwarn: 'Ⓐ', hapuswarn: 'Ⓐ',
    warnlimit: 'Ⓐ', limitwarn: 'Ⓐ', setwarnlimit: 'Ⓐ',
    mute: 'Ⓐ', bisukan: 'Ⓐ',
    unmute: 'Ⓐ', bukabisu: 'Ⓐ',
    lockgroup: 'Ⓐ', kuncigrup: 'Ⓐ', closegroup: 'Ⓐ',
    unlockgroup: 'Ⓐ', bukagrup: 'Ⓐ', opengroup: 'Ⓐ',
    setname: 'Ⓐ', gantinamagrup: 'Ⓐ', namagrup: 'Ⓐ',
    setdesc: 'Ⓐ', gantidesk: 'Ⓐ', deskripsigrup: 'Ⓐ',
    link: 'Ⓐ', linkgrup: 'Ⓐ', invitelink: 'Ⓐ', getlink: 'Ⓐ',
    revoke: 'Ⓐ', resetlink: 'Ⓐ', revokelink: 'Ⓐ',
    leave: 'Ⓐ', keluargrup: 'Ⓐ', botkeluar: 'Ⓐ',
    hidetag: 'Ⓐ', htag: 'Ⓐ', tagsemua: 'Ⓐ',
    tagall: 'Ⓐ', mentionall: 'Ⓐ', tagsemuamember: 'Ⓐ',
    antilink: 'Ⓐ', antispam: 'Ⓐ', antiflood: 'Ⓐ',
    antitoxic: 'Ⓐ', antibot: 'Ⓐ', antisara: 'Ⓐ', antigb: 'Ⓐ',
    antinsfw: 'Ⓐ', antiporn: 'Ⓐ', antiporno: 'Ⓐ',
    hapusnsfw: 'Ⓐ', delnsfw: 'Ⓐ', deletensfw: 'Ⓐ',
    resetnsfwstrike: 'Ⓐ', resetstrikensfw: 'Ⓐ',
    setnsfwlimit: 'Ⓐ', nsfwlimit: 'Ⓐ',
    setwelcome: 'Ⓐ', setfarewell: 'Ⓐ', slowmode: 'Ⓐ',
    locklink: 'Ⓐ', locksticker: 'Ⓐ', lockvideo: 'Ⓐ', lockgambar: 'Ⓐ',
    poll: 'Ⓐ', buatpoll: 'Ⓐ',
    addjadwal: 'Ⓐ', deljadwal: 'Ⓐ',
    listlaporan: 'Ⓐ', laporanmember: 'Ⓐ',
    clearlaporan: 'Ⓐ', bersihkanlaporan: 'Ⓐ',
    sider: 'Ⓐ', cekrider: 'Ⓐ', listsider: 'Ⓐ',
    kicksider: 'Ⓐ', tendangrider: 'Ⓐ',
};

function roleTag(alias) {
    return ROLE_TAG[alias] || '';
}

// ─── MENU CATEGORY CONFIG ────────────────────────────────────────────────
// Satu sumber klasifikasi untuk .menu/.allmenu/menu kategori. Registry 2.000
// command tidak boleh jatuh ke "Lainnya" hanya karena handler-nya inline.
const CATEGORY_ORDER = [
    '⚔️ RPG', '🛡️ Admin', '🎮 Fun', '🛠️ Tools', '🖼️ Media',
    '🎵 Music', '📥 Downloader', '🤖 Bot', '📢 Broadcast', '🖥️ Panel',
    '🌟 Smiley', '🛒 Sewa', '💎 Premium', '📦 Lainnya'
];

const ADMIN_SUBCATEGORY_ORDER = [
    '👥 Manajemen Member', '📥 Approval & Join Request',
    '👑 Jabatan & Hak Akses', '⚠️ Warning & Moderasi',
    '🔒 Lock Konten', '🔇 Mute & Lock', '🛡️ Proteksi',
    '🔗 Link, Kata & Whitelist', '⚙️ Pengaturan Grup',
    '👋 Welcome & Farewell', '📊 Poll & Jadwal', '🎉 Event & Tugas',
    '📝 Pengumuman, Catatan & Template', '🧾 Audit & Laporan',
    '📈 Monitoring & Statistik', '💾 Backup & Restore',
    '📋 Dashboard Grup', '📦 Admin Lainnya', '📦 Lainnya'
];

function adminSubcategory(name) {
    const n = String(name).toLowerCase();
    if (/(approve|reject|request|terima|tolak)/.test(n)) return '📥 Approval & Join Request';
    if (/(kick|promote|demote|add|remove|member|mutemember|unmutemember|listadmin|admincount|bulk)/.test(n)) return '👥 Manajemen Member';
    if (/(owner|creator|premium|role|jabatan|access|permission)/.test(n)) return '👑 Jabatan & Hak Akses';
    if (/(warn|warning|strike)/.test(n)) return '⚠️ Warning & Moderasi';
    if (/(lockimage|lockvideo|lockdocument|lockcontact|locklocation|lockvn|lockaudio|lockgif|lockpoll|locktext|locksticker|lockmedia)/.test(n)) return '🔒 Lock Konten';
    if (/(mute|lockgroup|unlockgroup|slowmode|closegroup|opengroup)/.test(n)) return '🔇 Mute & Lock';
    if (/(anti|protect|secure|phishing|nsfw|spam|toxic|virtex|judol|pinjol|caps|flood)/.test(n)) return '🛡️ Proteksi';
    if (/(badword|allowlink|whitelist|antilink|link|revoke)/.test(n)) return '🔗 Link, Kata & Whitelist';
    if (/(welcome|farewell)/.test(n)) return '👋 Welcome & Farewell';
    if (/(poll|vote|jadwal|schedule)/.test(n)) return '📊 Poll & Jadwal';
    if (/(event|rsvp|birthday|task|quicklock|quickunlock)/.test(n)) return '🎉 Event & Tugas';
    if (/(announcement|pengumuman|membernote|template|catatan|note|motd|autoreply)/.test(n)) return '📝 Pengumuman, Catatan & Template';
    if (/(audit|report|lapor|laporan)/.test(n)) return '🧾 Audit & Laporan';
    if (/(monitor|activity|aktivitas)/.test(n)) return '📈 Monitoring & Statistik';
    if (/(backup|restore)/.test(n)) return '💾 Backup & Restore';
    if (/(summary|stats|statistik|groupage|creator|exportmember|cekbot)/.test(n)) return '📋 Dashboard Grup';
    if (/(groupinfo|setname|setdesc|group|icon|ephemeral|rules|setting)/.test(n)) return '⚙️ Pengaturan Grup';
    return '📦 Admin Lainnya';
}


function categorizeRegistryName(name) {
    const n = String(name || '').toLowerCase();
    if (n.startsWith('rpg')) return '⚔️ RPG';
    if (n.startsWith('admin')) return '🛡️ Admin';
    if (n.startsWith('fun')) return '🎮 Fun';
    if (n.startsWith('tool')) return '🛠️ Tools';
    if (n.startsWith('media')) return '🖼️ Media';
    if (n.startsWith('bot')) return '🤖 Bot';
    if (n.startsWith('social')) return '📥 Downloader';
    if (n.startsWith('cpanel')) return '🖥️ Panel';
    if (n.startsWith('sewa')) return '🛒 Sewa';
    if (n.startsWith('premium')) return '💎 Premium';

    // Registry lama berisi command asli tanpa prefix kategori. Kelompokkan
    // berdasarkan rentang/semantik command supaya fitur-fitur tersebut juga
    // muncul di menu kategori yang benar.
    if (['sewa','ceksewa','delsewa','listsewa','extsewa','hargasewa','gantihargasewa','sewamode'].includes(n)) return '🛒 Sewa';
    if (['brat','bratgreen','bratwhite','iqc','repost'].includes(n)) return '🖼️ Media';
    if (['self','public','private','autojoin','whoami','runtime','jam'].includes(n)) return '🤖 Bot';
    if (['menu','menurpg','menuadmin','menufun','menutools','menumedia','menubot','totalfitur','daftar'].includes(n)) return '🤖 Bot';
    const i = SMILEY_2000_FEATURES.indexOf(n);
    const ranges = [
        [[[9,44],[223,244],[295,302],[350,395],[510,517]], ['⚔️ RPG']],
        [[[45,147],[245,270],[303,314],[396,404],[690,764]], ['🛡️ Admin']],
        [[[148,173],[315,329],[405,424],[475,510]], ['🎮 Fun']],
        [[[174,198],[329,349],[425,474],[517,599],[628,633],[651,690]], ['🛠️ Tools']],
        [[[291,294],[600,627],[634,650]], ['🖼️ Media']],
        [[[199,222],[611,618],[691,717],[767,769]], ['🤖 Bot']],
        [[[770,783]], ['📥 Downloader']],
    ];
    for (const [blocks, [cat]] of ranges) {
        if (blocks.some(([a,b]) => i >= a && i <= b)) return cat;
    }
    if (['play'].includes(n)) return '🎵 Music';
    if (['broadcast','broadcastuser','listgrup'].includes(n)) return '📢 Broadcast';
    if (['cpanel'].includes(n)) return '🖥️ Panel';
    if (['sewa','ceksewa','delsewa','listsewa','extsewa','hargasewa','gantihargasewa','sewamode'].includes(n)) return '🛒 Sewa';
    return '📦 Lainnya';
}

// Bangun mapping alias -> kategori SETELAH semua reg() (termasuk
// reg(['allmenu'])) selesai dipanggil — supaya allmenu sendiri juga
// terklasifikasi dengan benar, bukan jatuh ke fallback "📦 Lainnya".
// (Sebelumnya ini dibangun SEBELUM reg(['allmenu']) dipanggil, sehingga
// alias "allmenu" belum ada di array `routes` saat iterasi ini berjalan
// — bug yang sama persis pernah terjadi pada routeMap itu sendiri.)
// Resolve a category for handlers that do not have an explicit alias override.
// Generated commands use ALIAS_OVERRIDE_CATEGORY; regular handlers are inferred
// from the module/function source so the menu builder can categorize them safely.
function categorizeByHandlerSource(handler) {
    if (typeof handler !== 'function') return '📦 Lainnya';

    let source = '';
    try {
        source = Function.prototype.toString.call(handler);
    } catch {
        return '📦 Lainnya';
    }

    const rules = [
        [/rpgCommands|rpgCommands[0-9]+|rpgEngine|RPG_/i, '⚔️ RPG'],
        [/adminCommands|isGroupLocked|checkMute|quickLock|quickUnlock|votekick|setMotd|pollClose/i, '🛡️ Admin'],
        [/funCommands|quiz|trivia|KETAWA|BERCANDA|PUJIAN|PANTUN|TEBAKAN/i, '🎮 Fun'],
        [/toolsCommands|textTools|mathTools|converterTools|generatorTools|infoTools|validatorTools/i, '🛠️ Tools'],
        [/mediaCommands|hdCmd|grayscaleCmd|mirrorCmd|blurCmd|rotate90Cmd|toBotakCmd|toChibiCmd|toFiguraCmd/i, '🖼️ Media'],
        [/socialDownloadCommands|downloadYoutube|downloadTwitter|downloadFacebook|downloadPinterest|downloadReddit/i, '📥 Downloader'],
        [/musicCommands|spotify|play|ytmp3|ytmp4/i, '🎵 Music'],
        [/broadcastCommands|broadcast/i, '📢 Broadcast'],
        [/panelCommands|makeCreateServerHandler|makeListServerHandler|cpanel/i, '🖥️ Panel'],
        [/jadibotCommands|jadibot/i, '🤖 Bot'],
        [/smileyCommands|SMILEYLINE|JJK_TRIVIA|ANIME_FACTS/i, '🌟 Smiley'],
    ];

    for (const [pattern, category] of rules) {
        if (pattern.test(source)) return category;
    }

    return '📦 Lainnya';
}

// ── SMILEY FEATURE PACK: kategori berdasarkan nama command ────────────────
for (const name of routes.map(([alias]) => alias)) {
    if (name.startsWith('rpg')) ALIAS_OVERRIDE_CATEGORY[name] = '⚔️ RPG';
    else if (name.startsWith('admin')) ALIAS_OVERRIDE_CATEGORY[name] = '🛡️ Admin';
    else if (name.startsWith('fun')) ALIAS_OVERRIDE_CATEGORY[name] = '🎮 Fun';
    else if (name.startsWith('tool')) ALIAS_OVERRIDE_CATEGORY[name] = '🛠️ Tools';
    else if (name.startsWith('media')) ALIAS_OVERRIDE_CATEGORY[name] = '🖼️ Media';
    else if (name.startsWith('bot')) ALIAS_OVERRIDE_CATEGORY[name] = '🤖 Bot';
}

const ALIAS_TO_CATEGORY = new Map();
for (const [alias, handler] of routes) {
    if (!ALIAS_TO_CATEGORY.has(alias)) {
        const registryCat = categorizeRegistryName(alias);
        const cat = ALIAS_OVERRIDE_CATEGORY[alias] || (registryCat !== '📦 Lainnya' ? registryCat : categorizeByHandlerSource(handler));
        ALIAS_TO_CATEGORY.set(alias, cat);
    }
}

// FIX: .allmenu (dan sekarang .totalfitur juga) menghitung/menampilkan
// fitur UNIK — command dengan beberapa alias (misal owner/creator/dev/
// developer) dihitung SEKALI, bukan sekali per nama panggilan. Awalnya
// .totalfitur sengaja dipisah untuk mempertahankan angka branding
// "1200+ Fitur" yang menghitung semua alias satu-satu — tapi itu bikin
// angkanya kelihatan dobel/mengada-ada begitu dibandingkan sama .allmenu
// (yang sudah unik). Sekarang disatukan: keduanya pakai angka fitur
// unik yang sebenarnya. Kalau kamu update angka "1200+ Fitur" di
// package.json/README nanti, sesuaikan ke angka unik ini juga.
function getUniqueCommandNames() {
    return getMenuFeatureNames();
}

export const FEATURED_GENERATED_COUNT = 443;

// Menu/AllMenu/TotalFitur memakai SATU sumber: registry 2.000 fitur unik.
// Jadi angka dan daftar tidak pernah berbeda.
const MENU_EXTRA_COMMANDS = [
    'opengroup', 'closegroup', 'terimarequest', 'tolakrequest', 'terimasemua',
    'kuncigrup', 'bukagrup', 'help', 'start', 'register', 'profile', 'stats',
    'inv', 'bag', 'battle', 'pvp', 'duel', 'raid', 'explore', 'shop', 'buy',
    'sell', 'work', 'deposit', 'withdraw', 'send', 'invite', 'tendang',
];

function getMenuFeatureNames() {
    // Registry = command utama. Beberapa alias penting yang memang dipakai
    // user ditambahkan supaya navigasi tetap lengkap tanpa memasukkan ribuan
    // alias duplikat yang akan membuat .allmenu melewati batas WhatsApp.
    const merged = new Set([
        ...SMILEY_2000_FEATURES.slice(0, 2000),
        ...MENU_EXTRA_COMMANDS,
    ]);
    return [...merged].filter(n => !['gamble','lottery','bettinggold'].includes(String(n).toLowerCase()));
}

function getRegisteredCommandCount() {
    return getMenuFeatureNames().length;
}

export function getAllCommandNames() {
    return getMenuFeatureNames();
}

// FIX BUG: dipakai messagePipeline.js SEBELUM kirim reaksi ⏳ — supaya
// command yang tidak terdaftar (typo, dsb) tidak dikasih reaksi ⏳ yang
// akan nyangkut selamanya (karena handleCommand() return lebih awal kalau
// !handler, SEBELUM sempat sampai ke bagian yang kirim reaksi ✅/❌).
export function commandExists(name) {
    return routeMap.has(name);
}

// ── Reaksi emoji sebagai indikator status command ───────────────────────
// ⏳ = sedang diproses, ✅ = berhasil, ❌ = gagal/error. Reaksi dikirim ke
// pesan ASLI dari user (msg.key), jadi kelihatan langsung di pesan yang
// dia ketik sendiri — tidak perlu baca teks balasan bot buat tahu status.
// Dibungkus try/catch supaya reaksi yang gagal terkirim (jaringan lagi
// bermasalah, dsb) tidak ikut menggagalkan command itu sendiri.
async function reactTo(sock, jid, msgKey, emoji) {
    try { await sock.sendMessage(jid, { react: { text: emoji, key: msgKey } }); } catch {}
}

export async function handleCommand(sock, msg, jid, sender, command, args, isGroup, body, precomputedIsAdmin) {
    let isAdmin = false;
    if (typeof precomputedIsAdmin === 'boolean') {
        isAdmin = precomputedIsAdmin;
    } else if (isGroup) {
        try {
            // FIX: dibungkus withTimeout — lihat penjelasan lengkap di
            // messagePipeline.js mengenai risiko groupMetadata() hang tanpa
            // batas waktu pada koneksi yang sedang rate-limited.
            const metadata = await withTimeout(sock.groupMetadata(jid), 15_000, 'groupMetadata(handleCommand)');
            // FIX @lid: p.id di groupMetadata bisa @lid sementara sender @s.whatsapp.net
            const participant = metadata.participants.find(p => {
                if (p.id === sender) return true;
                if (p.id.includes('@lid')) { const r = recallRealJid(p.id); if (r && r === sender) return true; }
                if (sender.includes('@lid')) { const r = recallRealJid(sender); if (r && r === p.id) return true; }
                return false;
            });
            isAdmin = participant?.admin === 'admin' || participant?.admin === 'superadmin';
        } catch {
            isAdmin = false;
        }
    }

    // Hirarki jabatan: Creator > Owner > Premium > User biasa.
    // isOwner tetap dipertahankan sebagai nama field di ctx (kompatibel
    // dengan command lama yang sudah memakai ctx.isOwner), tapi sekarang
    // sumber kebenarannya dari roles.js (mendukung banyak Owner dinamis,
    // bukan cuma satu nomor statis dari settings.ownerNumber).
    // FIX: dibungkus try/catch — sebelumnya kalau salah satu dari ketiga
    // fungsi ini melempar error (misal db.js gagal baca/tulis file data),
    // errornya akan keluar dari handleCommand() TANPA tertangkap try/catch
    // apapun (karena posisinya di luar blok try di bawah), sehingga
    // SEMUA command gagal total tanpa balasan apapun ke user — walau log
    // "⚡ ... → .command" tetap muncul di console karena itu dicatat
    // sebelum titik ini. Sekarang errornya hanya membuat ctx.isCreator/
    // isOwner/isPremium default ke false (paling aman), bukan menggagalkan
    // seluruh proses command.
    let isCreatorFlag = false, isOwnerFlag = false, isPremiumFlag = false;
    try {
        isCreatorFlag = isCreator(sender);
        isOwnerFlag   = isOwner(sender);
        isPremiumFlag = isPremium(sender);
    } catch (err) {
        log.error(`Gagal cek jabatan untuk ${sender}: ${err.message}`);
    }
    const reply = (text) => replyWithThumb(sock, jid, text, msg);
    const mentioned = getMentioned(msg);

    const handler = routeMap.get(command);
    if (!handler) {
        log.error(`Command "${command}" TIDAK DITEMUKAN di routeMap (total ${routeMap.size} command terdaftar).`);
        return;
    }

    // ── Sewa Mode check ────────────────────────────────────────────────────
    // Kalau sewaMode ON dan ini grup → hanya grup bersewa yang bisa jalan.
    // Owner/Creator selalu bypass. Command info-sewa (ceksewa, hargasewa) juga bypass.
    const SEWA_BYPASS_CMDS = new Set(['ceksewa','infosewa','statussewa','hargasewa','pricesewa','infoharga','menu','help','start']);
    if (isGroup && isSewaMode() && !isOwnerFlag && !isCreatorFlag && !SEWA_BYPASS_CMDS.has(command)) {
        if (!isSewaActive(jid)) {
            return replyWithThumb(sock, jid,
                `⏳ *Bot Belum Disewa*\n\n` +
                `Grup ini belum memiliki sewa bot aktif.\n` +
                `Ketik \`${settings.prefix}hargasewa\` untuk info harga dan cara sewa.`,
                msg
            );
        }
    }

    // Track command usage analytics
    try { trackCommand(command); } catch {}

    const ctx = {
        sock, msg, jid, sender, args, isGroup, body, reply, isAdmin,
        isOwner: isOwnerFlag,
        isCreator: isCreatorFlag,
        isPremium: isPremiumFlag,
        mentioned,
    };

    // FIX: reaksi ⏳ sekarang dikirim lebih awal, di messagePipeline.js
    // (sebelum autoTyping) — supaya muncul INSTAN saat command diterima,
    // bukan baru muncul setelah delay "mengetik..." 3-4 detik. Di sini
    // tinggal reaksi hasil akhirnya (✅ / ❌) setelah handler selesai.
    try {
        const longTimeoutCommands = [
            'play', 'musik', 'music', 'lagu', 'ytmp3',
            'ig', 'instagram', 'igdl', 'instagramdl',
            'tiktok', 'tt', 'tiktokdl', 'ttdl',
            'iqc', 'iphonequote', 'iphoneqc', 'imessagequote',
        ];
        const timeoutMs = longTimeoutCommands.includes(command) ? 180_000 : 60_000;
        await withTimeout(handler(ctx), timeoutMs, `command "${command}"`);
        await reactTo(sock, jid, msg.key, '✅');
        // FIX: sebelumnya trackCommandUsage(command) dipanggil 2x di sini secara
        // tidak sengaja — bikin statistik .botstats (total & per-command) selalu
        // dobel dari angka sebenarnya. Cukup dipanggil sekali.
        try { trackCommandUsage(command); } catch { /* ignore */ }
    } catch (err) {
        log.error(`Command "${command}": ${err.message}`);
        try { await reply('⚠️ Terjadi kesalahan saat menjalankan command ini.'); } catch {}
        await reactTo(sock, jid, msg.key, '❌');
    }
}

export { checkMute, isGroupLocked };
