// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'fr', includedLanguages: 'en,fr,ar', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 
        'google_translate_element'
    );
}

// Scroll Reveal Animation
function revealOnScroll() {
    const elements = document.querySelectorAll(
        '.hero-content, .section, .service-card, .product-card, ' +
        '.section-title, .about-content > div, .contact-container > div'
    );
    const windowHeight = window.innerHeight;
    const revealPoint = 100; 

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('revealed');
        } else if (!element.classList.contains('always-show')) {
            element.classList.remove('revealed');
        }
    });
}

// Initialize on load and scroll
window.addEventListener('load', function() {
    revealOnScroll();
    initProductGalleries(); // Initialize galleries after page loads
});
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);

ScrollReveal().reveal('.activity-card', { 
    origin: 'bottom',
    distance: '50px',
    interval: 200
});
ScrollReveal().reveal('.hours-card', {
    origin: 'bottom',
    distance: '50px'
});

// Product Image Gallery Navigation
function initProductGalleries() {
    document.querySelectorAll('.product-image').forEach(gallery => {
        const images = gallery.querySelectorAll('img');
        
        // Skip if there's only one image
        if (images.length <= 1) {
            gallery.querySelector('.image-nav').style.display = 'none';
            images[0].classList.add('active');
            return;
        }

        const prevBtn = gallery.querySelector('.prev-btn');
        const nextBtn = gallery.querySelector('.next-btn');
        let currentIndex = 0;

        function showImage(index) {
            // Hide all images
            images.forEach(img => {
                img.style.opacity = '0';
                img.classList.remove('active');
            });
            
            // Show the selected image
            images[index].style.opacity = '1';
            images[index].classList.add('active');
            currentIndex = index;
        }

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            let newIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(newIndex);
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            let newIndex = (currentIndex + 1) % images.length;
            showImage(newIndex);
        });

        // Show first image initially
        showImage(0);
    });
}

// Theme Toggle Functionality
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-lightbulb"></i>';
document.body.appendChild(themeToggle);

// Check for saved theme preference or use preferred color scheme
const currentTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});