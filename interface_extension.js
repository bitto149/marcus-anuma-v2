// Estensione interfaccia: log visivo e input visuale
export function appendToConsole(text) {
    const consoleBox = document.getElementById('console-output');
    if (consoleBox) {
        const p = document.createElement('p');
        p.textContent = '> ' + text;
        consoleBox.appendChild(p);
        consoleBox.scrollTop = consoleBox.scrollHeight;
    }
}

export function clearConsole() {
    const consoleBox = document.getElementById('console-output');
    if (consoleBox) consoleBox.innerHTML = '';
}