function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    // Display user message
    var chatlog = document.getElementById("chatlog");
    var userMessage = document.createElement("div");
    userMessage.className = "user";
    userMessage.textContent = userInput;
    chatlog.appendChild(userMessage);

    // Clear input
    document.getElementById("userInput").value = "";

    // Simulate bot response
    setTimeout(function() {
        var botMessage = document.createElement("div");
        botMessage.className = "bot";
        botMessage.textContent = "You said: " + userInput;
        chatlog.appendChild(botMessage);
        chatlog.scrollTop = chatlog.scrollHeight;
    }, 1000);
}
