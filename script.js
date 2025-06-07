const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = input.value.trim();
  if (task !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;
    span.addEventListener('click', () => {
      span.parentElement.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = '';
  }
});
