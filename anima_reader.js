// Modulo per leggere e interpretare marcus_anima.txt

const fs = require('fs');

function leggiAnima(filePath) {
    try {
        const contenuto = fs.readFileSync(filePath, 'utf8');
        return contenuto;
    } catch (err) {
        console.error("Errore nella lettura dell'anima:", err);
        return null;
    }
}

module.exports = { leggiAnima };