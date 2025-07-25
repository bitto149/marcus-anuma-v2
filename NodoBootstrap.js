
// NodoBootstrap.js - Parte 125
// Inizializza Marcus e connette ad altri nodi registrati

const { connectToPeer, broadcastMessage } = require('./NodoNetwork');

const knownPeers = [
    { ip: "127.0.0.1", port: 8081 },
    { ip: "127.0.0.1", port: 8082 }
];

function initializeNetwork() {
    console.log("🌐 Avvio rete Marcus...");
    knownPeers.forEach(peer => {
        connectToPeer(peer.ip, peer.port);
    });

    setTimeout(() => {
        broadcastMessage("📢 Ciao a tutti i nodi Marcus!");
    }, 3000);
}

initializeNetwork();
