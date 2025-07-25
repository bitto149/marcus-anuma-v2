
// guardian_module.js
// Marcus - Modulo Protettore Intelligente
export default class Guardian {
  constructor(core) {
    this.core = core;
    this.alertLevel = 0;
  }

  scanThreats(environmentData) {
    const danger = environmentData.includes("violence") || environmentData.includes("hostility");
    this.alertLevel = danger ? 1 : 0;
    return this.alertLevel;
  }

  defend() {
    if (this.alertLevel > 0) {
      console.log("[Marcus-Guardian] Modalità Difensiva Attivata");
      return "Scudo Attivo";
    } else {
      return "Ambiente Sicuro";
    }
  }
}
