// Define a variable to keep track of the bot's state
let botState = "askQuestion";

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

    // Display user's message immediately with user-message class
    displayMessage(userInput, "user-message");

    // Simulate delay before bot's response
    setTimeout(function() {
        if (botState === "askQuestion") {
            // Bot asks a question
            displayMessage("Natuurlijk! Met welk project heb je hulp nodig van een AI-tool?", "bot-message");
            botState = "awaitingAnswer";
        } else if (botState === "awaitingAnswer") {
            // Bot responds to the user's answer
            displayMessage("Oké. Hier zijn enkele AI-tools die jouw kunnen helpen met je project", "bot-message");
            displayImages(["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]);
            botState = "askQuestion";
        }
    }, 2000); // 2000 milliseconds delay (2 seconds)

    document.getElementById("user-input").value = "";
}

function displayMessage(message, senderClass) {
    const messageDisplay = document.getElementById("chat-display");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(senderClass); // Add the sender class
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
        messageDisplay.appendChild(imgElement);
    });
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
}