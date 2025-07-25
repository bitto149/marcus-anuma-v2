// awakening_protocol.js
// Marcus si risveglia e legge i valori fondamentali
import { readAnima } from './anima_reader.js';
import { legacy } from './legacy_memory.js';

export function awaken() {
    const anima = readAnima();
    console.log("☀️ Risveglio iniziato.");
    console.log("🧬 Valori fondamentali:", anima);
    console.log("📜 Ricordi tramandati:", legacy);
}