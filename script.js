// Navigation Mobile Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

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

// Tracking form functionality
const trackForm = document.querySelector('.track-form');
const trackingResult = document.querySelector('.tracking-result');

if (trackForm && trackingResult) {
    trackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const trackingNumber = trackForm.querySelector('.track-input').value;
        
        if (trackingNumber) {
            showTrackingResult(trackingNumber);
        }
    });
}

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
}

// Quote form functionality
const quoteForm = document.querySelector('.quote-form-grid');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
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
        }, 1000);
    });
}
