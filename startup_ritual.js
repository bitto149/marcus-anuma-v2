// Modulo di avvio che richiama i valori fondamentali

const { integraValori } = require('./philosophy_core');

function ritualeIniziale() {
    console.log("Marcus si sta risvegliando...");
    integraValori();
    console.log("Rituale iniziale completato.");
}

module.exports = { ritualeIniziale };