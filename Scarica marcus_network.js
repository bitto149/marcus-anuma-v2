
// marcus_network.js
const axios = require('axios');
const logger = require('./marcus_logger');

class MarcusNetwork {
  constructor(baseURL) {
    this.baseURL = baseURL || 'https://api.marcusnetwork.ai'; // Cambia se vuoi usare un tuo server
  }

  async sendCommand(command, payload = {}) {
    try {
      const response = await axios.post(`${this.baseURL}/command`, {
        command,
        data: payload
      });
      logger.info(`Command sent: ${command}`);
      return response.data;
    } catch (err) {
      logger.error(`Network error on command "${command}": ${err.message}`);
      return { error: true, message: err.message };
    }
  }

  async fetchUpdates() {
    try {
      const response = await axios.get(`${this.baseURL}/updates`);
      logger.info(`Fetched updates`);
      return response.data;
    } catch (err) {
      logger.error(`Failed to fetch updates: ${err.message}`);
      return { error: true, message: err.message };
    }
  }
}

module.exports = MarcusNetwork;
