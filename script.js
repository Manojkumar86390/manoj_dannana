// Smooth Scrolling to Projects
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// Navbar Shadow on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.padding = '20px 8%';
    }
});

// Advanced 3D Scroll Reveal Engine
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Adds the 'active' class to trigger our CSS animations
            entry.target.classList.add('active');
            
            // Stops watching once it has animated so it doesn't repeat infinitely
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Target ALL the animation classes we built in CSS
const animatedElements = document.querySelectorAll('.3d-flip, .pop-in, .slide-up, .reveal-text, .hidden');
animatedElements.forEach((el) => observer.observe(el));
