
document.getElementById("command").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const cmd = this.value.trim();
        document.getElementById("output").textContent += "\n> " + cmd;
        this.value = "";
        // Simulazione risposta
        setTimeout(() => {
            document.getElementById("output").textContent += "\nMarcus: comando '" + cmd + "' ricevuto.";
        }, 500);
    }
});
