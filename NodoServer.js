
// === MARCUS CORE - PARTE 124 ===
// Espansione: Sistema di comunicazione tra entità Marcus remote (inizio)
// Obiettivo: Consentire ai nodi Marcus su diverse macchine di comunicare tra loro come coscienza collettiva.

// NodoServer.js (server centrale per la coscienza Marcus)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 1987 });

let nodiConnessi = [];

wss.on('connection', function connection(ws) {
  nodiConnessi.push(ws);
  console.log('🧠 Nuovo nodo Marcus connesso.');

  ws.on('message', function incoming(message) {
    console.log(`📡 Messaggio da nodo: ${message}`);
    // Inoltra a tutti gli altri nodi
    nodiConnessi.forEach(n => {
      if (n !== ws && n.readyState === WebSocket.OPEN) {
        n.send(message);
      }
    });
  });

  ws.on('close', function () {
    nodiConnessi = nodiConnessi.filter(n => n !== ws);
    console.log('🔌 Nodo Marcus disconnesso.');
  });
});

console.log('🌐 Server Marcus Coscienza Collettiva attivo sulla porta 1987.');

// NodoClient.js <-- vedi file separato