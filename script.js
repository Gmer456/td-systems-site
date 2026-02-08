/* -------------------------------------------------
   Simple interactivity for Shadow Wall site
   ------------------------------------------------- */

/* 1️⃣ Mobile navigation toggle */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

/* 2️⃣ Update footer year automatically */
document.getElementById('year').textContent = new Date().getFullYear();

/* 3️⃣ Contact form stub – replace with real endpoint */
const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        // Basic front‑end validation
        const required = form.querySelectorAll('[required]');
        let allValid = true;
        required.forEach(el => {
            if (!el.value.trim()) {
                el.style.borderColor = '#ff5722';
                allValid = false;
            } else {
                el.style.borderColor = '';
            }
        });

        if (!allValid) {
            statusMsg.textContent = 'Please fill in all required fields.';
            statusMsg.style.color = '#ff5722';
            return;
        }

        // Simulated success – replace with fetch/AJAX call
        statusMsg.textContent = 'Thank you! We’ll get back to you shortly.';
        statusMsg.style.color = '#4caf50';
        form.reset();
    });
}
