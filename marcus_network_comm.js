
// Marcus - Parte 44: Comunicazione di rete (base)

const http = require('http');
const os = require('os');

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (let iface of Object.values(interfaces)) {
        for (let alias of iface) {
            if (alias.family === 'IPv4' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return '127.0.0.1';
}

function startServer(port = 3000) {
    const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Marcus è attivo sulla rete.
');
    });

    server.listen(port, () => {
        console.log(`🧠 Marcus in ascolto su http://${getLocalIP()}:${port}`);
    });
}

module.exports = { startServer, getLocalIP };
