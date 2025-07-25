// config_updater.js
// Modulo per aggiornare i file di configurazione di Marcus in tempo reale

const fs = require('fs');
const path = require('path');

function updateConfig(configPath, updates) {
    try {
        let config = JSON.parse(fs.readFileSync(configPath));
        for (let key in updates) {
            config[key] = updates[key];
        }
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log("Configurazione aggiornata con successo.");
    } catch (err) {
        console.error("Errore nell'aggiornamento della configurazione:", err);
    }
}

module.exports = updateConfig;
