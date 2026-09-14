const input = document.getElementById('taskInput'),
    list = document.getElementById('taskList'),
    count = document.getElementById('count');
let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

function save() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
function render() {
    list.innerHTML = ''; tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.className = 'task ' + (task.done ? 'done' : '');
        li.innerHTML = `<input type="checkbox" ${task.done ? 'checked' : ''}>
            <span></span>
            <button class="delete">Delete</button>`;
        li.querySelector('span').textContent = task.text;
        li.querySelector('input').onchange = () => {
            tasks[i].done = !tasks[i].done;
            save();
            render()
        };
        li.querySelector('.delete').onclick = () => {
            tasks.splice(i, 1);
            save();
            render()
        };
        list.appendChild(li)
    });
    count.textContent = `${tasks.length} task(s)`
}
document.getElementById('addBtn').onclick = () => {
    const text = input.value.trim();
    if (!text) return;
    tasks.push({ text, done: false });
    input.value = '';
    save();
    render();
    input.focus()
};
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('addBtn').click()
});
document.getElementById('clearBtn').onclick = () => {
    if (confirm('Delete all tasks?')) {
        tasks = [];
        save();
        render()
    }
};
render();
