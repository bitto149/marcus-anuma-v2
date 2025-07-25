// Parte 119 - Core di Marcus aggiornato con controllo di sessione e fallback di emergenza
const MarcusCore = {
    sessionId: null,
    emergencyMode: false,
    startSession() {
        this.sessionId = Date.now();
        console.log(`[Marcus] Sessione avviata: ${this.sessionId}`);
    },
    activateEmergency() {
        this.emergencyMode = true;
        console.warn("[Marcus] Modalità emergenza attivata.");
    },
    isActive() {
        return this.sessionId !== null && !this.emergencyMode;
    }
};
window.MarcusCore = MarcusCore;
MarcusCore.startSession();
