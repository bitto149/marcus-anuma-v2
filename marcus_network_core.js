
// marcus_network_core.js - Parte 92
// Modulo di rete base per Marcus - invio e ricezione sicura

const https = require('https');

function sendDataToServer(data, callback) {
    const options = {
        hostname: 'your-server.com',
        port: 443,
        path: '/api/marcus',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = https.request(options, res => {
        let responseData = '';
        res.on('data', d => responseData += d);
        res.on('end', () => callback(null, responseData));
    });

    req.on('error', error => callback(error, null));
    req.write(data);
    req.end();
}

module.exports = { sendDataToServer };
