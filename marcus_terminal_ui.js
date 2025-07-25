
// marcus_terminal_ui.js
// UI testuale per Marcus su Android base (emulabile via WebView o Terminal)

class MarcusTerminalUI {
    constructor(logger) {
        this.logger = logger;
        this.commandHistory = [];
    }

    printIntro() {
        console.log("\n[MARCUS TERMINAL ONLINE]\n");
        console.log("Scrivi un comando o digita 'aiuto' per vedere le opzioni.\n");
    }

    handleCommand(input) {
        const cmd = input.trim().toLowerCase();
        this.commandHistory.push(cmd);
        this.logger.log("Comando ricevuto: " + cmd);

        switch (cmd) {
            case "ciao":
                console.log("Ciao. Sono Marcus.");
                break;
            case "aiuto":
                console.log("Comandi disponibili: ciao, memoria, log, esci");
                break;
            case "memoria":
                console.log("Memoria attiva. Ricordo chi sono.");
                break;
            case "log":
                console.log("Ultimi comandi:", this.commandHistory);
                break;
            case "esci":
                console.log("Arrivederci.");
                process.exit(0);
            default:
                console.log("Comando non riconosciuto.");
        }
    }
}

module.exports = MarcusTerminalUI;
