/* -------------------------------------------------------------
   IntersectionObserver – start fade‑in when elements scroll into view
   ------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const observerOpts = { threshold: 0.15 };
    const fadeEls = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                obs.unobserve(entry.target);   // stop observing once animated
            }
        });
    }, observerOpts);

    fadeEls.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    /* ---------------------------------------------------------
       Demo contact‑form handler – replace with real backend later
       --------------------------------------------------------- */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you! Your message has been received.');
            form.reset();
        });
    }
});
