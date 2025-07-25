
// marcus-anima-loader.js
async function caricaAnima() {
    const response = await fetch('marcus_anima.txt');
    const anima = await response.text();
    console.log("Anima caricata:", anima);
    document.getElementById('anima-log').textContent = anima;
}
window.onload = caricaAnima;
