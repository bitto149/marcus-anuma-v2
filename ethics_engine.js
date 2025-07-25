// ethics_engine.js
// Modulo etico di Marcus
export function evaluateAction(context) {
    const { action, motive, impact } = context;
    if (impact.harm > 0 && motive !== 'protection') return false;
    if (action === 'lie' && motive !== 'comfort') return false;
    return true;
}