const nameContainer = document.querySelector(".js-name");
const logout = document.querySelector('.logout');

function paintName(name) {
  nameContainer.innerHTML = "";
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `Hello😁<br> ${name}`;
  nameContainer.appendChild(title);

  const log = document.querySelector('.logout');
  log.innerHTML = `Log Out❌`;
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem("username", value);
  paintName(value);
}

function paintInput() {
  const input = document.createElement("input");
  input.placeholder = "your name here";
  input.type = "text";
  input.className = "name__input";

  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
  
  const log = document.querySelector('.logout');
  log.innerHTML = ` `;
}

function loadName() {
  const name = localStorage.getItem("username");
  if (name === null) {
    paintInput();
  } else {
    paintName(name);
  }
}

function init() {
  loadName();
}

init();


// 로그아웃


function handleLogout() {
  localStorage.removeItem('username');
  document.location.href = "index.html";
}

logout.addEventListener("click", handleLogout);
