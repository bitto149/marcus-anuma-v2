
// network-logger.js
const fs = require('fs');
const http = require('http');

function logNetworkActivity(data) {
    const logEntry = `[${new Date().toISOString()}] ${data}\n`;
    fs.appendFile('network_log.txt', logEntry, err => {
        if (err) console.error('Errore nel salvataggio log di rete:', err);
    });
}

function sendLogToServer(serverUrl, data) {
    const req = http.request(serverUrl, { method: 'POST' }, res => {
        res.on('data', chunk => {
            console.log('Risposta server:', chunk.toString());
        });
    });

    req.on('error', err => {
        console.error('Errore invio log:', err);
    });

    req.write(JSON.stringify(data));
    req.end();
}

module.exports = { logNetworkActivity, sendLogToServer };
