document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Scrolling to Projects
    window.scrollToProjects = function() {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    };

    // Navbar Shadow on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(8, 11, 19, 0.95)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            nav.style.padding = '15px 8%';
        } else {
            nav.style.background = 'rgba(8, 11, 19, 0.8)';
            nav.style.boxShadow = 'none';
            nav.style.padding = '20px 8%';
        }
    });

    // Advanced Scroll Reveal Engine
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Watch all elements that use the animation classes
    const animatedElements = document.querySelectorAll('.reveal-3d, .slide-up, .reveal-text');
    animatedElements.forEach((el) => observer.observe(el));
    
});
