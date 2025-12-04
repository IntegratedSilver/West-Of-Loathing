// moves the image across 
function rollTumbleweed() {
  const tumbleweed = document.getElementById('tumbleweed');
  tumbleweed.style.opacity = 1;
  tumbleweed.style.transform = 'translateX(120vw) rotate(720deg)';

  setTimeout(() => {
    tumbleweed.style.opacity = 0;
    tumbleweed.style.transform = 'translateX(0) rotate(0deg)';
  }, 8000);
}

// roll every 20 seconds
setInterval(rollTumbleweed, 20000);