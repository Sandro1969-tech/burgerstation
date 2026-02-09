const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => {
  btn.style.boxShadow = '0 0 25px #0ff';
});

btn.addEventListener('mouseout', () => {
  btn.style.boxShadow = 'none';
});
