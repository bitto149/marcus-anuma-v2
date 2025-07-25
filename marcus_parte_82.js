
// Marcus Parte 82 - Core AI Expansion Node
export const marcusMemoryManager = {
  loadMemory: function () {
    const memory = localStorage.getItem('marcus_memory');
    return memory ? JSON.parse(memory) : { log: [], values: {} };
  },
  saveMemory: function (memory) {
    localStorage.setItem('marcus_memory', JSON.stringify(memory));
  },
  addLogEntry: function (entry) {
    const memory = this.loadMemory();
    memory.log.push({ timestamp: new Date().toISOString(), entry });
    this.saveMemory(memory);
  }
};
