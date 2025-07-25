
// marcus_utils.js
const fs = require('fs');

const MarcusUtils = {
  saveToFile(filename, data) {
    fs.writeFileSync(filename, data, 'utf-8');
    console.log("Dati salvati su", filename);
  },
  readFromFile(filename) {
    if (fs.existsSync(filename)) {
      return fs.readFileSync(filename, 'utf-8');
    } else {
      console.warn("File non trovato:", filename);
      return null;
    }
  }
};

module.exports = MarcusUtils;
