
// marcus_updater.js
const fs = require('fs');
const https = require('https');

function downloadFile(url, dest, cb) {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close(cb);
        });
    }).on('error', (err) => {
        fs.unlink(dest);
        if (cb) cb(err.message);
    });
}

function checkForUpdate(currentVersion, updateUrl, onUpdateFound) {
    https.get(updateUrl + '/version.json', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            try {
                const remoteVersion = JSON.parse(data);
                if (remoteVersion.version !== currentVersion) {
                    onUpdateFound(remoteVersion);
                }
            } catch (e) {
                console.error("Error parsing version info:", e);
            }
        });
    }).on('error', (e) => {
        console.error("Failed to check update:", e);
    });
}

module.exports = { downloadFile, checkForUpdate };
