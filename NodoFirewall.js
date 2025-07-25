// NodoFirewall.js - Simulazione firewall e controllo traffico
export default class NodoFirewall {
  constructor() {
    this.regole = [];
  }

  aggiungiRegola(regola) {
    this.regole.push(regola);
  }

  controllaPacchetto(pacchetto) {
    for (let regola of this.regole) {
      if (!regola(pacchetto)) {
        return false; // Pacchetto bloccato
      }
    }
    return true; // Pacchetto consentito
  }
}