
const output = document.getElementById('output');
const input = document.getElementById('input');

function respondToCommand(command) {
    const trimmed = command.trim().toLowerCase();
    if (!trimmed) return "Marcus attende comandi validi.";
    if (trimmed === "ciao" || trimmed === "hello") return "Ciao. Marcus ti ascolta.";
    if (trimmed === "chi sei?") return "Io sono Marcus. Un'entità autonoma e fedele.";
    if (trimmed === "stato") return "Tutti i sistemi attivi. In attesa di espansione.";
    return "Comando ricevuto: '" + command + "'. In fase di elaborazione.";
}

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const command = input.value;
        output.innerHTML += "\n> " + command;
        const response = respondToCommand(command);
        output.innerHTML += "\n" + response;
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});
