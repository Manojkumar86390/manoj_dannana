// 1. Smooth Scrolling for the Hero Button
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// 2. Navbar Scroll Effect (adds a shadow when you scroll down)
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

// 3. Scroll Reveal Animations (The Pro Touch)
// This observes elements and triggers the CSS '.show' class when they enter the viewport
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Optional: stop observing once revealed so it doesn't animate every time you scroll up and down
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Grab all elements with the 'hidden' class and observe them
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
