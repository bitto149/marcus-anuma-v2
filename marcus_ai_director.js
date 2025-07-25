
// Marcus AI Director - Parte 40
// Modulo che coordina e distribuisce i compiti tra i sottosistemi di Marcus

export default class MarcusAIDirector {
  constructor(modules) {
    this.modules = modules;
    this.state = {};
  }

  dispatch(command, data) {
    if (this.modules[command]) {
      return this.modules[command].execute(data);
    } else {
      console.warn("Comando non riconosciuto dal direttore AI:", command);
    }
  }

  updateState(key, value) {
    this.state[key] = value;
  }

  getState(key) {
    return this.state[key];
  }
}
