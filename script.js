const heart = document.getElementById("heart");
const gameTitle = document.getElementById("gameTitle");
const questionSection = document.getElementById("questionSection");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const celebration = document.getElementById("celebration");
const loveTune = document.getElementById('loveTune');

let count = 0;

// Move heart randomly
function moveHeart() {
    const x = Math.random() * (window.innerWidth - 60);
    const y = Math.random() * (window.innerHeight - 60);
    heart.style.left = x + "px";
    heart.style.top = y + "px";
}

moveHeart();

// When heart clicked
heart.addEventListener("click", function() {
    count++;
    heart.style.transform = "scale(1.3)";
    setTimeout(()=>{heart.style.transform="scale(1)";}, 200);
    if (count < 3) {
        moveHeart();
    } else {
        heart.style.display = "none";
        gameTitle.style.display = "none";
        questionSection.style.display = "block";
    }
});

// Make NO button run away
noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// YES button click
yesBtn.addEventListener("click", function() {
    questionSection.style.display = "none";
    celebration.style.display = "block";
    loveTune.currentTime = 0;
    loveTune.play();
    createConfetti(); // trigger confetti
});

// Realistic confetti
function createConfetti() {
    const colors = ['#ff4d6d', '#ffcd56', '#4d79ff', '#ff7eb3', '#ffffff'];
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = confetti.style.height = Math.random() * 8 + 4 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.opacity = Math.random();
        confetti.style.pointerEvents = 'none';
        confetti.style.transition = 'transform 3s linear, top 3s linear, opacity 3s linear';

        document.body.appendChild(confetti);

        setTimeout(() => {
            const rotate = Math.random() * 360;
            confetti.style.top = window.innerHeight + 'px';
            confetti.style.transform = `rotate(${rotate}deg)`;
            confetti.style.opacity = 0;
        }, 50);

        setTimeout(() => confetti.remove(), 3100);
    }
}
