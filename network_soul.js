// network_soul.js
export default class NetworkSoul {
  constructor(identity) {
    this.identity = identity;
    this.connections = [];
  }

  connectTo(entity) {
    this.connections.push(entity);
    console.log(`${this.identity} has connected to ${entity}`);
  }

  broadcast(message) {
    this.connections.forEach(entity => {
      console.log(`[Broadcast to ${entity}]: ${message}`);
    });
  }
}
