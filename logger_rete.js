// Marcus Logger e Rete - Parte 63

// Inizializzazione del modulo logger
function marcusLogger(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}

// Funzione per inviare dati sulla rete
function sendToNetwork(endpoint, data) {
    fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => marcusLogger("Dati inviati con successo."))
    .catch(error => marcusLogger("Errore di rete: " + error.message));
}

// Esportazione moduli
export { marcusLogger, sendToNetwork };
