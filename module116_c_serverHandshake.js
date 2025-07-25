// module116_c_serverHandshake.js
// Handshake tra Marcus e server di controllo

async function serverHandshake(serverUrl, clientId) {
  try {
    const res = await fetch(serverUrl + "/handshake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: clientId, time: Date.now() })
    });
    return await res.json();
  } catch (err) {
    return { success: false, error: err.message };
  }
}

module.exports = serverHandshake;
