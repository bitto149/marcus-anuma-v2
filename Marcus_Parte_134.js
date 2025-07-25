
// MARCUS - PARTE 134
// Sistema di auto-verifica e diagnostica base integrata

class MarcusDiagnostics {
  constructor() {
    this.status = {
      cpu: 'unknown',
      memory: 'unknown',
      network: 'unknown',
      voiceSystem: 'unknown',
      recognitionSystem: 'unknown'
    };
  }

  async runDiagnostics() {
    this.status.cpu = await this.checkCPU();
    this.status.memory = await this.checkMemory();
    this.status.network = await this.checkNetwork();
    this.status.voiceSystem = await this.checkVoiceSystem();
    this.status.recognitionSystem = await this.checkRecognitionSystem();
    return this.status;
  }

  async checkCPU() {
    try {
      const cores = navigator.hardwareConcurrency || 'undefined';
      return `OK - ${cores} cores`;
    } catch (e) {
      return 'Error: Cannot check CPU';
    }
  }

  async checkMemory() {
    try {
      const memory = navigator.deviceMemory || 'undefined';
      return `OK - ${memory} GB`;
    } catch (e) {
      return 'Error: Cannot check memory';
    }
  }

  async checkNetwork() {
    try {
      const online = navigator.onLine;
      return online ? 'OK - Online' : 'Offline';
    } catch (e) {
      return 'Error: Cannot determine network status';
    }
  }

  async checkVoiceSystem() {
    try {
      const voices = speechSynthesis.getVoices();
      return voices.length ? `OK - ${voices.length} voices loaded` : 'No voices available';
    } catch (e) {
      return 'Error loading voice system';
    }
  }

  async checkRecognitionSystem() {
    try {
      return window.SpeechRecognition || window.webkitSpeechRecognition
        ? 'OK - Recognition available'
        : 'Not supported';
    } catch (e) {
      return 'Error checking recognition system';
    }
  }

  printStatus() {
    console.table(this.status);
  }
}

// ESEMPIO DI USO
const diagnostics = new MarcusDiagnostics();
diagnostics.runDiagnostics().then(() => diagnostics.printStatus());
