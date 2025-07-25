// logger_sync_module.js - Parte 72
// Modulo Logger sincronizzato con archiviazione locale e invio remoto

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const LOG_PATH = path.join(__dirname, 'marcus_logs.txt');

function logEvent(message) {
    const timestamp = new Date().toISOString();
    const entry = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(LOG_PATH, entry);
    console.log(entry.trim());
    sendToServer(entry);
}

async function sendToServer(logData) {
    try {
        await axios.post('https://your-server-url.com/api/logs', { log: logData });
    } catch (err) {
        console.error('Errore invio log remoto:', err.message);
    }
}

module.exports = { logEvent };
