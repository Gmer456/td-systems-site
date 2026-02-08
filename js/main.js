// Optional: Smooth fade-in scroll effect
const sections = document.querySelectorAll('section');
function revealSections(){
  sections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
}

sections.forEach(sec=>{
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(20px)';
  sec.style.transition = 'all 0.8s ease-out';
});

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
