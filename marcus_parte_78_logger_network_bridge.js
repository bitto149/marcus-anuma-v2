// Marcus Parte 78 - Logger-Network Bridge Module

import fs from 'fs';
import fetch from 'node-fetch';

const logFilePath = './marcus_logs/network_events.log';
const serverURL = 'https://your-marcus-server.com/api/logs'; // personalizzare

export function logEvent(eventType, message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] (${eventType}) ${message}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) console.error('Errore nel salvataggio log:', err);
  });

  sendToServer({ timestamp, eventType, message });
}

function sendToServer(logData) {
  fetch(serverURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(logData)
  })
    .then(res => res.json())
    .then(response => console.log('Log inviato al server:', response))
    .catch(err => console.error('Errore rete:', err));
}
