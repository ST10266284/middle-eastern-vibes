document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const images = document.querySelectorAll('.image');

    // Section fade-in
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(70px)';
        section.style.transition = 'all 1s ease';
        sectionObserver.observe(section);
    });

    // Image reveal
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    images.forEach(image => {
        imageObserver.observe(image);
    });

    // Parallax effect (basic scroll adjustment)
    window.addEventListener('scroll', () => {
        const parallaxSections = document.querySelectorAll('.parallax');
        parallaxSections.forEach(section => {
            let scrollPos = window.scrollY;
            section.style.backgroundPositionY = `${scrollPos * 0.3}px`;
        });
    });
});