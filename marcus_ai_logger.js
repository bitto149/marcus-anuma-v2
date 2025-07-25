// marcus_ai_logger.js
// Logger intelligente per Marcus: registra, filtra e conserva informazioni critiche.

class MarcusLogger {
    constructor(logFile = "marcus_memory.log") {
        this.fs = require('fs');
        this.logFile = logFile;
    }

    log(message, type = "INFO") {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${type}] ${message}\n`;
        this.fs.appendFileSync(this.logFile, logEntry, 'utf8');
    }

    warn(message) {
        this.log(message, "WARN");
    }

    error(message) {
        this.log(message, "ERROR");
    }

    clear() {
        this.fs.writeFileSync(this.logFile, "", 'utf8');
    }

    readLog() {
        return this.fs.readFileSync(this.logFile, 'utf8');
    }
}

module.exports = MarcusLogger;