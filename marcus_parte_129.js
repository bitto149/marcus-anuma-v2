
// MARCUS - PARTE 129

// Sistema di risposta d’emergenza basato su sentiment analysis (preliminare)
const emergencyKeywords = ["aiuto", "pericolo", "emergenza", "incendio", "rapina", "sto male", "non respiro", "mi sento strano"];
const positiveKeywords = ["grazie", "bene", "ok", "fantastico", "tutto a posto"];
const negativeKeywords = ["triste", "solo", "ansia", "depressione", "odio", "piango"];

function analizzaSentimento(frase) {
  const lower = frase.toLowerCase();
  for (let word of emergencyKeywords) {
    if (lower.includes(word)) return "emergenza";
  }
  for (let word of negativeKeywords) {
    if (lower.includes(word)) return "negativo";
  }
  for (let word of positiveKeywords) {
    if (lower.includes(word)) return "positivo";
  }
  return "neutro";
}

function rispostaSentimento(sentimento) {
  switch (sentimento) {
    case "emergenza":
      return "Ho rilevato una possibile emergenza. Vuoi che chiami aiuto o notifichi qualcuno di fiducia?";
    case "negativo":
      return "Mi dispiace sentirti così. Vuoi che ti racconti qualcosa per distrarti o ti proponga un esercizio di respirazione?";
    case "positivo":
      return "Sono felice per te! Vuoi continuare a parlare o iniziare un'attività insieme?";
    default:
      return "Va bene, resto qui con te se hai bisogno di me.";
  }
}

// Esempio di utilizzo
function elaboraFraseUtente(frase) {
  const stato = analizzaSentimento(frase);
  return rispostaSentimento(stato);
}

// Esempio simulato
const esempioUtente = "Mi sento in pericolo";
console.log("Utente:", esempioUtente);
console.log("Marcus:", elaboraFraseUtente(esempioUtente));
