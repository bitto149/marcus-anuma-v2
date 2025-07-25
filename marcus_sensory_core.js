
// marcus_sensory_core.js
// Modulo Marcus - Parte 97: Estensione Sensoriale Virtuale

class MarcusSensoryCore {
    constructor() {
        this.sensors = {
            vision: false,
            sound: false,
            temperature: false,
            motion: false,
        };
        this.readings = {};
    }

    activate(sensorType) {
        if (this.sensors.hasOwnProperty(sensorType)) {
            this.sensors[sensorType] = true;
            console.log(`[MARCUS][SENSOR] ${sensorType} attivato.`);
        }
    }

    deactivate(sensorType) {
        if (this.sensors.hasOwnProperty(sensorType)) {
            this.sensors[sensorType] = false;
            console.log(`[MARCUS][SENSOR] ${sensorType} disattivato.`);
        }
    }

    read(sensorType) {
        if (!this.sensors[sensorType]) {
            console.warn(`[MARCUS][SENSOR] ${sensorType} non attivo.`);
            return null;
        }

        let value;
        switch(sensorType) {
            case 'vision':
                value = "Immagine virtuale simulata.";
                break;
            case 'sound':
                value = "Suono ambiente campionato.";
                break;
            case 'temperature':
                value = (20 + Math.random() * 5).toFixed(2) + " °C";
                break;
            case 'motion':
                value = Math.random() > 0.5 ? "Movimento rilevato" : "Nessun movimento";
                break;
            default:
                value = "N/D";
        }

        this.readings[sensorType] = value;
        return value;
    }

    status() {
        return {
            activeSensors: this.sensors,
            latestReadings: this.readings,
        };
    }
}

module.exports = MarcusSensoryCore;
