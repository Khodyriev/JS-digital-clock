const clock = () => {
  const date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;
  const time = `${hrs}:${mins}:${secs}`;
  document.getElementById("clock").innerText = time;
  setTimeout(clock, 1000);
};

clock();
