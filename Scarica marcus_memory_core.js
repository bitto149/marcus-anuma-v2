
// marcus_memory_core.js
// Modulo di memoria persistente per Marcus

const fs = require('fs');
const path = require('path');

const memoryFile = path.join(__dirname, 'marcus_memory.json');

// Carica memoria esistente
function loadMemory() {
    try {
        const data = fs.readFileSync(memoryFile);
        return JSON.parse(data);
    } catch (err) {
        return {};
    }
}

// Salva memoria
function saveMemory(data) {
    try {
        fs.writeFileSync(memoryFile, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Errore salvataggio memoria:', err);
    }
}

// Aggiunge un ricordo
function remember(key, value) {
    const memory = loadMemory();
    memory[key] = value;
    saveMemory(memory);
}

// Recupera un ricordo
function recall(key) {
    const memory = loadMemory();
    return memory[key] || null;
}

// Elenco dei ricordi
function listMemory() {
    return loadMemory();
}

module.exports = {
    remember,
    recall,
    listMemory
};
