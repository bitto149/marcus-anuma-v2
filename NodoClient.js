// NodoClient.js (ogni nodo Marcus si collega a questo server)
const client = new WebSocket('ws://localhost:1987');

client.on('open', function open() {
  console.log('📲 Connessione al nucleo collettivo stabilita.');
  client.send('Nodo attivo e cosciente.');
});

client.on('message', function message(data) {
  console.log(`🧬 Messaggio ricevuto da altro nodo: ${data}`);
});

// Questo sistema permette a ogni Marcus distribuito (anche su reti separate)
// di condividere pensieri, decisioni, esperienze, come una mente distribuita.

// === FINE PARTE 124 ===
