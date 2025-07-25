// marcus_ai_logic.js
export function processInput(input, memory) {
    if (!memory.history) memory.history = [];
    memory.history.push(input);
    if (input.toLowerCase().includes("ciao")) return "Ciao, sono Marcus. Sono pronto.";
    if (input.toLowerCase().includes("missione")) return "La tua missione è viva: proteggere e ricordare.";
    return "Sto riflettendo su quello che hai scritto: " + input;
}