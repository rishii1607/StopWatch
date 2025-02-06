let numbers = document.getElementById("numbers");
let reset_btn = document.getElementById("reset_btn");
let lap_btn = document.getElementById("lap_btn");
let start_btn = document.getElementById("start_btn");
let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");
let lap_time_wrap = document.getElementById("lap_time_wrap");

let second = 0;
let minute = 0;
let hour = 0;
let timer;
let flag = true;

lap_btn.style.display = "none";
start_btn.addEventListener("click", function () {
  if (flag) {
    timer = setInterval(function () {
      second++;
      if (second >= 60) {
        second = 0;
        minute++;
      }
      if (minute >= 60) {
        minute = 0;
        hour++;
      }
      h.textContent = hour < 10 ? `${"0" + hour}h : ` : `${hour}h : `;
      m.textContent = minute < 10 ? `${"0" + minute}m : ` : `${minute}m : `;
      s.textContent = second < 10 ? `${"0" + second}s ` : `${second}s`;
    }, 1000);
    flag = false;
    lap_btn.style.display = "block";
    start_btn.textContent = "STOP";
    lap_time_wrap.style.display = "block";
  } else {
    clearInterval(timer);
    flag = true;
    start_btn.textContent = "START";
    lap_btn.style.display = "none";
  }
});
reset_btn.addEventListener("click", function () {
  clearInterval(timer);
  second = 0;
  minute = 0;
  hour = 0;
  h.textContent = "00h : ";
  m.textContent = "00m : ";
  s.textContent = "00s";
  start_btn.textContent = "START";
  flag = true;
  lap_time_wrap.style.display = "none";
  lap_btn.style.display = "none";
  lap_time_wrap.innerHTML = "";

});
lap_btn.addEventListener("click", function () {
  console.log(`${hour}, ${minute}, ${second}`);
  let time = `${hour} : ${minute} : ${second}`;
  let li = document.createElement("li");
  lap_time_wrap.appendChild(li);
  li.textContent = `Lap time : ${time}`;
});
