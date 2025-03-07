let isMenuOpen = false; // Track the menu state

// Toggle the hamburger menu
function toggleMenu() {
    const menu = document.getElementById('hamburger-menu');
    const hamburgerIcon = document.getElementById('menu-icon');  // Target only the hamburger icon

    // Toggle the menu visibility
    menu.classList.toggle('active');
    
    // Toggle the icon between hamburger and X
    if (isMenuOpen) {
        hamburgerIcon.classList.replace('fa-times', 'fa-bars'); // Change back to hamburger
        hamburgerIcon.classList.remove('rotated'); // Remove rotation when closed
    } else {
        hamburgerIcon.classList.replace('fa-bars', 'fa-times'); // Change to X
        hamburgerIcon.classList.add('rotated'); // Apply rotation when opened
    }

    // Update the menu state
    isMenuOpen = !isMenuOpen;
}

// Close the hamburger menu when the user scrolls down
window.addEventListener('scroll', () => {
    const menu = document.getElementById('hamburger-menu');
    const hamburgerIcon = document.getElementById('menu-icon');  // Target only the hamburger icon

    if (menu.classList.contains('active') && window.scrollY > 0) {
        // If the menu is open and the page is scrolled down
        menu.classList.remove('active');
        hamburgerIcon.classList.replace('fa-times', 'fa-bars'); // Change back to hamburger
        hamburgerIcon.classList.remove('rotated'); // Remove rotation

        // Update the menu state
        isMenuOpen = false;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible"); // Remove class when out of view
                }
            });
        },
        { threshold: 0.2 } // Adjust threshold for better effect
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});