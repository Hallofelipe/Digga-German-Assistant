function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatbox = document.getElementById('chatbox');

    if (userInput.toLowerCase() === 'a1' || userInput.toLowerCase() === 'b1' || userInput.toLowerCase() === 'c1') {
        chatbox.innerHTML += `<p>You chose level ${userInput.toUpperCase()}! Let's get started!</p>`;
    } else {
        chatbox.innerHTML += `<p>Digga: "Haha, c’mon, gimme your level from A1 to C1!"</p>`;
    }
    document.getElementById('user-input').value = ''; // Clear input
}
