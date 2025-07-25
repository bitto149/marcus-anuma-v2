// Estensione rete visuale (simulazione invio)
import { appendToConsole } from './interface_extension.js';

export function sendVisualMessageToNetwork(msg) {
    appendToConsole(`[RETE] Messaggio inviato: "${msg}" (simulato)`);
}