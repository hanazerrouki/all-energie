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
window.addEventListener('load', revealOnScroll);
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





