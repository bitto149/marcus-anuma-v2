
// module114_b_networkPing.js
// Aggiunge un modulo di ping per testare connessione e latenza di rete

export async function testNetworkLatency(url = "https://google.com") {
    const start = Date.now();
    try {
        await fetch(url, { mode: "no-cors" });
        const latency = Date.now() - start;
        console.log(`Ping a ${url}: ${latency}ms`);
        return latency;
    } catch (e) {
        console.error("Errore durante il ping:", e);
        return null;
    }
}
