document.addEventListener("DOMContentLoaded", () => {
    const pet = document.getElementById("pet");
    const status = document.getElementById("status");
    const feedButton = document.getElementById("feed");
    const playButton = document.getElementById("play");
    const sleepButton = document.getElementById("sleep");

    let mood = "Happy";
    let health = "Good";
    let energy = "High";

    function updateStatus() {
        status.textContent = `Mood: ${mood} | Health: ${health} | Energy: ${energy}`;
        localStorage.setItem("petData", JSON.stringify({ mood, health, energy, petType: "🐒" }));
    }

    feedButton.addEventListener("click", () => {
        mood = "Satisfied";
        health = "Strong";
        energy = "Moderate";
        pet.style.transform = "scale(1.1)";
        pet.style.opacity = "1"; 
        updateStatus();
    });
    
    playButton.addEventListener("click", () => {
        mood = "Excited";
        health = "Active";
        energy = "Low";
        pet.style.transform = "rotate(10deg)";
        pet.style.opacity = "1"; 
        updateStatus();
    });
    
    sleepButton.addEventListener("click", () => {
        mood = "Sleepy";
        health = "Resting";
        energy = "Full";
        pet.style.opacity = "0.5"; 
        updateStatus();
    });

    const savedData = JSON.parse(localStorage.getItem("petData"));
    if (savedData) {
        mood = savedData.mood;
        health = savedData.health;
        energy = savedData.energy;
        pet.textContent = "🐒";
        updateStatus();
    }

    setInterval(() => {
        if (energy === "High") {
            energy = "Moderate";
        } else if (energy === "Moderate") {
            energy = "Low";
        } else {
            mood = "Tired";
            health = "Weak";
        }
        updateStatus();
    }, 15000);
});