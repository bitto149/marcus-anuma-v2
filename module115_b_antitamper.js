
// module115_b_antitamper.js
// Prevents unauthorized modification of Marcus components

const fs = require('fs');

function checkIntegrity(fileList) {
    let allGood = true;
    for (let file of fileList) {
        try {
            const stats = fs.statSync(file);
            if (stats.mode !== 33206) { // Expected mode for Windows
                console.log(`[ANTITAMPER] ALERT: Unexpected mode for file: ${file}`);
                allGood = false;
            }
        } catch (e) {
            console.log(`[ANTITAMPER] ERROR: Cannot access file: ${file}`);
            allGood = false;
        }
    }
    return allGood;
}

module.exports = { checkIntegrity };
