/* -------------------------------------------------
   Simple interactivity for Shadow Wall (black/white)
   ------------------------------------------------- */

/* 1️⃣ Mobile navigation toggle */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

/* 2️⃣ Auto‑update footer year */
document.getElementById('year').textContent = new Date().getFullYear();

/* 3️⃣ Contact form stub – replace with real endpoint */
const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        // Simple front‑end validation
        const required = form.querySelectorAll('[required]');
        let allValid = true;
        required.forEach(el => {
            if (!el.value.trim()) {
                el.style.borderColor = '#fff';
                allValid = false;
            } else {
                el.style.borderColor = '';
            }
        });

        if (!allValid) {
            statusMsg.textContent = 'Please fill in all required fields.';
            statusMsg.style.color = '#fff';
            return;
        }

        // Simulated success – swap with fetch/AJAX later
        statusMsg.textContent = 'Thank you! We’ll reply shortly.';
        statusMsg.style.color = '#fff';
        form.reset();
    });
}
