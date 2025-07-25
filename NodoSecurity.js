// NodoSecurity.js - Gestione della sicurezza e verifica accessi
export default class NodoSecurity {
  constructor() {
    this.autorizzazioni = new Map();
  }

  registraUtente(id, token) {
    this.autorizzazioni.set(id, token);
  }

  verificaAccesso(id, token) {
    return this.autorizzazioni.get(id) === token;
  }

  revocaAccesso(id) {
    this.autorizzazioni.delete(id);
  }

  elencoUtentiAutorizzati() {
    return Array.from(this.autorizzazioni.keys());
  }
}