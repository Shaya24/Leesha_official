// LEESHA Website JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Welcome message
window.onload = function () {
    console.log("Welcome to LEESHA ✨");
};

// Buy button click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log("Thank you for visiting LEESHA!");
    });
});
