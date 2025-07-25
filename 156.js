// File 156 - Sistema di calcolo predittivo base per Marcus
// Funzione di stima probabilistica semplice basata su eventi storici

function calcolaProbabilita(eventiTotali, eventiFavorevoli) {
    if (eventiTotali === 0) return 0;
    return (eventiFavorevoli / eventiTotali) * 100;
}

module.exports = {
    calcolaProbabilita
};
