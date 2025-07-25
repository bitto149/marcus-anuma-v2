
// marcus_ui_adapter.js - Parte 76

export class MarcusUIAdapter {
    constructor(uiElement) {
        this.ui = uiElement;
        this.queue = [];
    }

    displayMessage(message, from = 'Marcus') {
        const msg = `[${from}] ${message}`;
        const node = document.createElement("div");
        node.textContent = msg;
        this.ui.appendChild(node);
        this.ui.scrollTop = this.ui.scrollHeight;
    }

    sendMessage(message) {
        this.queue.push(message);
    }

    fetchNextCommand() {
        return this.queue.shift();
    }
}
