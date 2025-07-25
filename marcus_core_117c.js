// marcus_core_117c.js
// Modulo 117c - Integrazione con il core principale (demo)

const MarcusSensorSystem = require('./marcus_core_117b');

const sensorSystem = new MarcusSensorSystem();

setInterval(() => {
  sensorSystem.simulateSensorInput();
}, 5000);
