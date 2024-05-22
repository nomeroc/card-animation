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
        styles: {
            bottom: '-85%',
            transform: 'translateX(0) rotate(0) scale(0.7)',
        },
        hoverStyles: {
            transform: 'translateX(0) rotate(0) scale(1.1)',
        },
        endStyles: {
            bottom: '-35%',
            transform: 'translateX(0) rotate(0) scale(1)',
        },
    },
    'Економика': {
        src: '/assets/pic2.png',
        styles: {
            bottom: '-25%',
            transform: 'translate(0) scale(0.7)',
        },
        hoverStyles: {
            transform: 'translate(0) scale(1)',
        },
        endStyles: {
            bottom: '-2.5%',
            transform: 'translate(0) scale(0.9)',
        },
    },
    'Технологии': {
        src: '/assets/pic4.png',
        styles: {
            bottom: '-45%',
            transform: 'translateX(30%) rotate(-15deg) scale(0.6)',
        },
        hoverStyles: {
            transform: 'translateX(30%) rotate(-15deg) scale(1.1)',
        },
        endStyles: {
            bottom: '-25%',
            transform: 'translateX(30%) rotate(-15deg) scale(1)',
        },
    },
    'Членство': {
        src: '/assets/pic3.png',
        styles: {
            bottom: '-35%',
            transform: 'translateX(25%) rotate(-20.3deg) scale(0.45)',
        },
        hoverStyles: {
            transform: 'translateX(15%) rotate(-20.3deg) scale(1)',
        },
        endStyles: {
            bottom: '-12%',
            transform: 'translateX(15%) rotate(-20.3deg) scale(0.9)',
        },
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
        // imageElement.classList.add('fade-out');
        

        // Wait for the fade-out transition to complete
        setTimeout(() => {
            // Update the title and text
            titleElement.textContent = button.getAttribute('data-title');
            textElement.textContent = button.getAttribute('data-text');

            // Update the image source and styles
            const imageDetail = imageDetails[button.getAttribute('data-title')];
            imageElement.style.transition = 'none';
            imageElement.src = imageDetail.src;
            Object.assign(imageElement.style, imageDetail.styles);

            imageElement.classList.remove('appear-animation');
            imageElement.classList.remove('image-hover-animation');

            void imageElement.offsetWidth;
            imageElement.style.transition = 'bottom 1s, transform 0.5s';

            // Add appear animation if defined
            if (imageDetail.animation) {
                imageElement.classList.add(imageDetail.animation);
            }

            imageElement.style.setProperty('--initial-transform', imageDetail.endStyles.transform);
            imageElement.style.setProperty('--hover-transform', imageDetail.hoverStyles.transform);

            setTimeout(() => {
                Object.assign(imageElement.style, imageDetail.endStyles);
            }, 500);

            // Fade in the new content
            titleElement.classList.remove('fade-out');
            textElement.classList.remove('fade-out');
            // imageElement.classList.remove('fade-out');

            const handleMouseOver = () => {
                imageElement.classList.add('image-hover-animation');
            };
            const handleMouseOut = () => {
            imageElement.classList.remove('image-hover-animation');
            Object.assign(imageElement.style, imageDetail.endStyles);
        };

            // Remove any previous hover event listeners
            imageElement.removeEventListener('mouseover', handleMouseOver);
            imageElement.removeEventListener('mouseout', handleMouseOut);

            // Add new hover event listeners
            imageElement.addEventListener('mouseover', handleMouseOver);
            imageElement.addEventListener('mouseout', handleMouseOut);
        
        }, 500); // Duration should match the CSS transition duration
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Get the first button and simulate a click to initialize
    const firstButton = buttons[0];
    if (firstButton) {
        firstButton.click();
    }
});
