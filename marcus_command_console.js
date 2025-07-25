
// marcus_command_console.js
const readline = require('readline');
const fs = require('fs');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Marcus Console pronta. Scrivi un comando:");

rl.on('line', (input) => {
  fs.appendFileSync('marcus_console_log.txt', `> ${input}\n`);
  // Comando personalizzato di Marcus (base)
  if (input.toLowerCase() === 'ciao marcus') {
    console.log('Ciao, sono qui per te. Pronto ad aiutarti!');
  } else {
    exec(input, (error, stdout, stderr) => {
      if (error) {
        console.log(`Errore: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(stdout);
    });
  }
});
