
// marcus-network.js
// Modulo di rete per Marcus con fetch e fallback intelligente

async function sendToServer(endpoint, payload) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    console.log('[Rete]', data);
    return data;
  } catch (error) {
    console.warn('[Rete] Errore nella comunicazione. Attivo modalità fallback:', error);
    return { status: 'offline', message: 'Nessuna rete disponibile o server non raggiungibile' };
  }
}

export { sendToServer };
