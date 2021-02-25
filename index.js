let h2 = document.querySelector("h2");
let btn = document.getElementById("btn");
btn.innerHTML = "Switch to Local";

const localTime = () => {
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  let timeL = hour + ":" + min + ":" + sec;
  h2.innerText = timeL;
};

const utcTime = () => {
  let hour = new Date().getUTCHours();
  let min = new Date().getUTCMinutes();
  let sec = new Date().getUTCSeconds();

  let timeL = hour + ":" + min + ":" + sec;
  h2.innerText = timeL;
};

let switchTo = setInterval(utcTime, 1000);

const toggle = () => {
  if (btn.innerHTML == "Switch to Local") {
    clearInterval(switchTo);
    btn.innerHTML = "Switch to UTC";
    switchTo = setInterval(localTime, 1000);
  } else {
    btn.innerHTML = "Switch to Local";
    clearInterval(switchTo);
    switchTo = setInterval(utcTime, 1000);
  }
};
btn.addEventListener("click", toggle);

//let bytee = setInterval(utcTime, 1000);

// let timerL =
//   tick.getHours() + ":" + tick.getMinutes() + ":" + tick.getSeconds();
// return "time";
