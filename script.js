// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});

// Scroll animation
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(el => {
    observer.observe(el);
});
