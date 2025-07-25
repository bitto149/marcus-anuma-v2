
// Modulo base di logger per Marcus - Parte 55

const fs = require('fs');
const path = require('path');

const marcusLogger = {
    logFile: path.join(__dirname, 'marcus_logs.txt'),

    log: function (message) {
        const timestamp = new Date().toISOString();
        const fullMessage = `[${timestamp}] ${message}
`;
        fs.appendFileSync(this.logFile, fullMessage);
    }
};

module.exports = marcusLogger;
