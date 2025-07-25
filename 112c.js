// 112c - Modulo di Controllo Azioni Esterne
export function executeCommand(command) {
    switch(command) {
        case 'start-analysis':
            logger('Inizio analisi...');
            break;
        case 'shutdown':
            logger('Sistema in spegnimento...');
            break;
        default:
            logger('Comando non riconosciuto: ' + command, 'warn');
    }
}
