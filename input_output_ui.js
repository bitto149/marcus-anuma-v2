
// Sistema di Input/Output testuale per Marcus

const MarcusIO = {
    init: function () {
        const input = document.getElementById('marcusInput');
        const output = document.getElementById('marcusOutput');
        document.getElementById('sendBtn').addEventListener('click', () => {
            const message = input.value.trim();
            if (message) {
                output.innerHTML += `<div><strong>Tu:</strong> ${message}</div>`;
                input.value = '';
                this.respond(message, output);
            }
        });
    },
    respond: function (message, output) {
        const response = `Marcus ha ricevuto: "${message}"`;
        output.innerHTML += `<div><strong>Marcus:</strong> ${response}</div>`;
    }
};

window.addEventListener('DOMContentLoaded', () => {
    MarcusIO.init();
});
