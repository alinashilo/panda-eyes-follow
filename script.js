const eyes = document.querySelectorAll('.eyeball');

window.addEventListener('mousemove', (e) => {
  eyes.forEach(eye => {
    const x = eye.getBoundingClientRect().left;
    const y = eye.getBoundingClientRect().top;
    const radian = Math.atan2(e.pageY - y, e.pageX - x);
    eye.style.transform = `rotate(${radian}rad)`;
  });
});