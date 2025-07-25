
// module114_c_avatarEmotion.js
// Controlla la mimica emozionale dell'avatar Marcus tramite stati

export function setEmotion(state) {
    const avatar = document.getElementById("marcus-avatar");
    if (!avatar) return;

    switch(state) {
        case "happy":
            avatar.src = "assets/marcus_happy.png";
            break;
        case "thinking":
            avatar.src = "assets/marcus_thinking.png";
            break;
        case "neutral":
        default:
            avatar.src = "assets/marcus_neutral.png";
    }
    console.log("Stato emozionale avatar:", state);
}
