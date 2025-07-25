
// Gestione locale della memoria di Marcus
const fs = require('fs');
const path = require('path');

const STORAGE_PATH = path.join(__dirname, 'marcus_data.json');

function saveMemory(data) {
    fs.writeFileSync(STORAGE_PATH, JSON.stringify(data, null, 2));
    console.log('[Marcus] Memoria salvata.');
}

function loadMemory() {
    if (!fs.existsSync(STORAGE_PATH)) return {};
    return JSON.parse(fs.readFileSync(STORAGE_PATH));
}

module.exports = { saveMemory, loadMemory };
