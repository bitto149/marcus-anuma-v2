// marcus_core_117a.js
// Modulo 117a - Gestione eventi ambientali (es. suoni, luci, movimento)

function MarcusEnvironment() {
  this.lightLevel = null;
  this.soundLevel = null;
  this.motionDetected = false;
}

MarcusEnvironment.prototype.updateSensors = function(data) {
  this.lightLevel = data.light || this.lightLevel;
  this.soundLevel = data.sound || this.soundLevel;
  this.motionDetected = data.motion || false;
};

MarcusEnvironment.prototype.analyzeEnvironment = function() {
  if (this.soundLevel > 80) {
    console.log("Marcus: Ambiente rumoroso, attivazione modalità silenziosa.");
  }
  if (this.lightLevel < 20) {
    console.log("Marcus: Luce scarsa, attivazione modalità notturna.");
  }
  if (this.motionDetected) {
    console.log("Marcus: Movimento rilevato, aumento attenzione.");
  }
};

module.exports = MarcusEnvironment;
