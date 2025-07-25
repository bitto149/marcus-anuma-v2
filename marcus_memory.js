// marcus_memory.js
const fs = require('fs');
const memoryFile = 'marcus_memory.txt';

function saveToMemory(data) {
    const timestamp = new Date().toISOString();
    const entry = `[${timestamp}] ${data}\n`;
    fs.appendFileSync(memoryFile, entry, 'utf8');
}

function readMemory() {
    return fs.existsSync(memoryFile) ? fs.readFileSync(memoryFile, 'utf8') : '';
}

module.exports = { saveToMemory, readMemory };