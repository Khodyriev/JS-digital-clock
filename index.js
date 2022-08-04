const clock = () => {
  const date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  document.getElementById("hrs").innerText = hrs;
  document.getElementById("mins").innerText = mins;
  document.getElementById("semicolon").classList.toggle("hidden");
  setTimeout(clock, 1000);
};

clock();
