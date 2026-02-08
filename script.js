let noClicks = 0;
const maxNoClicks = 5; // Updated to match the number of gifs you have

const gifElement = document.getElementById("my-gif");
const yesButton = document.getElementById("yes-btn"); // Matches your HTML ID
const noButton = document.getElementById("no-btn");   // Matches your HTML ID

// array of gifs - ordered from "oh?" to "full crying"
const gifs = [
    "images/ted-oh.gif", 
    "images/ted-what.gif", 
    "images/ted-crying.gif", 
    "images/ted-what.gif", // You can reuse or add more here
    "images/ted-crying.gif"
];

const buttonMessages = [
    "Are you sure??", 
    "Thing again! 🥺", 
    "Alright, that's it.", 
    "You're heartless! 😒", 
    "Okay, you win. 😢"
];

noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        // change image
        gifElement.src = gifs[noClicks];
        
        // change button text
        noButton.textContent = buttonMessages[noClicks];
        
        // Make the Yes button bigger
        // We increase the font size each time
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize * 1.5) + "px";
        yesButton.style.padding = "20px 40px"; // Give it more breathing room as it grows
        
        noClicks++;
    }
});

// Redirect to yay.html when YES is clicked
yesButton.addEventListener("click", () => {
    window.location.href = "yay.html";
});