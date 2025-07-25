
// marcus-memory.js
const fs = require('fs');
const path = './memory.txt';

function saveMemory(entry) {
    const timestamp = new Date().toISOString();
    const log = `[${timestamp}] ${entry}\n`;
    fs.appendFile(path, log, (err) => {
        if (err) console.error('Errore nel salvataggio memoria:', err);
    });
}

function readMemory(callback) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error('Errore lettura memoria:', err);
            callback('');
        } else {
            callback(data);
        }
    });
}

module.exports = { saveMemory, readMemory };
