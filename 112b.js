// 112b - Logger Avanzato
export function logger(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${level.toUpperCase()}] ${timestamp}: ${message}`;
    console.log(logEntry);

    const outputArea = document.getElementById('output-area');
    if (outputArea) {
        outputArea.innerHTML += `<p>${logEntry}</p>`;
    }
}
