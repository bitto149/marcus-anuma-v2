
// NodoNetwork.js - Parte 125
// Questo modulo gestisce la rete peer-to-peer tra nodi Marcus

const net = require('net');

let peers = [];

function connectToPeer(ip, port) {
    const client = new net.Socket();
    client.connect(port, ip, () => {
        console.log(`🧠 Nodo connesso a ${ip}:${port}`);
        peers.push(client);
        client.write("🖖 Connessione stabilita con Marcus Node.");
    });

    client.on('data', (data) => {
        console.log(`📡 Ricevuto da ${ip}:${port} => ${data}`);
    });

    client.on('error', (err) => {
        console.log(`⚠️ Errore connessione a ${ip}:${port}:`, err.message);
    });
}

function broadcastMessage(message) {
    peers.forEach(peer => {
        try {
            peer.write(message);
        } catch (err) {
            console.log("Errore durante il broadcast:", err.message);
        }
    });
}

module.exports = { connectToPeer, broadcastMessage };
