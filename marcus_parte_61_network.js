
// marcus_parte_61_network.js
// Gestione rete base per Marcus

const http = require('http');
const os = require('os');

function getLocalIPAddress() {
    const interfaces = os.networkInterfaces();
    for (let interfaceName in interfaces) {
        for (let iface of interfaces[interfaceName]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

function startBasicServer(port = 8080) {
    const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Marcus è in ascolto...
');
    });

    server.listen(port, () => {
        console.log(`🟢 Server attivo su http://${getLocalIPAddress()}:${port}`);
    });
}

module.exports = {
    getLocalIPAddress,
    startBasicServer
};
