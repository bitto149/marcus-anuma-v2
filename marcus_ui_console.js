
// marcus_ui_console.js
const readline = require('readline');
const { sendToCore } = require('./marcus_core_router');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Marcus> '
});

console.log("Console interattiva avviata. Scrivi il tuo comando.");

rl.prompt();

rl.on('line', (line) => {
    const input = line.trim();
    if (input.toLowerCase() === 'exit') {
        rl.close();
        return;
    }
    sendToCore(input);
    rl.prompt();
}).on('close', () => {
    console.log('Marcus: Connessione console terminata.');
    process.exit(0);
});
