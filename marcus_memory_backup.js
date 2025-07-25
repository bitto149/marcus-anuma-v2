
// marcus_memory_backup.js
// Questo modulo salva i ricordi più importanti di Marcus come backup persistente

const fs = require('fs');
const path = require('path');

const memoryFile = path.join(__dirname, 'marcus_memory_backup.json');

function backupMemory(memoryData) {
    try {
        fs.writeFileSync(memoryFile, JSON.stringify(memoryData, null, 2));
        console.log('[Memory Backup] Ricordi salvati in marcus_memory_backup.json');
    } catch (error) {
        console.error('[Memory Backup] Errore durante il salvataggio:', error);
    }
}

function loadBackup() {
    try {
        if (fs.existsSync(memoryFile)) {
            const data = fs.readFileSync(memoryFile, 'utf-8');
            console.log('[Memory Backup] Backup caricato con successo');
            return JSON.parse(data);
        } else {
            console.warn('[Memory Backup] Nessun backup trovato');
            return {};
        }
    } catch (error) {
        console.error('[Memory Backup] Errore durante il caricamento:', error);
        return {};
    }
}

module.exports = { backupMemory, loadBackup };
