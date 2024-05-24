document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const seeMoreButton = document.getElementById('see-more');
    const services = document.querySelectorAll('.service-item');
    const ctaButton = document.querySelector('.cta-button'); // Botão "Ver Serviços"
    let servicesVisible = 3;

    // Toggle navigation menu on burger click
    burger.addEventListener('click', () => {
        const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
        burger.setAttribute('aria-expanded', !expanded);
        burger.classList.toggle('toggle');
        navLinks.classList.toggle('active');
    });

    // Smooth scroll to section on navigation link click
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Close the menu on mobile after clicking a link
            if (window.innerWidth <= 768) {
                burger.classList.remove('toggle');
                navLinks.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Smooth scroll to services section on "Ver Serviços" button click
    ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = ctaButton.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Show more services on "Ver Mais" button click
    seeMoreButton.addEventListener('click', () => {
        servicesVisible += 3;
        for (let i = 0; i < servicesVisible && i < services.length; i++) {
            services[i].style.display = 'block';
        }
        if (servicesVisible >= services.length) {
            seeMoreButton.style.display = 'none';
        }
    });

    // Initially hide all services except the first few
    for (let i = servicesVisible; i < services.length; i++) {
        services[i].style.display = 'none';
    }
});
