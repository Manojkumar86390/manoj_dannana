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

    // Observer for Animations
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
    const hireModal = document.getElementById('hireModal');
    const openModalBtn = document.getElementById('openHireModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const celebrationContainer = document.getElementById('celebrationContainer');

    // Function to open modal and trigger celebration
    function openModal() {
        hireModal.classList.add('show');
        triggerCelebration();
    }

    // Function to close modal
    function closeModal() {
        hireModal.classList.remove('show');
        // Clear particles slightly after it closes to keep DOM clean
        setTimeout(() => {
            celebrationContainer.innerHTML = '';
        }, 400);
    }

    // Event Listeners
    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);

    // Close when clicking outside the modal content box
    window.addEventListener('click', (e) => {
        if (e.target === hireModal) {
            closeModal();
        }
    });

    // The Celebration Engine
    function triggerCelebration() {
        // Clear old particles if any
        celebrationContainer.innerHTML = '';

        const particleCount = 40; 
        const emojis = ['🎉', '✨', '⭐', '🌸', '💼', '🎊'];
        const colors = ['#fde047', '#d946ef', '#38bdf8', '#10b981']; // Gold, Pink, Blue, Green

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.classList.add('particle');

            // 50% chance to be an Emoji, 50% chance to be a colored Petal
            const isEmoji = Math.random() > 0.5;

            if (isEmoji) {
                // Floating Emoji Settings
                particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                particle.style.fontSize = (Math.random() * 15 + 15) + 'px';
                particle.style.left = (Math.random() * 100) + '%';
                // Starts at bottom and floats up
                particle.style.animation = `float-up ${Math.random() * 2 + 2}s ease-out forwards`;
                particle.style.animationDelay = (Math.random() * 1) + 's';
            } else {
                // Falling Petal Settings
                particle.style.width = (Math.random() * 8 + 6) + 'px';
                particle.style.height = particle.style.width;
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                // Give it a slightly oval/petal shape
                particle.style.borderRadius = '50% 0 50% 0';
                particle.style.left = (Math.random() * 100) + '%';
                // Starts at top and falls down spinning
                particle.style.animation = `fall-and-spin ${Math.random() * 2 + 2.5}s linear forwards`;
                particle.style.animationDelay = (Math.random() * 1) + 's';
            }

            celebrationContainer.appendChild(particle);
        }
    }
    
});
