// ===== Typing effect for mission text =====
const missionText = "Our mission: Protect networks, secure devices, and retrieve critical data efficiently.";
const missionElement = document.getElementById('mission-text');
let index = 0;

function typeMission(){
  if(index < missionText.length){
    missionElement.textContent += missionText[index];
    index++;
    setTimeout(typeMission, 50);
  }
}
window.addEventListener('load', typeMission);

// ===== Scroll reveal sections =====
const sections = document.querySelectorAll('section');
function revealSections(){
  sections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// ===== Cyber Animated Background =====
const canvas = document.getElementById('cyberCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth/2; // Right half only
canvas.height = window.innerHeight;

const lines = [];
const numLines = 30;

// Create animated lines
for(let i=0;i<numLines;i++){
  lines.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    speed: 0.5 + Math.random()*1.5,
    length: 50 + Math.random()*100
  });
}

function animateData(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = 'rgba(0,255,255,0.5)';
  ctx.lineWidth = 1.2;

  lines.forEach(line=>{
    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x + line.length, line.y);
    ctx.stroke();
    line.y -= line.speed;
    if(line.y < -line.length) line.y = canvas.height + line.length;
  });

  requestAnimationFrame(animateData);
}
animateData();

// Resize canvas on window resize
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth/2;
  canvas.height = window.innerHeight;
});
