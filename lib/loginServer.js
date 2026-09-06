// ═══════════════════════════════════════════════════════════════════
//  LOGINSERVER.JS — halaman web kecil untuk nampilin QR code login
// ═══════════════════════════════════════════════════════════════════
//  KENAPA INI ADA: Render (dan kebanyakan host "Web Service") butuh
//  proses yang bind ke satu port HTTP supaya health check-nya lolos —
//  tanpa ini, Render akan anggap deploy gagal walaupun bot WhatsApp-nya
//  sendiri jalan normal. File ini bikin server HTTP super ringan
//  (tanpa dependency tambahan selain paket `qrcode`) yang:
//
//    1. Selalu balas 200 OK di path apapun -> Render health check lolos
//       dari detik pertama, sebelum WhatsApp sempat konek sama sekali.
//    2. Nampilin QR code yang lagi aktif (kalau statusnya 'qr') sebagai
//       halaman HTML simpel yang auto-refresh tiap 5 detik — buka URL
//       Render kamu di browser HP/laptop, arahkan kamera WhatsApp ke
//       situ, selesai.
//    3. Nampilin status "Sudah Terhubung ✅" begitu bot berhasil login,
//       supaya jelas kalau QR-nya sudah tidak perlu di-scan lagi.
//
//  Dipanggil dari index.js: startLoginServer() sekali di awal proses,
//  lalu setLoginQR()/setLoginStatus() dipanggil dari connection.update
//  listener setiap kali statusnya berubah.
// ═══════════════════════════════════════════════════════════════════

import http from 'http';
import QRCode from 'qrcode';
import settings from '../setting.js';

let latestQR = null;          // string QR mentah dari Baileys, atau null
let status = 'starting';      // 'starting' | 'qr' | 'connected' | 'error'
let statusMessage = '';
let serverStarted = false;

export function setLoginQR(qrString) {
    latestQR = qrString;
    status = 'qr';
    statusMessage = '';
}

export function setLoginStatus(newStatus, message = '') {
    status = newStatus;
    statusMessage = message;
    if (newStatus === 'connected') latestQR = null;
}

function page(bodyHtml, refreshSeconds = 5) {
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${refreshSeconds ? `<meta http-equiv="refresh" content="${refreshSeconds}">` : ''}
<title>${settings.botName || 'SMILEY CYMOR MD'}</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    background: radial-gradient(circle at 50% 0%, #241a3d 0%, #0d0b1a 60%, #060512 100%);
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f5f3ff;
    padding: 24px;
  }
  .card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255, 200, 60, 0.25);
    border-radius: 24px;
    padding: 36px 32px;
    max-width: 420px;
    width: 100%;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0,0,0,0.45), 0 0 40px rgba(255,196,0,0.06);
  }
  .badge {
    display: inline-block; font-size: 13px; letter-spacing: 2px; font-weight: 700;
    text-transform: uppercase; color: #1a1424; background: linear-gradient(135deg,#ffd76a,#ff9f43);
    padding: 6px 16px; border-radius: 999px; margin-bottom: 18px;
  }
  h1 {
    font-size: 24px; margin: 0 0 6px; font-weight: 800;
    background: linear-gradient(135deg,#ffe08a,#ff9f43 55%,#ff6ec7);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .tagline { font-size: 13px; color: #b9b2d6; margin-bottom: 24px; }
  .qr-box {
    background: #fff; padding: 16px; border-radius: 18px; display: inline-block; margin-bottom: 20px;
    box-shadow: 0 10px 30px rgba(255,196,0,0.15);
  }
  .qr-box img { display: block; width: 260px; height: 260px; }
  .status { font-size: 15px; font-weight: 600; margin-bottom: 8px; }
  .status.qr { color: #ffd76a; }
  .status.connected { color: #6bffb0; }
  .status.starting, .status.error { color: #9d97c4; }
  .steps { text-align: left; font-size: 13px; line-height: 1.6; color: #cfc9ea; margin: 18px 0 0; padding-left: 20px; }
  .footer { margin-top: 24px; font-size: 11px; color: #6f6893; letter-spacing: 1px; }
  .spinner {
    width: 40px; height: 40px; border-radius: 50%; margin: 12px auto 4px;
    border: 4px solid rgba(255,255,255,0.12); border-top-color: #ff9f43;
    animation: spin 1s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>
</head>
<body>
  <div class="card">
    <span class="badge">Legendary Edition</span>
    <h1>${settings.botName || 'SMILEY CYMOR MD'}</h1>
    <div class="tagline">${settings.motto ? `"${settings.motto}"` : (settings.botTagline || '')}</div>
    ${bodyHtml}
    <div class="footer">SMILEY CYMOR MD &middot; Powered by Baileys</div>
  </div>
</body>
</html>`;
}

function renderBody() {
    if (status === 'connected') {
        return `
      <div class="status connected">✅ Sudah terhubung ke WhatsApp!</div>
      <p style="color:#cfc9ea; font-size:13px;">Bot sedang aktif dan siap menerima perintah.<br>Ketik <b>.menu</b> di chat WhatsApp untuk melihat semua fitur.</p>`;
    }
    if (status === 'qr' && latestQR) {
        return `
      <div class="status qr">📲 Scan QR ini untuk menautkan WhatsApp</div>
      <div class="qr-box"><img src="/qr.png?t=${Date.now()}" alt="QR Code"></div>
      <ol class="steps">
        <li>Buka WhatsApp di HP kamu</li>
        <li>Ketuk <b>Setelan</b> → <b>Perangkat Tertaut</b></li>
        <li>Ketuk <b>Tautkan Perangkat</b></li>
        <li>Arahkan kamera ke QR di atas</li>
      </ol>
      <p style="color:#8880ad; font-size:11px; margin-top:14px;">Halaman ini otomatis refresh tiap 5 detik — QR berganti otomatis kalau kedaluwarsa.</p>`;
    }
    if (status === 'error') {
        return `
      <div class="status error">⚠️ ${statusMessage || 'Terjadi masalah saat menyiapkan koneksi.'}</div>
      <div class="spinner"></div>
      <p style="color:#8880ad; font-size:12px;">Mencoba lagi otomatis...</p>`;
    }
    return `
      <div class="status starting">⏳ Menyiapkan koneksi WhatsApp...</div>
      <div class="spinner"></div>
      <p style="color:#8880ad; font-size:12px;">QR code akan muncul di sini dalam beberapa detik.</p>`;
}

export function startLoginServer() {
    if (serverStarted) return;
    serverStarted = true;

    const port = process.env.PORT || 3000;

    const server = http.createServer(async (req, res) => {
        try {
            if (req.url && req.url.startsWith('/qr.png')) {
                if (!latestQR) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('No QR available right now');
                    return;
                }
                const buffer = await QRCode.toBuffer(latestQR, { width: 512, margin: 1 });
                res.writeHead(200, { 'Content-Type': 'image/png', 'Cache-Control': 'no-store' });
                res.end(buffer);
                return;
            }

            if (req.url && (req.url === '/health' || req.url === '/healthz')) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('ok');
                return;
            }

            // Semua path lain (termasuk "/") -> halaman status/QR.
            // Selalu balas 200 supaya health check Render lolos dari
            // detik pertama proses hidup, apapun status WhatsApp-nya.
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(page(renderBody()));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal error: ' + err.message);
        }
    });

    server.listen(port, () => {
        console.log(`\n🌐 Halaman login/QR aktif di port ${port} (buka URL Render kamu di browser untuk scan QR)\n`);
    });

    return server;
}
