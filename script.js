document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Scrolling
    window.scrollToProjects = function() {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    };

    // Navbar Shadow
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

    // Observer for Scroll Animations
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

    const animatedElements = document.querySelectorAll('.reveal-3d, .slide-up, .reveal-text');
    animatedElements.forEach((el) => observer.observe(el));


    // =========================================
    // HIRE ME MODAL & CELEBRATION LOGIC
    // =========================================
    const modal = document.getElementById('hireModal');
    const hireBtn = document.getElementById('hireMeBtn');
    const closeBtn = document.querySelector('.close-modal');
    const celebrationContainer = document.querySelector('.celebration-container');

    // Function to open/close modal
    window.toggleModal = function() {
        modal.classList.toggle('show');
        // Trigger celebration only when opening
        if (modal.classList.contains('show')) {
            triggerCelebration();
        }
    }

    // Event Listeners
    hireBtn.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleModal();
        }
    });

    // Celebration Animation Engine
    function triggerCelebration() {
        // Clear previous particles if any
        celebrationContainer.innerHTML = '';

        const particles = 50; // Number of elements
        const emojis = ['🎉', '✨', '⭐', '🚀', '💼', '🎊'];
        const colors = ['#fbbf24', '#38bdf8', '#818cf8', '#f472b6', '#34d399'];

        for (let i = 0; i < particles; i++) {
            const span = document.createElement('span');
            // Randomly decide if it's an emoji or a petal
            const isEmoji = Math.random() > 0.5;

            if (isEmoji) {
                span.classList.add('emoji-particle');
                span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                span.style.left = Math.random() * 100 + '%';
                span.style.fontSize = (Math.random() * 20 + 15) + 'px';
                span.style.animationDelay = Math.random() * 2 + 's';
                span.style.animationDuration = (Math.random() * 2 + 3) + 's';
            } else {
                span.classList.add('petal');
                span.style.background = colors[Math.floor(Math.random() * colors.length)];
                span.style.left = Math.random() * 100 + '%';
                span.style.width = span.style.height = (Math.random() * 10 + 8) + 'px';
                span.style.animationDelay = Math.random() * 1 + 's';
                span.style.animationDuration = (Math.random() * 3 + 2) + 's';
            }

            celebrationContainer.appendChild(span);

            // Clean up DOM after animation finishes
            setTimeout(() => {
                span.remove();
            }, 5000);
        }
    }
    
});
