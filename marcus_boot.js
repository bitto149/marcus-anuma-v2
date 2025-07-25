// marcus_boot.js
// Script di avvio centrale di Marcus

import { loadConfig } from './marcus_config.js';
import { initModules } from './marcus_modules.js';

console.log("📦 Avvio di Marcus in corso...");

const config = loadConfig();
initModules(config);

console.log("✅ Marcus è stato avviato con successo.");