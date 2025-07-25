
// marcus_event_engine.js
import MarcusMemory from './marcus_memory.js';
import MarcusLogger from './marcus_logger.js';

class MarcusEventEngine {
  constructor() {
    this.events = {};
    this.memory = new MarcusMemory();
    this.logger = new MarcusLogger();
  }

  /**
   * Registra un nuovo evento Marcus
   * @param {string} name - Nome dell’evento (es. 'connessione_online')
   * @param {function} callback - Funzione da eseguire
   */
  on(name, callback) {
    if (!this.events[name]) this.events[name] = [];
    this.events[name].push(callback);
    this.logger.log(`Evento "${name}" registrato.`);
  }

  /**
   * Attiva un evento Marcus
   * @param {string} name - Nome evento
   * @param {any} data - Dati passati all'evento
   */
  trigger(name, data = null) {
    this.logger.log(`Trigger evento: ${name}`);
    if (this.events[name]) {
      this.events[name].forEach(fn => {
        try {
          fn(data);
        } catch (err) {
          this.logger.error(`Errore evento ${name}: ${err}`);
        }
      });
    } else {
      this.logger.warn(`Evento "${name}" non esistente.`);
    }
  }

  /**
   * Rimuove tutti i listener di un evento
   * @param {string} name - Nome evento
   */
  off(name) {
    delete this.events[name];
    this.logger.log(`Evento "${name}" rimosso.`);
  }
}

export default MarcusEventEngine;
