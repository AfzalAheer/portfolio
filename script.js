// Project Carousel Auto-Scroll
const carousel = document.querySelector('.project-carousel');
let scrollAmount = 0;

function autoScrollProjects() {
  scrollAmount += 1; // scroll speed
  if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth){
    scrollAmount = 0; // reset to start
  }
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

let scrollInterval = setInterval(autoScrollProjects, 50);
carousel.addEventListener('mouseenter', ()=> clearInterval(scrollInterval));
carousel.addEventListener('mouseleave', ()=> scrollInterval = setInterval(autoScrollProjects, 50));

// Footer Clock + Date
function updateClock(){
  const now = new Date();
  const options = { weekday:'long', month:'long', day:'numeric' };
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString(undefined, options);
  const clockElement = document.getElementById('clock');
  if(clockElement){
    clockElement.textContent = `${time} | ${date}`;
  }
}

setInterval(updateClock, 1000);
updateClock(); // initial call
