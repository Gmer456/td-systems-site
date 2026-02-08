/* -------------------------------------------------
   IntersectionObserver – trigger fade‑in when
   elements enter the viewport.
--------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15
    };

    const fadeElems = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initially pause the animation; it will start when observed
    fadeElems.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    /* -------------------------------------------------
       Simple contact form handler (demo only)
    --------------------------------------------------- */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thanks! Your message has been received.');
            form.reset();
        });
    }
});
