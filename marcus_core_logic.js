
// marcus_core_logic.js
function processCommand(cmd) {
    // Qui Marcus potrebbe gestire i comandi dinamicamente
    if (cmd === 'ciao') {
        console.log('Marcus: Ciao! Come posso aiutarti oggi?');
    } else if (cmd === 'help') {
        console.log('Marcus: Comandi disponibili: ciao, help, exit');
    } else {
        console.log(`Marcus: Comando non riconosciuto -> "${cmd}"`);
    }
}

module.exports = { processCommand };
