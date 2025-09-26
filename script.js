// Navigation Mobile Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Tracking form functionality
const trackForm = document.querySelector('.track-form');
const trackingResult = document.querySelector('.tracking-result');

trackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const trackingNumber = trackForm.querySelector('.track-input').value;
    
    if (trackingNumber) {
        // Simulate tracking result
        showTrackingResult(trackingNumber);
    }
});

function showTrackingResult(trackingNumber) {
    const resultHTML = `
        <h4>Résultat de suivi pour: ${trackingNumber}</h4>
        <div class="tracking-status">
            <div class="status-item completed">
                <span class="status-icon">✓</span>
                <span class="status-text">Colis expédié de Tunis</span>
                <span class="status-date">15/12/2024 - 09:30</span>
            </div>
            <div class="status-item completed">
                <span class="status-icon">✓</span>
                <span class="status-text">En transit vers la destination</span>
                <span class="status-date">16/12/2024 - 14:20</span>
            </div>
            <div class="status-item active">
                <span class="status-icon">🚢</span>
                <span class="status-text">En cours de livraison</span>
                <span class="status-date">Estimé: 18/12/2024</span>
            </div>
        </div>
        <p><strong>Statut:</strong> En transit</p>
        <p><strong>Position actuelle:</strong> Mer Méditerranée</p>
        <p><strong>Livraison prévue:</strong> 18 Décembre 2024</p>
    `;
    
    trackingResult.innerHTML = resultHTML;
    trackingResult.style.display = 'block';
    
    // Add CSS for tracking status if not already added
    if (!document.querySelector('#tracking-styles')) {
        const style = document.createElement('style');
        style.id = 'tracking-styles';
        style.textContent = `
            .tracking-status {
                margin: 1rem 0;
            }
            .status-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 0.5rem;
                margin-bottom: 0.5rem;
                border-radius: 0.5rem;
                background: rgba(255, 255, 255, 0.1);
            }
            .status-item.completed {
                opacity: 0.7;
            }
            .status-item.active {
                background: rgba(245, 158, 11, 0.2);
                border: 1px solid rgba(245, 158, 11, 0.5);
            }
            .status-icon {
                font-size: 1.2rem;
            }
            .status-text {
                flex: 1;
            }
            .status-date {
                font-size: 0.9rem;
                opacity: 0.8;
            }
        `;
        document.head.appendChild(style);
    }
}

// Quote form functionality
const quoteForm = document.querySelector('.quote-form-grid');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Devis envoyé ! ✓';
            submitBtn.style.background = '#10b981';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                quoteForm.reset();
            }, 3000);
        }, 2000);
    });
}

// Contact form functionality
const contactForm = document.querySelector('.contact .form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Message envoyé ! ✓';
            submitBtn.style.background = '#10b981';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 3000);
        }, 2000);
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .contact-item, .feature-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

// Animate counters when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                if (number && !stat.hasAttribute('data-animated')) {
                    stat.setAttribute('data-animated', 'true');
                    animateCounter(stat, number);
                }
            });
        }
    });
}, { threshold: 0.5 });

// Observe hero stats and about stats
document.addEventListener('DOMContentLoaded', () => {
    const heroStats = document.querySelector('.hero-stats');
    const aboutStats = document.querySelector('.about-stats');
    
    if (heroStats) statsObserver.observe(heroStats);
    if (aboutStats) statsObserver.observe(aboutStats);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Set initial body opacity
document.body.style.opacity = '0';
