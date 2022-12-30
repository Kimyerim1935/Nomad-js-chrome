const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden';

const handleSubmit = (e) => {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  greeting.innerText = "Hello " + userName;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener('submit', handleSubmit);