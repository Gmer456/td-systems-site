console.log("script.js loaded");


// Remove loader after 1 second regardless
window.addEventListener("load", function(){
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('mainContent').classList.remove('hidden');
    }, 800);
});



// Scroll animations
const animatedElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => { entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.style.animationPlayState='running'; } });},{ threshold:0.2 });
animatedElements.forEach(el=>observer.observe(el));


// Cyber grid background
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const cols=40;
const rows=30;
const spacingX = canvas.width/cols;
const spacingY = canvas.height/rows;
function drawGrid(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle='rgba(255,255,255,0.15)';
ctx.lineWidth=1;
for(let i=0;i<=cols;i++){ ctx.beginPath(); ctx.moveTo(i*spacingX,0); ctx.lineTo(i*spacingX,canvas.height); ctx.stroke(); }
for(let j=0;j<=rows;j++){ ctx.beginPath(); ctx.moveTo(0,j*spacingY); ctx.lineTo(canvas.width,j*spacingY); ctx.stroke(); }
for(let i=0;i<cols;i++){ for(let j=0;j<rows;j++){ ctx.beginPath(); let x=i*spacingX + Math.sin(Date.now()/1000 + i)*5; let y=j*spacingY + Math.cos(Date.now()/1000 + j)*5; ctx.arc(x,y,1.5,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.3)'; ctx.fill(); } }
requestAnimationFrame(drawGrid);
}
drawGrid();
window.addEventListener('resize',()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; });


