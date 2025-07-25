
// Sistema di aggiornamento dinamico dei moduli Marcus
const fs = require('fs');
const https = require('https');

function downloadUpdate(url, dest, callback) {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close(callback);
            console.log('[Marcus] Aggiornamento scaricato:', dest);
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => {});
        console.error('[Marcus] Errore aggiornamento:', err.message);
    });
}

module.exports = { downloadUpdate };
