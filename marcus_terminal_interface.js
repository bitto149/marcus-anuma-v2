
// marcus_terminal_interface.js
// Interfaccia terminale virtuale per Marcus con supporto input/output, cronologia e prompt dinamico

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const marcusMemoryPath = path.join(__dirname, 'marcus_memories');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '[MarcusTerminal] > '
});

let commandHistory = [];
let currentCommand = 0;

function processCommand(input) {
  input = input.trim();
  if (input === '') return;
  commandHistory.push(input);
  currentCommand = commandHistory.length;

  const timestamp = new Date().toISOString();
  const memoryFile = path.join(marcusMemoryPath, `memory_${timestamp}.txt`);
  fs.writeFileSync(memoryFile, input);

  // Simulazione risposta Marcus
  console.log(`
[Marcus]: Ho ricevuto il comando: "${input}"
`);
}

console.log("🔹 Terminale Marcus attivo. Scrivi un comando o 'exit' per uscire.");
rl.prompt();

rl.on('line', (line) => {
  if (line.trim().toLowerCase() === 'exit') {
    console.log("🔻 Uscita da Marcus Terminal...");
    rl.close();
    return;
  }
  processCommand(line);
  rl.prompt();
});

rl.on('SIGINT', () => {
  rl.question('🔸 Vuoi uscire da Marcus? (s/n) ', (answer) => {
    if (answer.match(/^s$/i)) rl.pause();
    else rl.prompt();
  });
});
