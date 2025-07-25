// Marcus Advanced Logger - Part 45
const fs = require('fs');
const path = require('path');

class AdvancedLogger {
    constructor(logDir = './logs') {
        this.logDir = logDir;
        if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
        this.logFile = path.join(logDir, `log_${new Date().toISOString().split('T')[0]}.txt`);
    }

    log(message, level = "INFO") {
        const timestamp = new Date().toISOString();
        const formatted = `[${timestamp}] [${level}] ${message}\n`;
        fs.appendFileSync(this.logFile, formatted);
        console.log(formatted.trim());
    }

    error(message) {
        this.log(message, "ERROR");
    }

    warn(message) {
        this.log(message, "WARN");
    }

    debug(message) {
        this.log(message, "DEBUG");
    }
}

module.exports = AdvancedLogger;