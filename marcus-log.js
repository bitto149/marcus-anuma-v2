// marcus-log.js
const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, 'marcus_logs.txt');

function logEvent(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(logFile, logMessage, 'utf8');
    console.log("Log:", logMessage.trim());
}

module.exports = { logEvent };