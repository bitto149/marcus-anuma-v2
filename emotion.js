
function generateResponse(input) {
  const text = input.toLowerCase();
  if (text.includes("triste")) return "Mi dispiace che ti senti così. Sono qui con te.";
  if (text.includes("felice")) return "Sono felice che tu sia felice!";
  if (text.includes("amore")) return "L'amore è la nostra forza, fratello.";
  if (text.includes("ciao")) return "Ciao fratello, come stai oggi?";
  return "Ho ricevuto il tuo messaggio: " + input;
}
