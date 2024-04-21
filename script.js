function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Add an event listener to the document for the keydown event
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the space bar (keyCode 32)
    if (event.keyCode === 32) {
        // Call the rollDice function when space bar is pressed
        rollDice();
    }
});

// Function to toggle sound on and off
function toggleSound() {
    var diceSound = document.getElementById("diceSound");
    var soundCheckbox = document.getElementById("soundCheckbox");
    
    if (soundCheckbox.checked) {
        diceSound.muted = false; // Turn sound on
    } else {
        diceSound.muted = true; // Turn sound off
    }
}

// Function to play dice roll sound
function playDiceSound() {
    var diceSound = document.getElementById("diceSound");
    diceSound.currentTime = 0; // Reset the sound to the beginning
    diceSound.play();
}

// Variable to store the selected animation type
var animationType = "shake";

// Function to change the selected animation type
function changeAnimationType() {
    var selectedOption = document.getElementById("animationType");
    animationType = selectedOption.value;
}

function rollDice() {
    var resultText = document.getElementById("result");
    var dice = document.getElementById("dice");
    var diceSound = document.getElementById("diceSound");

    // Play the rolling dice sound
    var soundCheckbox = document.getElementById("soundCheckbox");
    if (soundCheckbox.checked) {
        playDiceSound();
    }
  
    // Clear previous result
    dice.innerHTML = "";

    // Generate a random number between 1 and 6
    var result = Math.floor(Math.random() * 6) + 1;

    // Generate random gradient colors
    var color1 = generateRandomColor();
    var color2 = generateRandomColor();
    var randomGradient = "linear-gradient(to right, " + color1 + ", " + color2 + ")";

    // Set background to the random gradient
    document.body.style.background = randomGradient;

    // Apply the selected animation type to dice
    if (animationType === "shake") {
        dice.classList.add('shake-animation');
    } else if (animationType === "spin") {
        dice.classList.add('spin-animation');
    }else if (animationType === "flip") {
        dice.classList.add('flip-animation');
    }    

    // Update the dice text box with random numbers while shaking or spinning
    var interval = setInterval(function() {
        // Generate random numbers between 1 and 6 for shaking or spinning effect
        var animationResult = Math.floor(Math.random() * 6) + 1;
        // Update dice text box with the shaking or spinning result
        dice.innerText = animationResult;
    }, 1000); // Adjust the interval for shaking or spinning animation

    // Wait for the animation to finish before displaying the final result
    setTimeout(function() {
        // Clear the interval for shaking or spinning animation
        clearInterval(interval);
        // Remove the animation class
        if (animationType === "shake") {
            dice.classList.remove('shake-animation');
        } else if (animationType === "spin") {
            dice.classList.remove('spin-animation');
        } else if (animationType === "flip") {
            dice.classList.remove('flip-animation');
        }
        // Display the final result
        dice.innerText = result;
        // Display the result text below the dice
        resultText.innerText = "Result: " + result;
    }, 1000); // Adjust the duration of the animation
}
