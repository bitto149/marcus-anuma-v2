
// Marcus 84A - Modulo rete locale
const net = require('net');

function startLocalServer(port = 8080) {
    const server = net.createServer(socket => {
        socket.on('data', data => {
            console.log("Ricevuto:", data.toString());
            socket.write("Marcus: Ho ricevuto il comando.");
        });
    });
    server.listen(port, () => {
        console.log(`Marcus in ascolto su porta ${port}`);
    });
}

module.exports = { startLocalServer };
