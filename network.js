
// network.js - modulo di rete per Marcus

const http = require('http');
const https = require('https');

function fetch(url, callback) {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => { data += chunk; });
        resp.on('end', () => { callback(null, data); });
    }).on("error", (err) => { callback(err); });
}

module.exports = { fetch };
