// Load services dynamically
fetch('services.json')
  .then(response => response.json())
  .then(data => {
    const servicesContainer = document.getElementById('services-container');
    const pricingContainer = document.getElementById('pricing-container');

    data.services.forEach(service => {
      // Service card
      const card = document.createElement('div');
      card.className = 'service-card';
      let featuresList = '<ul>';
      service.features.forEach(f => { featuresList += `<li>${f}</li>`; });
      featuresList += '</ul>';
      card.innerHTML = `<h3>${service.title}</h3>${featuresList}`;
      servicesContainer.appendChild(card);

      // Pricing card
      const pricingCard = document.createElement('div');
      pricingCard.className = 'pricing-card';
      let pricingList = '<ul>';
      service.pricing.forEach(p => { pricingList += `<li>${p.type}: ${p.price}</li>`; });
      pricingList += '</ul>';
      pricingCard.innerHTML = `<h3>${service.title} Pricing</h3>${pricingList}`;
      pricingContainer.appendChild(pricingCard);
    });
  })
  .catch(err => console.error('Error loading services:', err));

// Contact form (basic front-end submission)
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});
