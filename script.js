document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Message sent! Thank you — we’ll be in touch.');
  this.reset();
});
