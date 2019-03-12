document.addEventListener('DOMContentLoaded', function () {
  const time = document.querySelector('.time');
  setInterval(() => {
    const nowDate = new Date();
    time.innerText = `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`
  }, 0, 1000);
});
