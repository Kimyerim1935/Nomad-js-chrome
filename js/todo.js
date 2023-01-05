const toDoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementsById('todo-list');

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
}

toDoForm.addEventListener('submit', handleToDoSubmit);