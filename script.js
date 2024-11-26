// Function to open a modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Handle Login Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simulate login (localStorage for simplicity)
    if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
        alert('Login successful!');
        closeModal('loginModal');
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Handle Signup Submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Store user credentials in localStorage (for demonstration purposes)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Signup successful! You can now log in.');
    closeModal('signupModal');
});
const text = "Let's Learn"; // The text to type and erase
const typedTextElement = document.getElementById('typedText');

let index = 0;
let isAdding = true; // Flag to check if adding or erasing

function typeAnimation() {
    if (isAdding) {
        // Add characters one by one
        typedTextElement.textContent = text.substring(0, index + 1);
        index++;

        // If full text is added, switch to erasing mode after a delay
        if (index === text.length) {
            isAdding = false;
            setTimeout(typeAnimation, 1500); // Pause before erasing
            return;
        }
    } else {
        // Remove characters one by one
        typedTextElement.textContent = text.substring(0, index - 1);
        index--;

        // If all text is erased, switch to adding mode
        if (index === 0) {
            isAdding = true;
        }
    }

    // Adjust typing speed
    const speed = isAdding ? 200 : 100; // Slower when adding, faster when erasing
    setTimeout(typeAnimation, speed);
}

// Start the animation
typeAnimation();
