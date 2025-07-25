// marcus_network_test.js
// Esecuzione del test di rete

const marcusNetwork = require('./marcus_network_core');

marcusNetwork.startHTTPServer(8080);
marcusNetwork.startWebSocketServer(8081);
