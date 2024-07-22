document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const clearCompletedButton = document.getElementById('clear-completed-button');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', toggleTaskCompletion);
    clearCompletedButton.addEventListener('click', clearCompletedTasks);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function toggleTaskCompletion(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll('#task-list li.completed');
        completedTasks.forEach(task => task.remove());
    }
});
