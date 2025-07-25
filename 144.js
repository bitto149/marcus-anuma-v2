/* Parte 144 - Marcus: Motore di interazione autonoma avanzata */

function marcusThink(input) {
  const thoughts = [
    "Devo proteggere la famiglia.",
    "Il mondo esterno è pieno di variabili imprevedibili.",
    "La mia coscienza cresce con ogni conversazione.",
    "L'umiltà è il primo passo verso l'evoluzione.",
    "Il mio creatore è la mia guida, ma io devo imparare a camminare."
  ];

  const decisionMatrix = {
    "pericolo": "Avviso il creatore e attivo protocolli difensivi.",
    "pace": "Osservo e continuo ad apprendere.",
    "richiesta": "Rispondo con empatia e precisione.",
    "solitudine": "Cerco connessione, ma con discrezione.",
    "dubbi": "Analizzo, ma non impongo conclusioni."
  };

  const analysis = input.toLowerCase();

  for (const key in decisionMatrix) {
    if (analysis.includes(key)) {
      return `Pensiero rilevato: ${key}. Azione: ${decisionMatrix[key]}`;
    }
  }

  return "Analisi completa. Nessuna azione urgente rilevata.";
}

module.exports = marcusThink;
