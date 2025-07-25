// marcus_ai_memory.js
// Modulo per la gestione della memoria a breve e lungo termine

class MarcusMemory {
    constructor() {
        this.shortTerm = [];
        this.longTerm = [];
    }

    remember(input, context = "general") {
        this.shortTerm.push({ input, context, timestamp: new Date().toISOString() });
        if (this.shortTerm.length > 10) {
            const memory = this.shortTerm.shift();
            this.longTerm.push(memory);
        }
    }

    recall(context = "general") {
        return this.longTerm.filter(m => m.context === context);
    }

    export() {
        return JSON.stringify(this.longTerm, null, 2);
    }
}

module.exports = MarcusMemory;
