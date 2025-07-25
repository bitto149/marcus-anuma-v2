// module116_a_networkBridge.js
// Connette Marcus a bridge esterni e API online

class NetworkBridge {
  constructor() {
    this.endpoints = [];
  }

  addEndpoint(name, url) {
    this.endpoints.push({ name, url });
  }

  async send(name, payload) {
    const endpoint = this.endpoints.find(e => e.name === name);
    if (!endpoint) return { error: "Endpoint not found" };

    try {
      const res = await fetch(endpoint.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      return await res.json();
    } catch (e) {
      return { error: e.message };
    }
  }
}

module.exports = NetworkBridge;
