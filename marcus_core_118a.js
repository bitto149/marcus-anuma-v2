
// marcus_core_118a.js
// Integrazione della comunicazione crittografata
const crypto = require('crypto');
function encryptMessage(message, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}
module.exports = { encryptMessage };
