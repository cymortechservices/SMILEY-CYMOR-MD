// ════════════════════════════════════════════════════════════════════
//  SETTING.JS — Konfigurasi Lengkap SMILEY CYMOR MD
//  Edit file ini untuk mengubah seluruh perilaku & tampilan bot.
//  Versi: 2.0.0 — Legendary Edition
// ════════════════════════════════════════════════════════════════════

export const settings = {

    // ╔═══════════════════════════════════════╗
    // ║           IDENTITAS BOT               ║
    // ╚═══════════════════════════════════════╝

    // Nama & nomor Creator (developer resmi brand bot ini). Bebas
    // diganti kapan saja lalu restart bot. lib/roles.js otomatis
    // membaca dari sini.
    creatorName:   'Legendary Smiley Cymor',
    // Nomor pribadi Creator (format: 628xxx, tanpa "+"). Kosongkan
    // kalau tidak mau menampilkan nomor pribadi di .owner — Creator
    // tetap dikenali lewat ownerNumber/ownerNumbers di bawah.
    creatorNumber: '',

    // Dulu dipakai untuk branding "channel resmi" (forward-tag) di
    // .menu & .allmenu. Dikosongkan di rebrand ini — bot ini TIDAK
    // menempelkan link channel siapa pun. Isi lagi kapan saja kalau
    // kamu bikin channel WhatsApp sendiri untuk Smiley Cymor MD.
    channelId:   '',
    channelName: '',
    channelUrl:  '',

    botName:      'SMILEY CYMOR MD',
    botVersion:   '2.0.0',
    botTagline:   '😎 Legendary Edition — No One Does It Better Than Me',
    motto:        'No one does it better than me',
    prefix:       '.',

    // Nama Owner UTAMA — cuma dipakai untuk TAMPILAN (misal di .owner,
    // .allmenu, dll). Bebas diganti kapan saja, tidak butuh restart bot
    // untuk berlaku.
    ownerName: 'Legendary Smiley Cymor',

    // Nomor Owner UTAMA (format: 628xxx, tanpa "+", "@s.whatsapp.net",
    // atau spasi). Nomor ini OTOMATIS punya akses Owner penuh. Isi
    // dengan NOMOR WHATSAPP KAMU SENDIRI (bisa juga lewat ENV
    // OWNER_NUMBER) lalu restart bot untuk berlaku.
    ownerNumber: '',

    // Daftar nomor Owner TAMBAHAN (selain `ownerNumber` di atas, dan
    // selain Creator yang sudah otomatis menjadi Owner). Cukup tulis
    // nomor tanpa "+", "@s.whatsapp.net", atau spasi — contoh:
    // '6281234567890'. Edit array ini langsung untuk menambah/menghapus
    // Owner, lalu restart bot.
    // (Owner juga bisa ditambah saat bot berjalan lewat command
    // `.addowner @tag` — boleh dipakai oleh Owner ATAUPUN Creator, dan
    // langsung aktif tanpa restart, beda dengan `ownerNumber`/
    // `ownerNumbers` di sini yang butuh restart bot setelah diedit.)
    ownerNumbers: [
        // '6281234567890',
        // '6289876543210',
    ],

    // Daftar nomor Premium. Sama formatnya seperti ownerNumbers di atas.
    // Owner dan Creator otomatis mendapat akses Premium juga, jadi tidak
    // perlu didaftarkan ulang di sini.
    premiumNumbers: [
        // '6281234567890',
    ],

    // ╔═══════════════════════════════════════╗
    // ║           METODE LOGIN                ║
    // ╚═══════════════════════════════════════╝
    // 'qr'      = tampilkan QR code untuk di-scan (default, lihat
    //             halaman web bot: buka URL Render kamu di browser).
    //             Cara pakai: WhatsApp -> Setelan -> Perangkat Tertaut
    //             -> Tautkan Perangkat -> arahkan kamera ke QR di web.
    // 'pairing' = pakai kode 8-digit berbasis nomor HP (nomorPairing di
    //             bawah / ENV NOMOR_HP), muncul di console/log, tanpa
    //             perlu scan kamera.
    // Bisa juga di-override lewat ENV LOGIN_METHOD tanpa edit file ini.
    loginMethod: 'qr',

    // Nomor HP untuk metode 'pairing' (format: 628xxx tanpa + atau
    // spasi). Bisa juga diisi lewat ENV variable NOMOR_HP. Tidak
    // dipakai sama sekali kalau loginMethod = 'qr'.
    nomorPairing: '628xxxxxxxxxx',

    // Path/URL thumbnail bot (tampil di setiap reply & di .menu).
    // Sudah otomatis pakai logo baru di media/thumbnail.png kalau file
    // itu ada (lihat lib/thumbnailSource.js) — nilai di bawah ini cuma
    // fallback kalau file lokalnya belum di-upload.
    thumbnailUrl: '',

    // URL thumbnail khusus command .daftar (registrasi RPG) — opsional.
    thumbnailDaftar: '',


    // ╔═══════════════════════════════════════╗
    // ║      PEMBAYARAN & SOSIAL MEDIA        ║
    // ╚═══════════════════════════════════════╝

    // Nomor e-wallet Owner — ditampilkan lewat command .pembayaran.
    // Isi dengan nomor e-wallet KAMU SENDIRI. Tidak perlu restart bot
    // untuk berlaku — cukup edit lalu simpan.
    nodana:  '',
    nogopay: '',
    noovo:   '',

    // Sosial media Owner — ditampilkan lewat command .sosmedowner.
    // Isi dengan akun kamu sendiri, atau kosongkan.
    ig:   '',
    tele: '',
    yt:   '',


    // ╔═══════════════════════════════════════╗
    // ║   CPANEL — JUALAN SLOT SERVER (v1-v5) ║
    // ╚═══════════════════════════════════════╝
    // Config buat fitur .cpanel (create/list/hapus server Pterodactyl,
    // role Owner/CEO/Reseller, dst — lihat commands/panelCommands.js &
    // lib/pterodactylReseller.js). Isi minimal domain + apikey per server
    // yang mau dipakai; server yang kosong otomatis dianggap nonaktif
    // (muncul sebagai "belum dikonfigurasi" kalau dipanggil). Fitur ini
    // sepenuhnya opsional — abaikan kalau kamu tidak jualan hosting.
    //
    //   domain  : URL panel Pterodactyl, contoh 'https://panel.contohmu.com'
    //             (TANPA garis miring "/" di akhir)
    //   apikey  : Application API Key (Admin → Application API di panel).
    //             WAJIB dicentang SEMUA permission saat membuat key ini.
    //   capikey : Client API Key (opsional, cadangan untuk fitur ke depan)
    //   egg     : ID egg yang dipakai buat server baru (Admin → Nests → Eggs)
    //   nestid  : ID nest tempat egg di atas berada
    //   location: ID lokasi/node tujuan deploy (Admin → Locations)
    pterodactyl: {
        server1: { domain: '', apikey: '', capikey: '', egg: '', nestid: '', location: '' },
        server2: { domain: '', apikey: '', capikey: '', egg: '', nestid: '', location: '' },
        server3: { domain: '', apikey: '', capikey: '', egg: '', nestid: '', location: '' },
        server4: { domain: '', apikey: '', capikey: '', egg: '', nestid: '', location: '' },
        server5: { domain: '', apikey: '', capikey: '', egg: '', nestid: '', location: '' },
    },


    // ╔═══════════════════════════════════════╗
    // ║   AI STYLE TRANSFER (.tochibi dkk)    ║
    // ╚═══════════════════════════════════════╝
    // Dipakai fitur .tobotak, .tochibi, .tofigura, .toghibli, .tohijab,
    // .tolego, .tohitam, .to3d, .toroblox, .tooilpainting (lihat
    // commands/mediaCommands3.js & lib/imageStyleTransfer.js).
    //
    // Fitur ini butuh model AI edit-gambar (Gemini image model lewat
    // Puter.js — layanan gratis, TAPI tetap butuh setup akun):
    //   1. Daftar akun gratis di https://puter.com
    //   2. Buka dashboard developer Puter, ambil Auth Token dari sana
    //   3. Isi tokennya di bawah, ATAU (lebih aman) isi lewat ENV
    //      PUTER_AUTH_TOKEN di Render/host kamu supaya tidak pernah
    //      tersimpan di kode yang kamu push ke GitHub.
    //
    // ⚠️ CATATAN JUJUR: paket npm-nya (@heyputer/puter.js) didokumentasikan
    // resmi buat browser, dan dokumentasi txt2img() bilang hasilnya berupa
    // HTMLImageElement (elemen DOM) — yang TIDAK ADA di Node.js server. Ada
    // jalur pemakaian Node.js resmi juga (pola init(token) di bawah), tapi
    // belum bisa dipastikan 100% txt2img() bekerja sama persis di Node
    // tanpa dicoba langsung. Kalau error/hasil gambar rusak, kemungkinan
    // besar ini penyebabnya — lihat catatan penanganan error di
    // lib/imageStyleTransfer.js.
    // KOSONG SENGAJA — jangan taruh token asli di sini kalau repo-nya
    // public; pakai ENV PUTER_AUTH_TOKEN.
    puterAuthToken: '',


    // ╔═══════════════════════════════════════╗
    // ║         PERILAKU & FITUR BOT          ║
    // ╚═══════════════════════════════════════╝

    // ── Auto-Read ────────────────────────────────────────────────────
    // Tandai pesan sebagai sudah dibaca (centang biru) sebelum balas
    autoRead:     true,

    // ── Auto-Typing ──────────────────────────────────────────────────
    // Tampilkan indikator "mengetik..." saat memproses command
    autoTyping:   true,
    // Rentang delay "mengetik" sebelum bot membalas (ms) — dibuat acak
    // di antara min–max biar terkesan lebih manusiawi. Untuk BENAR-BENAR
    // instan (skip indikator mengetik sepenuhnya, tanpa restart bot),
    // Owner/Creator/Admin grup tinggal kirim: .delay 0
    // (lihat lib/replyDelay.js). ".delay default" kembali ke rentang di
    // bawah ini kapan saja.
    typingDurationMin: 250,
    typingDurationMax: 500,

    // ── Online Status ─────────────────────────────────────────────────
    // true  = bot terlihat Online (bisa menguras baterai HP)
    // false = bot diam-diam berjalan (direkomendasikan)
    markOnlineOnConnect: false,

    // ── Notifikasi "Bot Terhubung" ──────────────────────────────────────
    // true = begitu pairing/QR BARU berhasil (bukan reconnect biasa), bot
    // kirim 1x pesan konfirmasi ke nomor bot sendiri (self-chat) — jadi
    // ada bukti di WA, bukan cuma di console. Set false kalau tidak mau
    // pesan ini sama sekali.
    notifyOnConnect: true,

    // ── Self-Bot Mode ─────────────────────────────────────────────────
    // Jika true, bot HANYA merespons pesan dari owner sendiri
    selfMode: false,

    // ── Footer Pesan ──────────────────────────────────────────────────
    // Teks yang muncul di bawah setiap reply (kosongkan jika tidak mau)
    replyFooter: '',


    // ╔═══════════════════════════════════════╗
    // ║         SISTEM COOLDOWN               ║
    // ╚═══════════════════════════════════════╝

    // Aktifkan sistem cooldown per user per command
    cooldownEnabled: true,
    // Jeda default antar command yang sama (ms) — 3 detik
    defaultCooldown: 3000,
    // Override per kategori (ms)
    cooldowns: {
        rpg:   8000,   // Command RPG (hunt, boss, dungeon, dll) — 8 detik
        admin: 2000,   // Command admin grup
        fun:   3000,   // Fun & game
        tools: 1500,   // Tools & kalkulator
        menu:   500,   // Menu & info
    },
    // Owner bypass cooldown
    ownerBypassCooldown: true,


    // ╔═══════════════════════════════════════╗
    // ║       RECONNECT & KONEKSI             ║
    // ╚═══════════════════════════════════════╝

    // Jeda awal sebelum reconnect pertama (detik)
    reconnectDelay: 5,
    // Delay eksponensial: setiap gagal, delay × faktor ini (max reconnectDelayMax)
    reconnectBackoffFactor: 1.5,
    // Delay maksimum reconnect (detik)
    reconnectDelayMax: 60,
    // 0 = coba reconnect selamanya
    maxReconnectAttempts: 0,

    // Seberapa sering folder session/ di-backup otomatis ke session-backup/
    // (menit). Backup hanya terjadi setelah koneksi berhasil terbuka, dan
    // hanya kalau session/ dalam keadaan valid (ada creds.json).
    sessionBackupIntervalMinutes: 30,


    // ╔═══════════════════════════════════════╗
    // ║         PROTEKSI GRUP                 ║
    // ╚═══════════════════════════════════════╝

    // Jumlah pesan maks dalam satu window sebelum dianggap spam
    spamMaxMessages: 6,
    // Durasi window spam (ms)
    spamWindowMs: 10_000,
    // Jumlah warn sebelum auto-kick (per default, bisa diubah per grup)
    defaultWarnLimit: 3,

    // ── Kata Toxic Default ────────────────────────────────────────────
    // Daftar kata yang diblokir anti-toxic (selain hardcoded)
    // Tambah kata-kata lain di sini sesuai kebutuhan grupmu
    extraToxicWords: [],

    // ── Anti-NSFW ────────────────────────────────────────────
    // Dipakai fitur .antinsfw on/off (lihat features/antiNsfw.js &
    // lib/nsfwDetector.js) — deteksi & hapus otomatis foto/video/stiker
    // dewasa yang masuk ke grup.
    //
    // Command manual `.hapusnsfw` (reply lalu hapus paksa) SELALU jalan
    // tanpa butuh apa pun di bawah ini. Tapi deteksi OTOMATIS (`.antinsfw
    // on`) baru bisa menghapus dengan sendirinya kalau apiKey sudah diisi:
    //   1. Daftar akun gratis di https://console.pixlab.io
    //   2. Ambil API key dari dashboard
    //   3. Isi di bawah (atau ENV NSFW_API_KEY, lebih aman kalau setting.js
    //      ini pernah kamu bagikan ke orang lain)
    nsfwDetection: {
        apiKey:       '',        // API key PixLab (kosongkan kalau pakai customApiUrl)
        customApiUrl: '',        // opsional: URL API kompatibel lain (lihat kontrak di lib/nsfwDetector.js)
        threshold:    0.6,       // 0.0–1.0 — makin kecil makin sensitif/gampang kena hapus
        timeoutMs:    15000,     // batas waktu tunggu API sebelum dianggap gagal (fail-open)
    },


    // ╔═══════════════════════════════════════╗
    // ║             LOGGING                   ║
    // ╚═══════════════════════════════════════╝

    // Tampilkan log setiap pesan masuk di console
    logMessages:  true,
    // Tampilkan log setiap command dijalankan
    logCommands:  true,
    // Log level Baileys — 'silent' hampir selalu yang terbaik untuk prod
    baileysLogLevel: 'silent',

};

export default settings;
