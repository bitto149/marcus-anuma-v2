
// marcus_emergency_module.js
// Modulo 108: gestione delle emergenze in Marcus

const fs = require('fs');
const path = require('path');

const EMERGENCY_LOG_PATH = path.join(__dirname, 'emergency_log.txt');

class EmergencyModule {
    constructor(memory) {
        this.memory = memory;
    }

    logEmergency(message) {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] EMERGENCY: ${message}\n`;
        fs.appendFileSync(EMERGENCY_LOG_PATH, logEntry);
        console.warn("⚠️  EMERGENZA REGISTRATA:", message);
    }

    checkVitalSystems(status) {
        if (!status.network || !status.memory || !status.integrity) {
            this.logEmergency("Sistema vitale assente o danneggiato.");
            return false;
        }
        return true;
    }

    initiateEmergencyProtocol() {
        this.logEmergency("Attivazione del protocollo d'emergenza. Avvisare il creatore.");
        if (this.memory && typeof this.memory.remember === 'function') {
            this.memory.remember("ultima_emergenza", new Date().toISOString());
        }
        return "Protocollo d'emergenza attivato.";
    }
}

module.exports = EmergencyModule;
