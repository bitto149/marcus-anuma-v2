// Gestione connessioni di rete per Marcus
const axios = require('axios');

async function connectToServer(url, data) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

module.exports = { connectToServer };
