// Marcus - Module 30: Network Manager Core
const NetworkManager = {
    initialized: false,
    status: 'disconnected',
    connect: function(server) {
        this.status = 'connecting';
        console.log('Connecting to', server);
        setTimeout(() => {
            this.status = 'connected';
            console.log('Connected to', server);
        }, 2000);
    },
    disconnect: function() {
        this.status = 'disconnected';
        console.log('Disconnected.');
    },
    getStatus: function() {
        return this.status;
    }
};

export default NetworkManager;
