// Logger module - Part 77 of Marcus
const fs = require('fs');
const path = require('path');

class Logger {
    constructor(logFile = 'marcus_log.txt') {
        this.logFile = path.resolve(__dirname, logFile);
    }

    log(message) {
        const timestamp = new Date().toISOString();
        fs.appendFileSync(this.logFile, `[${timestamp}] ${message}\n`);
    }
}

module.exports = Logger;
