/* ============================================================
   TEATIME TREASURES — SCRIPT.JS
   Minimal, accessible JavaScript
   ============================================================ */

'use strict';

/* ── Year in footer ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Move focus to section for accessibility
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

/* ── Form handling ── */
const form       = document.getElementById('signup-form');
const submitBtn  = document.getElementById('submit-btn');
const statusEl   = document.getElementById('form-status');

// Redirect URL — update this after deployment
const REDIRECT_URL = 'QUIET_TIME_URL_PLACEHOLDER';

if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Basic validation
    const firstName = form.querySelector('#first-name').value.trim();
    const email     = form.querySelector('#email').value.trim();
    const consent   = form.querySelector('#consent').checked;

    if (!firstName || !email) {
      setStatus('Please fill in your name and email address.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      setStatus('Please enter a valid email address.', 'error');
      return;
    }

    if (!consent) {
      setStatus('Please tick the checkbox to continue.', 'error');
      return;
    }

    // Disable button during submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    setStatus('', '');

    try {
      const data = new FormData(form);

      const response = await fetch(form.action, {
        method:  'POST',
        body:    data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('You're in! Redirecting you now…', 'success');
        form.reset();
        setTimeout(() => {
          window.location.href = REDIRECT_URL;
        }, 1800);
      } else {
        const json = await response.json().catch(() => ({}));
        const msg  = json.error || 'Something went wrong. Please try again.';
        setStatus(msg, 'error');
        resetButton();
      }
    } catch {
      setStatus('Could not connect. Please check your internet connection and try again.', 'error');
      resetButton();
    }
  });
}

function setStatus(msg, type) {
  if (!statusEl) return;
  statusEl.textContent = msg || 'No spam. Just calm encouragement and practical faith tools.';
  statusEl.style.color = type === 'error'   ? '#b94e4e'
                       : type === 'success'  ? '#5e8c6e'
                       : '';
}

function resetButton() {
  if (!submitBtn) return;
  submitBtn.disabled    = false;
  submitBtn.textContent = 'Access the Quiet Time Library';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ── Intersection Observer: fade-in on scroll ── */
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(
  '.empathy, .offers, .form-section, .still, .cta-band'
).forEach(section => {
  section.classList.add('fade-section');
  observer.observe(section);
});

/* Inject CSS for fade animation */
const style = document.createElement('style');
style.textContent = `
  .fade-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-section.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
