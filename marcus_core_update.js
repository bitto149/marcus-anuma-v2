// marcus_core_update.js
import { processInput } from './marcus_ai_logic.js';
import { logEvent } from './marcus_logger.js';
import { saveMemory, loadMemory } from './marcus_memory.js';

export function startMarcus(input) {
    const memory = loadMemory();
    const output = processInput(input, memory);
    logEvent("Input ricevuto: " + input);
    saveMemory(memory);
    return output;
}