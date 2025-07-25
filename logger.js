
// Logger di sistema Marcus - Parte 31
class MarcusLogger {
    constructor(source = 'Marcus') {
        this.source = source;
    }

    log(message) {
        console.log(`[${this.source}] LOG: ${message}`);
    }

    error(message) {
        console.error(`[${this.source}] ERROR: ${message}`);
    }

    warn(message) {
        console.warn(`[${this.source}] WARNING: ${message}`);
    }

    info(message) {
        console.info(`[${this.source}] INFO: ${message}`);
    }
}

module.exports = MarcusLogger;
