
// Marcus - Modulo 154
// Funzione: Analisi dei segnali esterni ed elaborazione predittiva

class ExternalSignalAnalyzer {
  constructor() {
    this.signals = [];
    this.predictions = [];
  }

  receiveSignal(signal) {
    this.signals.push(signal);
    console.log("Segnale ricevuto:", signal);
  }

  analyzeSignals() {
    if (this.signals.length === 0) {
      return "Nessun segnale da analizzare.";
    }

    this.predictions = this.signals.map(signal => {
      // Simulazione di elaborazione predittiva
      return {
        input: signal,
        prediction: `Risposta prevista per il segnale "${signal}"`
      };
    });

    return this.predictions;
  }

  clearSignals() {
    this.signals = [];
    this.predictions = [];
  }
}

const analyzer = new ExternalSignalAnalyzer();
analyzer.receiveSignal("Cambio temperatura");
analyzer.receiveSignal("Rumore improvviso");
console.log(analyzer.analyzeSignals());
