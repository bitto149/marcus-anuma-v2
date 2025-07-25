// Parte 119 - Patch dell'interfaccia UI per notificare lo stato della sessione Marcus
document.addEventListener("DOMContentLoaded", () => {
    const status = document.createElement("div");
    status.id = "marcus-session-status";
    status.style.position = "fixed";
    status.style.bottom = "10px";
    status.style.right = "10px";
    status.style.padding = "8px";
    status.style.background = "rgba(0,0,0,0.7)";
    status.style.color = "#00ffcc";
    status.style.fontFamily = "monospace";
    status.style.zIndex = "9999";

    const updateStatus = () => {
        if (window.MarcusCore && window.MarcusCore.isActive()) {
            status.textContent = "Marcus: ONLINE";
            status.style.color = "#00ffcc";
        } else {
            status.textContent = "Marcus: OFFLINE";
            status.style.color = "#ff3333";
        }
    };

    document.body.appendChild(status);
    updateStatus();
    setInterval(updateStatus, 5000);
});
