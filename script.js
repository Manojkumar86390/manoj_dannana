document.addEventListener("DOMContentLoaded", () => {
    
    window.scrollToProjects = function() {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    };

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

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.05 };
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
    
    const hireModal = document.getElementById('hireModal');
    const openModalBtn = document.getElementById('openHireModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const celebrationContainer = document.getElementById('celebrationContainer');

    if (openModalBtn && hireModal) {
        function openModal() {
            hireModal.classList.add('show');
            triggerCelebration();
        }
        function closeModal() {
            hireModal.classList.remove('show');
            setTimeout(() => {
                if(celebrationContainer) celebrationContainer.innerHTML = '';
            }, 400);
        }
        openModalBtn.addEventListener('click', openModal);
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }
        window.addEventListener('click', (e) => {
            if (e.target === hireModal) {
                closeModal();
            }
        });
    }

    function triggerCelebration() {
        if (!celebrationContainer) return;
        celebrationContainer.innerHTML = '';
        const particleCount = 40; 
        const emojis = ['🎉', '✨', '⭐', '🌸', '💼', '🎊'];
        const colors = ['#fde047', '#d946ef', '#38bdf8', '#10b981']; 

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.classList.add('particle');
            const isEmoji = Math.random() > 0.5;
            if (isEmoji) {
                particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                particle.style.fontSize = (Math.random() * 15 + 15) + 'px';
                particle.style.left = (Math.random() * 100) + '%';
                particle.style.animation = `float-up ${Math.random() * 2 + 2}s ease-out forwards`;
                particle.style.animationDelay = (Math.random() * 1) + 's';
            } else {
                particle.style.width = (Math.random() * 8 + 6) + 'px';
                particle.style.height = particle.style.width;
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.borderRadius = '50% 0 50% 0';
                particle.style.left = (Math.random() * 100) + '%';
                particle.style.animation = `fall-and-spin ${Math.random() * 2 + 2.5}s linear forwards`;
                particle.style.animationDelay = (Math.random() * 1) + 's';
            }
            celebrationContainer.appendChild(particle);
        }
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.proj-card');

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            projectCards.forEach((card) => {
                const categories = (card.getAttribute('data-category') || '').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
});
