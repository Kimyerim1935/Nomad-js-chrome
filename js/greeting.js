const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const handleSubmit = (e) => {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem('userName', userName);
  paintGreetings(userName)
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);

  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', handleSubmit);

const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleSubmit);
} else {
  paintGreetings();
}