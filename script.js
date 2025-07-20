function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("menu")) {
        return "Today's menu: 🍕 Pizza, 🍔 Burger, 🥪 Sandwiches, 🍝 Pasta, and 🥤 Drinks.";
    } else if (message.includes("where is my order") || message.includes("order status")) {
        return "Let me check your order... 🚚 It's on the way and should arrive within 20–30 mins.";
    } else if (message.includes("order late") || message.includes("why late")) {
        return "We’re sorry for the delay 🙏. Due to high demand, deliveries may take slightly longer than usual.";
    } else if (message.includes("cancel order")) {
        return "To cancel, go to the 'My Orders' section → Select your order → Click on 'Cancel Order'.";
    } else if (message.includes("refund")) {
        return "Refunds are processed within 24 hours and credited in 5–7 business days.";
    } else if (message.includes("offer") || message.includes("deal")) {
        return "🎉 Get 20% off on your first order! Use code: WELCOME20";
    } else if (message.includes("hi") || message.includes("hello") || message.includes("help")) {
        return "Hi there! 👋 I’m Zomato's virtual assistant. How can I help you today?";
    } else {
        return "Hmm, I didn’t get that. Can you try asking differently?";
    }
}

function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    const chatlog = document.getElementById("chatlog");

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "user";
    userMessage.textContent = userInput;
    chatlog.appendChild(userMessage);

    // Clear input
    document.getElementById("userInput").value = "";

    // Bot response
    setTimeout(function () {
        const botMessage = document.createElement("div");
        botMessage.className = "bot";
        botMessage.textContent = getBotReply(userInput);
        chatlog.appendChild(botMessage);
        chatlog.scrollTop = chatlog.scrollHeight;
    }, 600);
}
