// marcus_core_117b.js
// Modulo 117b - Integrazione dei sensori e risposta adattiva

const MarcusEnvironment = require('./marcus_core_117a');

class MarcusSensorSystem {
  constructor() {
    this.env = new MarcusEnvironment();
  }

  receiveSensorInput(sensorData) {
    this.env.updateSensors(sensorData);
    this.env.analyzeEnvironment();
  }

  simulateSensorInput() {
    const mockData = {
      light: Math.random() * 100,
      sound: Math.random() * 100,
      motion: Math.random() > 0.5
    };
    this.receiveSensorInput(mockData);
  }
}

module.exports = MarcusSensorSystem;
