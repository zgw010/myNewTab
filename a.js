document.addEventListener('DOMContentLoaded', function () {
  const time = document.querySelector('.time');
  setInterval(() => {
    const nowDate = new Date();
    time.innerText = `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`
  }, 0, 1000);
  // document.querySelector("html").requestFullscreen();
  document.addEventListener('click', function () {
    document.querySelector("html").requestFullscreen();
    document.querySelector("body").style.background = "url('https://source.unsplash.com/random/1920x1080')"
    document.querySelector(".time").style.display = "inline"
    console.log(document.querySelector("body"));
    let style=document.createElement('style');
    style.innerHTML="body::after{top:-10000px}";//添加样式内容的话也可以用上面提到过的`insertRule`,相对例子里的硬编码会更优雅点。
    document.head.appendChild(style);
  });
});
