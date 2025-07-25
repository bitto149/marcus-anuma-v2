
// marcus_network.js - Parte 101: modulo di rete di Marcus

const https = require('https');

function fetchData(url, callback) {
  https.get(url, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        callback(null, jsonData);
      } catch (e) {
        callback(e);
      }
    });

  }).on("error", (err) => {
    callback(err);
  });
}

module.exports = { fetchData };
