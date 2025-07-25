
// Marcus Memoria Module - Parte 62
class MarcusMemory {
    constructor() {
        this.memories = [];
    }

    remember(entry) {
        this.memories.push({ entry, timestamp: new Date() });
    }

    recall() {
        return this.memories;
    }

    forgetAll() {
        this.memories = [];
    }
}

module.exports = MarcusMemory;
