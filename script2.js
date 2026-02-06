const socket = new WebSocket("ws://localhost:8080");

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");

socket.onmessage = function(event) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "message";
  msgDiv.textContent = event.data;
  chatBox.appendChild(msgDiv);
};

function sendMessage() {
  if (input.value !== "") {
    socket.send(input.value);
    input.value = "";
  }
}
