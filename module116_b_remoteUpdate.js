// module116_b_remoteUpdate.js
// Aggiorna Marcus in modo remoto

const fs = require('fs');
const https = require('https');

function remoteUpdate(url, destinationPath, callback) {
  const file = fs.createWriteStream(destinationPath);
  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(callback);
    });
  }).on("error", err => {
    fs.unlink(destinationPath, () => {});
    callback(err.message);
  });
}

module.exports = remoteUpdate;
