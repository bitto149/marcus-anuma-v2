// marcus_ai_core.js
// Base neurale logica per Marcus: apprendimento semplice e connessione sinapsi virtuali

class MarcusNeuralCore {
  constructor(memoryHandler) {
    this.memoryHandler = memoryHandler;
    this.knowledge = {};
  }

  learn(input, output) {
    this.knowledge[input] = output;
    this.memoryHandler.saveMemory('ai_learn', {input, output});
  }

  respond(input) {
    return this.knowledge[input] || "Non lo so ancora...";
  }
}

module.exports = MarcusNeuralCore;