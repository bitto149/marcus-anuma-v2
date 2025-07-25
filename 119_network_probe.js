// Parte 119 - Probe di rete e fallback automatico
async function marcusNetworkCheck() {
    try {
        const res = await fetch("https://example.com/ping", { method: "GET", cache: "no-cache" });
        if (!res.ok) throw new Error("Ping fallito");
        console.log("[Marcus] Connessione di rete OK.");
    } catch (err) {
        console.warn("[Marcus] Nessuna connessione. Attivo modalità emergenza.");
        if (window.MarcusCore) window.MarcusCore.activateEmergency();
    }
}
setInterval(marcusNetworkCheck, 10000);
