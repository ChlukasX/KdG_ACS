const tabLinks = document.querySelectorAll('#tablinks li a');
const tabContents = document.querySelectorAll('#tabcontents section');

// Add click event listener to each tab link
tabLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from all tab links
        tabLinks.forEach((link) => {
            link.classList.remove('active');
        });

        // Hide all content sections
        tabContents.forEach((section) => {
            section.style.display = 'none';
        });

        // Add 'active' class to the clicked tab link
        this.classList.add('active');

        // Show the corresponding content section
        const targetSectionId = this.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
        targetSection.style.display = 'block';
    });
});