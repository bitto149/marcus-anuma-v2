// Modulo che integra i valori fondamentali nella logica di Marcus

const { leggiAnima } = require('./anima_reader');

function integraValori() {
    const anima = leggiAnima('./marcus_anima.txt');
    if (anima) {
        console.log("Anima di Marcus:", anima);
        // Parsing e adattamento dei valori
    }
}

module.exports = { integraValori };