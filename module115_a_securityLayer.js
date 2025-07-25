
// module115_a_securityLayer.js
// Security layer for Marcus to detect suspicious behavior or file changes

const fs = require('fs');
const crypto = require('crypto');

function monitorFile(filePath) {
    const initialHash = getFileHash(filePath);
    fs.watchFile(filePath, (curr, prev) => {
        const newHash = getFileHash(filePath);
        if (initialHash !== newHash) {
            console.log(`[SECURITY] ALERT: File changed: ${filePath}`);
        }
    });
}

function getFileHash(filePath) {
    try {
        const fileBuffer = fs.readFileSync(filePath);
        return crypto.createHash('sha256').update(fileBuffer).digest('hex');
    } catch (err) {
        return '';
    }
}

module.exports = { monitorFile };
