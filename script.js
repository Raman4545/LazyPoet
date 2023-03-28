// Get all navbar links
const navLinks = document.querySelectorAll('.header .navbar .nav-link');

// Add click event listener to each navbar link
navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Hide all sections first
        document.querySelectorAll('.visible, .hidden').forEach(function (section) {
            section.classList.remove('visible');
            section.classList.add('hidden');
        });

        // Show the selected section
        const sectionClass = navLink.dataset.section;
        document.querySelectorAll('.' + sectionClass).forEach(function (section) {
            section.classList.remove('hidden');
            section.classList.add('visible');
        });
    });
});
