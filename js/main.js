// Scroll reveal sections
const sections = document.querySelectorAll('section, .hero');
function revealSections(){
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
