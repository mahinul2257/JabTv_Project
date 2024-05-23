document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
