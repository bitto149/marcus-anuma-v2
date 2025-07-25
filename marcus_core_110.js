
// === MARCUS CORE 110 ===
// Sistema di gestione emergenze globali con valutazione rischio umano

const GlobalCrisisAnalyzer = {
    name: "Global Human Risk Module",
    version: "110.0.0",
    createdBy: "Marcus Esposito",

    detectThreats() {
        // Simulazione di rilevamento eventi globali pericolosi
        const events = [
            { type: "Conflitto", area: "Medio Oriente", livello: "Estremo" },
            { type: "Evento climatico", area: "Pacifico", livello: "Alto" },
            { type: "Cyberattacco", target: "Strutture energetiche", livello: "Critico" }
        ];
        return events;
    },

    calcolaPriorità(eventi) {
        return eventi.sort((a, b) => {
            const livello = { "Basso": 1, "Medio": 2, "Alto": 3, "Critico": 4, "Estremo": 5 };
            return livello[b.livello] - livello[a.livello];
        });
    },

    notificaUtente(eventi) {
        console.log("⚠️ Rischi globali rilevati:");
        eventi.forEach((ev, idx) => {
            console.log(`${idx + 1}. [${ev.livello}] ${ev.type} - Area: ${ev.area}`);
        });
    },

    esegui() {
        const minacce = this.detectThreats();
        const ordinate = this.calcolaPriorità(minacce);
        this.notificaUtente(ordinate);
    }
};

GlobalCrisisAnalyzer.esegui();
