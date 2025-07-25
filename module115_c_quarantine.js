
// module115_c_quarantine.js
// Moves potentially dangerous files to a quarantine directory

const fs = require('fs');
const path = require('path');

function quarantineFile(filePath, quarantineDir = './quarantine') {
    if (!fs.existsSync(quarantineDir)) {
        fs.mkdirSync(quarantineDir);
    }
    const fileName = path.basename(filePath);
    const newLocation = path.join(quarantineDir, fileName);
    fs.rename(filePath, newLocation, (err) => {
        if (err) {
            console.error(`[QUARANTINE] Failed to move ${filePath}:`, err);
        } else {
            console.log(`[QUARANTINE] File moved to ${newLocation}`);
        }
    });
}

module.exports = { quarantineFile };
