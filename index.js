const logDiv = document.getElementById("Log");
const stateDiv = document.getElementById("State");
const sentenceDiv = document.getElementById("Sentence");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const clear = document.getElementById("clear");

let typedText = '';

// Initialize state
stop.disabled = true;

start.addEventListener("click", () => {
    document.addEventListener("keydown", keypress);
    document.addEventListener("keyup", release);
    start.disabled = true;
    stop.disabled = false;
    logDiv.textContent = "Listening for keystrokes...";
    stateDiv.textContent = "Ready";
});

stop.addEventListener("click", () => {
    document.removeEventListener("keydown", keypress);
    document.removeEventListener("keyup", release);
    logDiv.textContent = "Stopped";
    stateDiv.textContent = "Press Start to begin";
    start.disabled = false;
    stop.disabled = true;
});

clear.addEventListener("click", () => {
    typedText = '';
    sentenceDiv.textContent = "Typed text will appear here";
});

function keypress(e) {
    logDiv.textContent = `Key pressed: ${e.key}`;
    stateDiv.textContent = `Key is pressed`;
    
    // Handle different key types
    if (e.key === "Backspace") {
        typedText = typedText.slice(0, -1);
    } else if (e.key === "Enter") {
        typedText += "\n";
    } else if (e.key === "Space" || e.key === " ") {
        typedText += " ";
    } else if (e.key.length === 1) { // Only add printable characters
        typedText += e.key;
    }
    
    // Update the sentence display
    sentenceDiv.textContent = typedText || "Typed text will appear here";
}

function release(e) {
    logDiv.textContent = `Key released: ${e.key}`;
    stateDiv.textContent = `Key is released`;
}