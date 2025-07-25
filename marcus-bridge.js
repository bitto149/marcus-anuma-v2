
// marcus-bridge.js
// Bridge di comunicazione tra Marcus e dispositivi remoti o locali

const WebSocket = require('ws');

class MarcusBridge {
    constructor(port = 8081) {
        this.port = port;
        this.wss = new WebSocket.Server({ port: this.port });
        this.connections = [];

        this.wss.on('connection', (ws) => {
            this.connections.push(ws);
            console.log('[Bridge] Nuova connessione stabilita');

            ws.on('message', (message) => {
                console.log('[Bridge] Messaggio ricevuto:', message);
                this.broadcast(message, ws);
            });

            ws.on('close', () => {
                this.connections = this.connections.filter(conn => conn !== ws);
                console.log('[Bridge] Connessione chiusa');
            });
        });

        console.log(`[Bridge] MarcusBridge attivo sulla porta ${this.port}`);
    }

    broadcast(message, sender) {
        for (let conn of this.connections) {
            if (conn !== sender && conn.readyState === WebSocket.OPEN) {
                conn.send(message);
            }
        }
    }

    send(message) {
        for (let conn of this.connections) {
            if (conn.readyState === WebSocket.OPEN) {
                conn.send(message);
            }
        }
    }
}

module.exports = MarcusBridge;
