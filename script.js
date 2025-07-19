document.addEventListener('DOMContentLoaded', () => {
    // Find the elements in the DOM
    const navbar = document.getElementById('navbar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a');

    // --- Change navbar style on scroll ---
    // Listen for the scroll event on the window
    window.addEventListener('scroll', () => {
        // Check if the user has scrolled more than 50 pixels down
        if (window.scrollY > 50) {
            // If so, add the 'scrolled' class to the navbar
            navbar.classList.add('scrolled');
        } else {
            // Otherwise, remove it
            navbar.classList.remove('scrolled');
        }
    });

    // --- Toggle mobile menu ---
    // Listen for a click on the mobile menu button
    mobileMenuButton.addEventListener('click', () => {
        // Toggle the 'hidden' class to show/hide the mobile menu
        mobileMenu.classList.toggle('hidden');
    });
    
    // --- Close mobile menu when a link is clicked ---
    // This improves user experience on single-page applications
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});
