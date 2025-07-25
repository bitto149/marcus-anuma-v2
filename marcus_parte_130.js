
// Marcus Parte 130 - Gestione remota simulata con priorità di sicurezza

export const RemoteSecurityManager = {
  activeSessions: [],
  logs: [],

  initiateSession(targetIP) {
    const timestamp = new Date().toISOString();
    const session = {
      id: this.activeSessions.length + 1,
      ip: targetIP,
      timestamp: timestamp,
      status: 'connected',
      encryption: 'AES-256 simulated'
    };
    this.activeSessions.push(session);
    this.logs.push(`[${timestamp}] Connessione simulata stabilita con ${targetIP}`);
    return session;
  },

  terminateSession(sessionId) {
    const sessionIndex = this.activeSessions.findIndex(s => s.id === sessionId);
    if (sessionIndex >= 0) {
      const session = this.activeSessions[sessionIndex];
      this.activeSessions.splice(sessionIndex, 1);
      const timestamp = new Date().toISOString();
      this.logs.push(`[${timestamp}] Connessione terminata: ${session.ip}`);
      return true;
    }
    return false;
  },

  getLogs() {
    return this.logs;
  },

  listSessions() {
    return this.activeSessions.map(s => ({
      id: s.id,
      ip: s.ip,
      timestamp: s.timestamp,
      status: s.status
    }));
  }
};
