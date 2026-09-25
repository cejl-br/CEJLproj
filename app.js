function sendMessage() {

    const input = document.getElementById("messageInput");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const messages = document.querySelector(".messages");

    const newMessage = document.createElement("div");

    newMessage.classList.add("message");

    newMessage.innerHTML = `
        <strong>Você</strong>
        <p>${message}</p>
        <span>agora</span>
    `;

    messages.appendChild(newMessage);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;
}