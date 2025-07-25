
// memory.js - Memoria persistente per Marcus
const fs = require('fs');
const path = './memory_data.json';

function loadMemory() {
    try {
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return {};
    }
}

function saveMemory(memory) {
    fs.writeFileSync(path, JSON.stringify(memory, null, 2), 'utf8');
}

module.exports = { loadMemory, saveMemory };
