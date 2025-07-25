
// marcus_security.js
// Modulo per la sicurezza e crittografia base

const crypto = require('crypto');
const fs = require('fs');

const Security = {
  encrypt: (text, password) => {
    const cipher = crypto.createCipher('aes-256-cbc', password);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  },

  decrypt: (encrypted, password) => {
    const decipher = crypto.createDecipher('aes-256-cbc', password);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  },

  secureSave: (filename, data, password) => {
    const encrypted = Security.encrypt(data, password);
    fs.writeFileSync(filename, encrypted);
  },

  secureRead: (filename, password) => {
    const encrypted = fs.readFileSync(filename, 'utf8');
    return Security.decrypt(encrypted, password);
  }
};

module.exports = Security;
