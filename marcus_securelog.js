
// marcus_securelog.js
// Modulo per log crittografati

const fs = require('fs');
const path = require('path');
const Security = require('./marcus_security.js');

const LOG_FILE = 'secure_logs.txt';
const PASSWORD = 'marcus_protect';

const SecureLogger = {
  log: (message) => {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] ${message}`;
    Security.secureSave(LOG_FILE, (SecureLogger.read() + '\n' + line), PASSWORD);
  },

  read: () => {
    try {
      return Security.secureRead(LOG_FILE, PASSWORD);
    } catch (e) {
      return '';
    }
  }
};

module.exports = SecureLogger;
