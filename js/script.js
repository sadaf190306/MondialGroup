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
                    observer.unobserve(entry.target); // Stop observing once the section is visible
                }
            });
        },
        { threshold: 0.2 } // Adjust threshold for better effect
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const achievementSection = document.querySelector('.achievements');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;

                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // 2 seconds
                    const startTime = performance.now();

                    const updateCounter = (currentTime) => {
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);
                        const value = Math.floor(progress * target);

                        counter.textContent = value;

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            // Add '+' if element has it
                            if (counter.parentElement.textContent.includes('+')) {
                                counter.textContent = target + '+';
                            }
                        }
                    };

                    requestAnimationFrame(updateCounter);
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(achievementSection);
}

document.addEventListener('DOMContentLoaded', animateCounters);