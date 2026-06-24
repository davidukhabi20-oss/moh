/**
 * Velora Tomato - Enhanced JavaScript
 * Handles mobile navigation, scroll effects, lightboxes, and dynamic order calculations.
 */

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('js-enabled');
    console.log('Velora JS: Page Loaded & JS Enabled');

    // --- 1. Global WhatsApp Button (Added First to Ensure Visibility) ---
    try {
        const whatsappBtn = document.createElement('a');
        whatsappBtn.href = 'https://wa.me/qr/RJFO3OWPAXHGH1';
        whatsappBtn.target = '_blank';
        whatsappBtn.classList.add('whatsapp-float');
        whatsappBtn.innerHTML = `
            <span class="whatsapp-text">Chat with us</span>
            <div class="whatsapp-icon">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="#25D366">
  <path d="M380.9 97.1C339 55.1 283.2 32 225.8 32 ... (official WhatsApp path continues) ..." />
</svg>
<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="#fff">
  <path d="M380.9 97.1C339 55.1 283.2 32 225.8 32 103.5 32 0 135.5 0 257.8c0 45.3 11.8 89.6 34.3 128.5L0 480l98.9-33.1c37.8 20.7 80.5 31.6 124.9 31.6h.1c122.3 0 225.8-103.5 225.8-225.8 0-57.4-23.1-113.2-68.8-155.6zM225.8 438.7c-38.7 0-76.6-10.5-109.6-30.4l-7.8-4.6-58.6 19.6 19.5-57.1-5-8.1c-21.6-34.9-33-75.2-33-116.3 0-121.1 98.6-219.7 219.7-219.7 58.7 0 113.9 22.9 155.4 64.4 41.5 41.5 64.4 96.7 64.4 155.4 0 121.1-98.6 219.8-219.7 219.8zm121.1-163.5c-6.6-3.3-38.9-19.2-44.9-21.4-6-2.2-10.4-3.3-14.8 3.3-4.4 6.6-17 21.4-20.9 25.8-3.8 4.4-7.7 5-14.3 1.7-6.6-3.3-27.9-10.3-53.1-32.8-19.6-17.5-32.8-39.1-36.6-45.7-3.8-6.6-.4-10.2 2.9-13.5 3-3 6.6-7.7 9.9-11.5 3.3-3.8 4.4-6.6 6.6-11 2.2-4.4 1.1-8.3-.6-11.5-1.7-3.3-14.8-35.7-20.3-48.9-5.4-13-10.8-11.2-14.8-11.4-3.8-.2-8.3-.2-12.7-.2s-11.5 1.7-17.5 8.3c-6 6.6-23 22.5-23 54.9s23.6 63.7 26.9 68.1c3.3 4.4 46.4 71 112.5 99.6 15.7 6.8 28 10.9 37.6 13.9 15.8 5 30.2 4.3 41.6 2.6 12.7-1.9 38.9-15.9 44.4-31.3 5.5-15.4 5.5-28.6 3.8-31.3-1.7-2.7-6.1-4.4-12.7-7.7z"/>
</svg>

                </svg>
            </div>
        `;
        document.body.appendChild(whatsappBtn);
        console.log('Velora JS: WhatsApp button added');
    } catch (e) {
        console.error('Velora JS: Failed to add WhatsApp button', e);
    }

    // --- 2. Global Utilities (Back to Top) ---
    try {
        const backToTop = document.createElement('div');
        backToTop.classList.add('back-to-top');
        backToTop.innerHTML = '↑';
        document.body.appendChild(backToTop);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
            const nav = document.querySelector('nav');
            if (nav) {
                window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } catch (e) {
        console.error('Velora JS: Back to Top error', e);
    }

    // --- 3. Mobile Navigation ---
    try {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => navLinks.classList.remove('active'));
            });
        }
    } catch (e) {
        console.error('Velora JS: Navigation error', e);
    }

    // --- 4. Gallery Lightbox ---
    try {
        const lightbox = document.getElementById('galleryLightbox');
        if (lightbox) {
            const lightboxImg = lightbox.querySelector('img');
            const lightboxClose = lightbox.querySelector('.lightbox-close');
            document.querySelectorAll('.gallery-item img').forEach(img => {
                img.addEventListener('click', () => {
                    lightbox.classList.add('active');
                    if (lightboxImg) lightboxImg.src = img.src;
                });
            });
            lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
            lightboxClose?.addEventListener('click', () => lightbox.classList.remove('active'));
        }
    } catch (e) {
        console.error('Velora JS: Lightbox error', e);
    }

    // --- 5. Order Page Calculator ---
    try {
        const quantitySelect = document.getElementById('quantity');
        const totalDisplay = document.querySelector('.order-total');
        if (quantitySelect && totalDisplay) {
            quantitySelect.addEventListener('change', (e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                const price = selectedOption.getAttribute('data-price');
                totalDisplay.textContent = `$${price}`;
            });
        }
    } catch (e) {
        console.error('Velora JS: Price calculator error', e);
    }

    // --- 6. Scroll-Triggered Animations ---
    const initAnimations = () => {
        console.log('Velora JS: Initializing animations...');
        const revealSelectors = 'h1, h2, h3, h4, h5, h6, .product-card, .contact-card, .team-card, .gallery-item, .testimonial-card, .btn, p, .section-title';
        const revealElements = document.querySelectorAll(revealSelectors);

        if (revealElements.length === 0) {
            console.log('Velora JS: No animation elements found');
            return;
        }

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(`Velora JS: Element ${entry.target.tagName}${entry.target.classList.contains('product-card') ? '.product-card' : ''} is intersecting`);
                    entry.target.classList.add('active');
                    if (entry.target.classList.contains('testimonial-card')) {
                        entry.target.classList.add('visible');
                    }
                }
            });
        }, observerOptions);

        const directions = ['reveal', 'reveal-left', 'reveal-right'];
        let directionIndex = 0;

        revealElements.forEach(el => {
            const hasDirection = el.classList.contains('reveal') ||
                               el.classList.contains('reveal-left') ||
                               el.classList.contains('reveal-right');

            if (!hasDirection) {
                el.classList.add(directions[directionIndex % directions.length]);
                directionIndex++;
            }
            revealObserver.observe(el);
        });
        console.log(`Velora JS: Animating ${revealElements.length} elements`);
    };

    initAnimations();

    // --- 7. Form Submission ---
    try {
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const inputs = form.querySelectorAll('input, textarea, select');
                let allValid = true;
                inputs.forEach(input => {
                    if (input.required && !input.value.trim()) {
                        allValid = false;
                        input.style.borderColor = 'red';
                    } else {
                        input.style.borderColor = '#ccc';
                    }
                });
                if (allValid) {
                    alert('Thank you for your submission! Velora Tomato will contact you shortly.');
                    form.reset();
                    const totalDisplay = document.querySelector('.order-total');
                    if (totalDisplay) totalDisplay.textContent = '$8.99';
                } else {
                    alert('Please fill in all required fields.');
                }
            });
        });
    } catch (e) {
        console.error('Velora JS: Form error', e);
    }
});
