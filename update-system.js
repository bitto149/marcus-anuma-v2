
// Sistema di aggiornamento Marcus
const fs = require('fs');
const https = require('https');

function checkForUpdates(currentVersion, callback) {
    const remoteURL = "https://example.com/marcus/version.json";
    https.get(remoteURL, (res) => {
        let data = "";
        res.on("data", chunk => data += chunk);
        res.on("end", () => {
            const remote = JSON.parse(data);
            if (remote.version !== currentVersion) {
                callback(null, { updateAvailable: true, remote });
            } else {
                callback(null, { updateAvailable: false });
            }
        });
    }).on("error", err => callback(err, null));
}

module.exports = { checkForUpdates };
