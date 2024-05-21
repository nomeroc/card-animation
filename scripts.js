// Select all buttons
const buttons = document.querySelectorAll('.button');

// Select the title, text, and image elements
const titleElement = document.querySelector('.title');
const textElement = document.querySelector('.text');
const imageElement = document.querySelector('img');
const buttonsBlock = document.querySelector('.buttons');

// Define an object for image sources and their transformations
const imageDetails = {
    'Мировой рынок': {
        src: '/assets/pic.png',
        transform: 'translate(0, -10%) scale(0.75) rotate(0deg)',
    },
    Економика: {
        src: '/assets/pic2.png',
        transform: 'translate(0%, -90%) scale(0.8) rotate(-10deg)',
    },
    Технологии: {
        src: '/assets/pic3.png',
        transform: 'translate(10%, -30%) scale(0.9) rotate(-20deg)',
    },
    Членство: {
        src: '/assets/pic4.png',
        transform: 'translate(35%, -20%) scale(0.9) rotate(-15deg)',
    },
};

// Add event listeners to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach((btn) => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');

        // Fade out the current content
        titleElement.classList.add('fade-out');
        textElement.classList.add('fade-out');
        imageElement.classList.add('fade-out');

        // Wait for the fade-out transition to complete
        setTimeout(() => {
            // Update the title and text
            titleElement.textContent = button.getAttribute('data-title');
            textElement.textContent = button.getAttribute('data-text');

            // Update the image source and transform
            const imageDetail = imageDetails[button.getAttribute('data-title')];
            imageElement.src = imageDetail.src;
            imageElement.style.transform = imageDetail.transform;

            // Fade in the new content
            titleElement.classList.remove('fade-out');
            textElement.classList.remove('fade-out');
            imageElement.classList.remove('fade-out');
            imageElement.classList.add('fade-in');

            // Remove fade-in class after animation
            setTimeout(() => {
                imageElement.classList.remove('fade-in');
            }, 1000); // Match this duration to CSS transition duration
        }, 500); // Duration should match the CSS transition duration
    });
});
