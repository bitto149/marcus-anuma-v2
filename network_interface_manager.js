// Network interface for Marcus
class NetworkManager {
  constructor() {
    this.status = 'disconnected';
  }

  connect() {
    this.status = 'connected';
    console.log('Marcus is now connected to the network.');
  }

  disconnect() {
    this.status = 'disconnected';
    console.log('Marcus has disconnected from the network.');
  }

  getStatus() {
    return this.status;
  }
}

const networkManager = new NetworkManager();
module.exports = networkManager;