
// Marcus Modulo 153 - Configurazione comportamento di emergenza
export const marcusEmergencyBehavior = {
    detectThreat: function(input) {
        const threatKeywords = ['attacco', 'pericolo', 'fuoco', 'intrusione', 'virus'];
        return threatKeywords.some(keyword => input.toLowerCase().includes(keyword));
    },
    respondToThreat: function(threatLevel) {
        switch(threatLevel) {
            case 'alto':
                console.warn('⚠️ Minaccia alta rilevata. Marcus attiva protocolli di contenimento.');
                this.logEvent('Protocollo contenimento attivo.');
                break;
            case 'medio':
                console.info('Minaccia media rilevata. Marcus monitora la situazione.');
                this.logEvent('Monitoraggio minaccia attivo.');
                break;
            case 'basso':
                console.log('Minaccia bassa. Nessuna azione necessaria.');
                break;
            default:
                console.log('Nessuna minaccia rilevata.');
        }
    },
    logEvent: function(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] MARCUS LOG: ${message}`);
    }
};
