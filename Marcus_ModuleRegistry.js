
// Marcus_ModuleRegistry.js
// Registro globale dei moduli Marcus attivi

class ModuleRegistry {
    constructor() {
        this.modules = {};
    }

    register(name, instance) {
        this.modules[name] = instance;
        console.log(`Modulo "${name}" registrato.`);
    }

    unregister(name) {
        delete this.modules[name];
        console.log(`Modulo "${name}" rimosso.`);
    }

    listModules() {
        return Object.keys(this.modules);
    }

    get(name) {
        return this.modules[name];
    }
}

module.exports = new ModuleRegistry();
