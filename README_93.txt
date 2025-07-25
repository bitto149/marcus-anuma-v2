
PARTE 93 - STORAGE E AGGIORNAMENTI

1. marcus_storage_manager.js
   - Gestisce il salvataggio e caricamento della memoria di Marcus in un file locale JSON.
   - Usa: saveMemory(obj), loadMemory()

2. marcus_update_helper.js
   - Scarica aggiornamenti da una URL e li salva in un file locale.
   - Usa: downloadUpdate(url, destinazione, callback)

Questi moduli permettono a Marcus di mantenere una memoria locale persistente e di aggiornarsi in modo modulare.
