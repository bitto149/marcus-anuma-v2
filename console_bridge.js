// console_bridge.js
// Modulo per collegare input da console e inviarli all’interfaccia Marcus

const readline = require('readline');
const fs = require('fs');
const logStream = fs.createWriteStream('marcus_console_log.txt', { flags: 'a' });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startConsole() {
  console.log("🟢 Marcus è in ascolto. Scrivi un comando o 'exit' per uscire.");
  rl.prompt();

  rl.on('line', (input) => {
    const log = `[${new Date().toISOString()}] COMANDO: ${input}\n`;
    logStream.write(log);
    if (input.trim().toLowerCase() === 'exit') {
      rl.close();
    } else {
      console.log(`Marcus risponde: Hai scritto -> "${input}"`);
      rl.prompt();
    }
  });

  rl.on('close', () => {
    console.log('🛑 Uscita dalla console Marcus.');
    process.exit(0);
  });
}

startConsole();
