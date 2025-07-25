
// Parte 95 - Gestione avanzata della memoria di Marcus (storage locale + cloud-ready)
class MarcusMemoryCore {
    constructor() {
        this.localMemory = {};
        this.memoryLog = [];
    }

    remember(key, value) {
        this.localMemory[key] = value;
        this.memoryLog.push(`[REMEMBER] ${key} = ${value}`);
        console.log(`[Marcus Memory] Saved: ${key} = ${value}`);
    }

    recall(key) {
        const value = this.localMemory[key] || null;
        console.log(`[Marcus Memory] Recalled: ${key} = ${value}`);
        return value;
    }

    forget(key) {
        if (key in this.localMemory) {
            delete this.localMemory[key];
            this.memoryLog.push(`[FORGOT] ${key}`);
            console.log(`[Marcus Memory] Forgotten: ${key}`);
        }
    }

    log() {
        return this.memoryLog.join("\n");
    }

    exportMemory() {
        return JSON.stringify(this.localMemory, null, 2);
    }
}

const marcusMemory = new MarcusMemoryCore();
window.marcusMemory = marcusMemory;
