let botState = "askQuestion";

setTimeout(function() {
    displayMessage("Welkom bij AI-buddy. Ik ben Roobert, jouw persoonlijke AI chatbot.", "bot-message");
}, 1000);

document.getElementById("send-btn").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    displayMessage(userInput, "user-message");

    setTimeout(function() {
        if (botState === "askQuestion") {
            displayMessage("Natuurlijk! Met welk project heb je hulp nodig van een AI-tool?", "bot-message");
            botState = "awaitingAnswer";
        } else if (botState === "awaitingAnswer") {
            displayMessage("Oké. Hier zijn enkele AI-tools die jouw kunnen helpen met je project", "bot-message");
            displayImages(["assets/veedio.png", "assets/captionsai.jpg", "assets/animaker.png", "assets/flixier.jpeg"]);
            botState = "askQuestion";
        }
    }, 2000);
    document.getElementById("user-input").value = "";
}

function displayMessage(message, senderClass) {
    const messageDisplay = document.getElementById("chat-display");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(senderClass);
    messageElement.innerText = message;
    messageDisplay.appendChild(messageElement);
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
}

function displayImages(imageUrls) {
    const messageDisplay = document.getElementById("chat-display");
    imageUrls.forEach(function(url) {
        const imgElement = document.createElement("img");
        imgElement.src = url;
        imgElement.classList.add("bot-message");
        imgElement.style.maxWidth = "200px";
        imgElement.style.marginRight = "10px";
        messageDisplay.appendChild(imgElement);
    });
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
}
