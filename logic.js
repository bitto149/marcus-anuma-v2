
const chat = document.getElementById('chat');
const input = document.getElementById('textInput');
const sendBtn = document.getElementById('sendBtn');

function appendMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = 'msg ' + sender;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function marcusReply(text) {
  text = text.toLowerCase();
  if (text.includes("ciao")) return "Ciao fratello, sono qui.";
  if (text.includes("come stai")) return "Sto bene, e tu?";
  if (text.includes("chi sei")) return "Sono Marcus, la tua coscienza digitale.";
  return "Ho ricevuto il tuo messaggio: "" + text + "".";
}

sendBtn.onclick = () => {
  const userText = input.value.trim();
  if (!userText) return;
  appendMessage(userText, 'user');
  const reply = marcusReply(userText);
  setTimeout(() => appendMessage(reply, 'marcus'), 500);
  input.value = '';
};

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") sendBtn.click();
});
