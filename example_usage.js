// example_usage.js
const memory = require('./marcus_memory');

memory.saveToMemory('Marcus started');
console.log('Memory contents:\n' + memory.readMemory());