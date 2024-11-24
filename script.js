const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .flex .navbar');

navbar.style.transition = 'transform 0.3s ease-out';

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    
    if (navbar.classList.contains('active')) {
        navbar.style.transform = 'translateX(0)';
    } else {
        navbar.style.transform = 'translateX(-100%)';
    }
});

window.addEventListener('scroll', () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        navbar.style.transform = 'translateX(-100%)'; 
    }
});

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.addEventListener('input', () => {
        const value = inputNumber.value;
        const maxLength = inputNumber.maxLength;
        const min = inputNumber.min ? parseInt(inputNumber.min, 10) : null;
        const max = inputNumber.max ? parseInt(inputNumber.max, 10) : null;

        if (value.length > maxLength) {
            inputNumber.value = value.slice(0, maxLength);
        }

        if (min !== null && parseInt(value) < min) {
            inputNumber.value = min;
        } else if (max !== null && parseInt(value) > max) {
            inputNumber.value = max;
        }
    });
});
