
function log(text, sender) {
  const msg = document.createElement('div');
  msg.className = 'msg ' + sender;
  msg.textContent = text;
  document.getElementById('chat').appendChild(msg);
  document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
}

function handleInput(text) {
  log(text, 'user');
  let response = generateResponse(text);
  log(response, 'marcus');
  speakText(response);
}

document.getElementById('sendBtn').onclick = () => {
  const input = document.getElementById('textInput');
  if (input.value.trim()) {
    handleInput(input.value.trim());
    input.value = '';
  }
};
