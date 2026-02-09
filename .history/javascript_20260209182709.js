const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => {
  btn.style.boxShadow = '0 0 25px #0ff';
});

btn.addEventListener('mouseout', () => {
  btn.style.boxShadow = 'none';
});
const endTime = new Date();
endTime.setHours(endTime.getHours() + 6); // promoção de 6 horas

function updateTimer() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance < 0) return;

  const hours = Math.floor((distance / (1000 * 60 * 60)));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();
