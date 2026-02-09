// Definir duração da promoção (ex: 6 horas a partir de agora)
const endTime = new Date().getTime() + 6 * 60 * 60 * 1000; // 6 horas em milissegundos

const promoTitle = document.getElementById("promoTitle");

function updateTimer() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance <= 0) {
    // Quando a promoção acabar
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    promoTitle.innerText = "⛔ Promoção Encerrada";
    return;
  }

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerText = String(hours).padStart(2,'0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2,'0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2,'0');
}

// Atualiza a cada 1 segundo
setInterval(updateTimer, 1000);
updateTimer(); // Atualiza imediatamente ao carregar
