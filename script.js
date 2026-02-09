// ============================================
// TEATIME TREASURES - INTERACTIVE JAVASCRIPT
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MOBILE NAVIGATION TOGGLE
    // ============================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // ============================================
    // SMOOTH SCROLLING WITH OFFSET
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 24px rgba(139, 111, 71, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(139, 111, 71, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // ACTIVE NAVIGATION LINK HIGHLIGHTING
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.color = 'var(--color-primary)';
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Run on load
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.product-card, .value-item, .about-content, .contact-method'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ============================================
    // NEWSLETTER FORM HANDLING
    // ============================================
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(email)) {
                // Success message
                showMessage('Thank you for subscribing! Check your email for a welcome message.', 'success');
                emailInput.value = '';
                
                // Here you would typically send the data to your backend
                // Example: sendToMailingList(email);
            } else {
                showMessage('Please enter a valid email address.', 'error');
            }
        });
    }
    
    // ============================================
    // CONTACT FORM HANDLING
    // ============================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validate all fields
            if (name && email && message) {
                // Success message
                showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
                
                // Reset form
                this.reset();
                
                // Here you would typically send the data to your backend
                // Example: sendContactForm({name, email, message});
            } else {
                showMessage('Please fill in all fields.', 'error');
            }
        });
    }
    
    // ============================================
    // HELPER FUNCTION: SHOW MESSAGE
    // ============================================
    function showMessage(text, type) {
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.textContent = text;
        messageDiv.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            padding: 1rem 1.5rem;
            background-color: ${type === 'success' ? 'var(--color-primary)' : '#e74c3c'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
            font-size: 0.95rem;
            line-height: 1.5;
        `;
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(messageDiv);
            }, 300);
        }, 5000);
    }
    
    // ============================================
    // PRODUCT CARDS HOVER EFFECT
    // ============================================
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ============================================
    // LAZY LOADING IMAGES (if you add real images)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ============================================
    // PARALLAX EFFECT FOR HERO
    // ============================================
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    console.log('%c🫖 Teatime Treasures', 
        'font-size: 24px; font-weight: bold; color: #8B6F47;'
    );
    console.log('%cHandcrafted with care and attention to detail', 
        'font-size: 12px; color: #5A4A3A;'
    );
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Example: Debounced scroll handler
// window.addEventListener('scroll', debounce(function() {
//     console.log('Scrolling...');
// }, 100));
