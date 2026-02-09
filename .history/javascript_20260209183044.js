const endTime = new Date();
endTime.setMinutes(endTime.getMinutes() + 60); // 1 hora

const promoTitle = document.getElementById("promoTitle");

function updateTimer() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance <= 0) {
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    promoTitle.innerText = "⛔ Promoção Encerrada";
    return;
  }

  const h = Math.floor(distance / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerText = String(h).padStart(2,'0');
  document.getElementById("minutes").innerText = String(m).padStart(2,'0');
  document.getElementById("seconds").innerText = String(s).padStart(2,'0');
}

setInterval(updateTimer, 1000);
updateTimer();
