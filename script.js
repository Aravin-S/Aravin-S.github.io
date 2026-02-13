const noResponses = [
    'are you sure?',
    'are you positive?',
    'really?',
    '??',
    'are you fr?',
    'deadass???',
    'ur lying??',
    'wdym?????',
    'stop capping smh',
    '🥺 please?'
];

let noClickCount = 0;

// List of gif filenames in the gifs folder
const gifs = [
    'gifs/gif1.gif',
    'gifs/gif2.gif',
];

// Load a random gif when page loads
window.addEventListener('DOMContentLoaded', () => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const gifElement = document.getElementById('random-gif');
    gifElement.src = gifs[randomIndex];
});

function handleYes() {
    // Create celebration heart
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    celebration.textContent = '❤️';
    document.body.appendChild(celebration);
    
    // Create floating hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
    
    // Show success message
    setTimeout(() => {
        alert('Yayyyyyyy! ❤️ See you on Saturday');
    }, 500);
}

function handleNo() {
    const noButton = document.querySelector('.no-btn');
    
    if (noClickCount < noResponses.length) {
        noButton.textContent = noResponses[noClickCount];
        noClickCount++;
    } else {
        // Cycle back through responses randomly
        const randomIndex = Math.floor(Math.random() * noResponses.length);
        noButton.textContent = noResponses[randomIndex];
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    
    // Random horizontal position
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '0';
    
    document.body.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 3000);
}
