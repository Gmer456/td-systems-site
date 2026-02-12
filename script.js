document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact form');

  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault(); // stop real navigation

    const data = {
      name: form.name?.value.trim(),
      email: form.email?.value.trim(),
      message: form.message?.value.trim()
    };

    console.log('Form submitted:', data);
    // TODO: replace with fetch('/api/contact', {method:'POST', body:JSON.stringify(data)})
    alert('Thanks! Your message has been captured (demo mode).');
    form.reset();
  });
});
