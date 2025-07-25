
// Gestione avanzata della rete per Marcus
const http = require('http');
const https = require('https');

module.exports = {
  fetchData: function(url, callback) {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (resp) => {
      let data = '';
      resp.on('data', (chunk) => { data += chunk; });
      resp.on('end', () => { callback(null, data); });
    }).on("error", (err) => {
      callback(err, null);
    });
  }
};
