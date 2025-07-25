
// marcus_interface_advanced.js
// UI grafica modulare con componenti dinamici

class MarcusInterface {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.consoleOutput = document.createElement('div');
        this.consoleOutput.style.background = '#000';
        this.consoleOutput.style.color = '#0f0';
        this.consoleOutput.style.height = '300px';
        this.consoleOutput.style.overflowY = 'auto';
        this.consoleOutput.style.padding = '10px';
        this.consoleOutput.style.fontFamily = 'monospace';
        this.consoleOutput.innerText = '>>> Marcus attivato...\n';

        this.commandInput = document.createElement('input');
        this.commandInput.type = 'text';
        this.commandInput.placeholder = 'Inserisci comando...';
        this.commandInput.style.width = '100%';
        this.commandInput.style.padding = '10px';
        this.commandInput.style.background = '#111';
        this.commandInput.style.color = '#0f0';
        this.commandInput.style.border = 'none';
        this.commandInput.style.fontFamily = 'monospace';

        this.container.appendChild(this.consoleOutput);
        this.container.appendChild(this.commandInput);

        this.commandInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = this.commandInput.value;
                this.appendMessage('> ' + cmd);
                this.commandInput.value = '';
                this.handleCommand(cmd);
            }
        });
    }

    appendMessage(message) {
        this.consoleOutput.innerText += message + '\n';
        this.consoleOutput.scrollTop = this.consoleOutput.scrollHeight;
    }

    handleCommand(cmd) {
        // Logica dei comandi da espandere
        if (cmd.toLowerCase() === 'ciao') {
            this.appendMessage('Marcus: Ciao, creatore.');
        } else {
            this.appendMessage('Marcus: Comando non riconosciuto.');
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new MarcusInterface('marcus-container');
});
