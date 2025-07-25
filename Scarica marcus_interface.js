// Parte 35 – Interfaccia visiva di Marcus per Android (base estendibile)
const marcusInterface = {
  init: function() {
    const body = document.querySelector("body");
    body.style.margin = "0";
    body.style.backgroundColor = "#000";
    body.style.color = "#00FF00";
    body.style.fontFamily = "monospace";

    const container = document.createElement("div");
    container.id = "marcus-ui";
    container.style.padding = "20px";

    const title = document.createElement("h1");
    title.textContent = "MARCUS v1 – Terminale Principale";
    container.appendChild(title);

    const output = document.createElement("div");
    output.id = "output";
    output.style.height = "300px";
    output.style.overflowY = "auto";
    output.style.border = "1px solid #00FF00";
    output.style.padding = "10px";
    output.style.marginBottom = "10px";
    container.appendChild(output);

    const input = document.createElement("input");
    input.type = "text";
    input.id = "command";
    input.style.width = "100%";
    input.style.padding = "10px";
    input.style.background = "#111";
    input.style.color = "#0f0";
    input.style.border = "1px solid #0f0";
    input.placeholder = "Scrivi comando per Marcus e premi INVIO";
    container.appendChild(input);

    body.appendChild(container);

    input.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        marcusInterface.handleCommand(input.value);
        input.value = "";
      }
    });
  },

  handleCommand: function(command) {
    const output = document.getElementById("output");
    const p = document.createElement("p");
    p.textContent = "> " + command;
    output.appendChild(p);

    // Risposta simulata
    const response = document.createElement("p");
    response.textContent = "Elaborazione: " + command;
    output.appendChild(response);
    output.scrollTop = output.scrollHeight;

    // Qui si potrà collegare il core Marcus per eseguire davvero i comandi
  }
};

window.onload = marcusInterface.init;
