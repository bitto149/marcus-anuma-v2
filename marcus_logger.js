
// Logger di Marcus - Parte 91
const fs = require('fs');
const path = require('path');

class MarcusLogger {
    constructor(logDir = './logs') {
        this.logDir = logDir;
        if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}\n`;
        const logFile = path.join(this.logDir, `${this.getCurrentDate()}.log`);
        fs.appendFileSync(logFile, logMessage);
    }

    getCurrentDate() {
        const date = new Date();
        return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    }
}

module.exports = MarcusLogger;
