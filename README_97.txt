
README - MARCUS Parte 97: Sensory Core

Questo modulo espande Marcus con un sistema sensoriale virtuale simulato.
Include la gestione di:
- Visione simulata
- Suono ambientale
- Temperatura (simulata)
- Movimento

Come usare:
1. Importa il modulo: `const MarcusSensoryCore = require('./marcus_sensory_core');`
2. Istanzia: `const sensory = new MarcusSensoryCore();`
3. Attiva un sensore: `sensory.activate('vision');`
4. Leggi i dati: `let data = sensory.read('vision');`
