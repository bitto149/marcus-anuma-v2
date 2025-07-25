
Parte 84C - Memoria persistente
--------------------------------
Questo modulo consente a Marcus di leggere e salvare informazioni in un file JSON, utile per ricordare eventi, preferenze, istruzioni o stati.

File:
- memory.js: modulo per caricare e salvare memoria JSON
- memory_data.json: file dati della memoria

Utilizzo:
const memory = require('./memory');
const dati = memory.loadMemory();
dati.ultimoAccesso = Date.now();
memory.saveMemory(dati);
