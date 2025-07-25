
// marcus_remote_interface.js
// Simulazione interfaccia remota per Marcus

class MarcusRemoteInterface {
  constructor() {
    this.sessionActive = false;
    this.connectionLog = [];
  }

  connect(serverIP) {
    this.sessionActive = true;
    const timestamp = new Date().toISOString();
    this.connectionLog.push(`[${timestamp}] Connessione avviata a ${serverIP}`);
    return `[OK] Connessione stabilita con ${serverIP}`;
  }

  disconnect() {
    this.sessionActive = false;
    const timestamp = new Date().toISOString();
    this.connectionLog.push(`[${timestamp}] Connessione chiusa.`);
    return `[OK] Disconnessione completata.`;
  }

  log() {
    return this.connectionLog.join("\n");
  }
}

module.exports = MarcusRemoteInterface;
