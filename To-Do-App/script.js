const todoUl = document.getElementById('todoUl');
const input = document.getElementById('input');
const form = document.getElementById('form');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach(todo => {
        addTodo(todo);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
    input.value = "";
});

function addTodo(todo) {
    let todoText = input.value;
    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement('li');
        if (todo && todo.completed) {
            todoEl.classList.add('completed');
        }
        todoEl.innerHTML = todoText;
        todoUl.appendChild(todoEl);

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLs();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLs()
        });

        updateLs();
    }
}

function updateLs() {
    const todos = document.querySelectorAll('li');
    const todoArrey = [];
    todos.forEach(todo => {
        todoArrey.push({
            text: todo.innerHTML,
            completed: todo.classList.contains('completed')
        })
    });

    localStorage.setItem('todos', JSON.stringify(todoArrey));

}