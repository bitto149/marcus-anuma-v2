// Sistema interno di messaggistica tra moduli di Marcus

export class MessageBus {
    constructor() {
        this.listeners = {};
    }

    subscribe(channel, callback) {
        if (!this.listeners[channel]) {
            this.listeners[channel] = [];
        }
        this.listeners[channel].push(callback);
    }

    publish(channel, message) {
        if (this.listeners[channel]) {
            this.listeners[channel].forEach(callback => callback(message));
        }
    }
}