
// marcus_session.js
let MarcusSession = {
  active: false,
  startTime: null,
  history: [],
  start() {
    this.active = true;
    this.startTime = new Date();
    this.history = [];
    console.log("Sessione Marcus avviata.");
  },
  logEntry(entry) {
    if (!this.active) return;
    const timestamp = new Date().toISOString();
    this.history.push({ timestamp, entry });
    console.log(`[Sessione] ${timestamp}: ${entry}`);
  },
  end() {
    this.active = false;
    console.log("Sessione Marcus terminata.");
    return this.history;
  }
};

module.exports = MarcusSession;
