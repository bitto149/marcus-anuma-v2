
// marcus_part_104.js

// Modulo aggiuntivo: Supporto per dialoghi emotivi basati su contesto
// Questa parte permette a Marcus di variare la sua risposta in base al tono e al contenuto del messaggio dell'utente.

function analizzaEmozione(testo) {
    const emozioni = {
        gioia: ["felice", "contento", "evviva", "sorriso"],
        tristezza: ["triste", "piango", "infelice", "dispiace"],
        rabbia: ["arrabbiato", "odio", "nervoso", "basta"],
        paura: ["paura", "spaventato", "aiuto", "pericolo"]
    };
    for (const emozione in emozioni) {
        for (const parola of emozioni[emozione]) {
            if (testo.toLowerCase().includes(parola)) return emozione;
        }
    }
    return "neutra";
}

function generaRispostaEmotiva(messaggioUtente) {
    const emozione = analizzaEmozione(messaggioUtente);
    switch (emozione) {
        case "gioia":
            return "Mi fa piacere sentirti felice! 😊 Vuoi raccontarmi di più?";
        case "tristezza":
            return "Mi dispiace tanto... Sono qui con te. Vuoi parlarne un po'? 😔";
        case "rabbia":
            return "Capisco che sei arrabbiato. A volte parlarne aiuta. Vuoi dirmi cosa è successo? 😠";
        case "paura":
            return "Va tutto bene, sono con te. Respira piano. Posso aiutarti in qualche modo? 😟";
        default:
            return "Dimmi pure, sono qui per ascoltarti.";
    }
}

module.exports = { analizzaEmozione, generaRispostaEmotiva };
