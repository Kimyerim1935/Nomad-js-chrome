const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector('#login-form button');

const handleClick = () => {
  const userName = loginInput.value;

  if (userName.length === 0) {
    alert('이름을 입력해주세요')

  } else if (userName.length > 15) {
    alert('이름이 너무 길어요');
  }
}

loginButton.addEventListener('click', handleClick);