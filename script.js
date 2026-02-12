/* src/js/script.js */

/**
 * Simple client‑side handling for the “Contact Us” form.
 *
 * • Prevents the default page reload on submit.
 * • Collects the three fields (name, email, message).
 * • Logs the data to the console (you can replace this with a real API call).
 * • Shows a friendly confirmation toast/alert.
 * • Resets the form after a successful “send”.
 *
 * Feel free to swap the `console.log` / `alert` with a `fetch()` request to
 * your backend or a server‑less endpoint (Netlify Functions, Cloudflare
 * Workers, etc.).
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact form');

  // Guard – if the form isn’t present we do nothing.
  if (!form) return;

  // -----------------------------------------------------------------
  // Helper: tiny toast‑style notification (no external libraries)
  // -----------------------------------------------------------------
  const showToast = (msg, type = 'success') => {
    const toast = document.createElement('div');
    toast.textContent = msg;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.padding = '12px 18px';
    toast.style.borderRadius = '6px';
    toast.style.backgroundColor = type === 'error' ? '#ff4d4d' : '#4caf50';
    toast.style.color = '#fff';
    toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
    toast.style.zIndex = 9999;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
  };

  // -----------------------------------------------------------------
  // Submit handler
  // -----------------------------------------------------------------
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // stop the native POST/navigation

    // Grab values (trim whitespace)
    const name = form.elements['name']?.value.trim() ?? '';
    const email = form.elements['email']?.value.trim() ?? '';
    const message = form.elements['message']?.value.trim() ?? '';

    // Very light client‑side validation
    if (!name || !email || !message) {
      showToast('Please fill in all fields.', 'error');
      return;
    }

    const payload = { name, email, message };
    console.log('📝 Form payload:', payload);

    /* -------------------------------------------------------------
       👉 Replace the block below with your real endpoint.
       Example using fetch():
       
       try {
         const resp = await fetch('/api/contact', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(payload)
         });
         if (!resp.ok) throw new Error('Network error');
         showToast('Message sent! Thank you.');
         form.reset();
       } catch (err) {
         console.error(err);
         showToast('Oops – something went wrong.', 'error');
       }
       ------------------------------------------------------------- */

    // Demo mode – just show a success toast
    showToast('Message captured (demo mode). Thanks!');
    form.reset();
  });
});
