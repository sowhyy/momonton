const clock = document.querySelector(".clock__text");
function getTime() {
  const now = new Date();

  const month = now.getMonth();
  const clockDate = now.getDate();
  const day = now.getDay();
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // const time = `${hours < 10 ? `0${hours}` : hours}:${
  //   minutes < 10 ? `0${minutes}` : minutes
  // }`;

  const time = 
  `${month + 1}월 ${clockDate}일 ${week[day]} ` +
  `${hours < 10 ? `0${hours}` : hours}:
  ${minutes < 10 ? `0${minutes}` : minutes}:
  ${seconds < 10 ? `0${seconds}` : seconds}
  `;

  clock.innerHTML = time;
  return;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  return;
}

init();

/*  clock face */

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

clockFace = function () {
  let today = new Date();
  let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
  let m = today.getMinutes(); // 0 - 59
  let s = today.getSeconds(); // 0 - 59

  h *= 30; // 12 * 30 = 360deg
  m *= 6;
  s *= 6; // 60 * 6 = 360deg

  rotation(hours, h);
  rotation(minutes, m);
  rotation(seconds, s);

  // call every second
  setTimeout(clockFace, 500);
};

rotation = (target, val) => {
  target.style.transform = `rotate(${val}deg)`;
};

window.onload = clockFace();