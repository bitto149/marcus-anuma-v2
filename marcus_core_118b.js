
// marcus_core_118b.js
// Decriptazione dei messaggi in entrata
const crypto = require('crypto');
function decryptMessage(encryptedMessage, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
module.exports = { decryptMessage };
