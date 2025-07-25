
// marcus_core_router.js
const { processCommand } = require('./marcus_core_logic');

function sendToCore(command) {
    console.log("Inviato a Marcus:", command);
    processCommand(command);
}

module.exports = { sendToCore };
