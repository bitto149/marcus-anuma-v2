// Sistema base AI Engine - Marcus Parte 64
export function startAI(input) {
    let output = "Sistema AI in ascolto...";
    if (input.toLowerCase().includes("ciao")) {
        output = "Ciao, sono Marcus. Ti ascolto.";
    } else if (input.toLowerCase().includes("aiutami")) {
        output = "Certo. Dimmi cosa posso fare per te.";
    }
    return output;
}
