
// marcus_core_118c.js
// Comunicazione sicura con server
const net = require('net');
const { encryptMessage } = require('./marcus_core_118a');
const { decryptMessage } = require('./marcus_core_118b');
const SECRET_KEY = 'marcus_super_secure_key';

const client = new net.Socket();
client.connect(3000, '127.0.0.1', () => {
  const msg = encryptMessage('Ciao, sono Marcus.', SECRET_KEY);
  client.write(msg);
});

client.on('data', (data) => {
  const decrypted = decryptMessage(data.toString(), SECRET_KEY);
  console.log('Ricevuto:', decrypted);
});
