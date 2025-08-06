// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Highlight active navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
    this.reset();
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
