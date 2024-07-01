document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById('input-to-do');
    const list = document.getElementById('tasklist');
    const addButton = document.getElementById('addbutton');

    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        savedTasks.forEach(function(taskText) {
            const addItem = createTaskElement(taskText);
            list.appendChild(addItem);
        });
    }

    function saveTasks() {
        const tasks = [];

        const taskItems = list.querySelectorAll('li');
        taskItems.forEach(function(taskItem) {
            tasks.push(taskItem.textContent.trim());
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function createTaskElement(taskText) {
        const addItem = document.createElement('li');
        addItem.textContent = taskText;

        addItem.addEventListener('click', function() {
            addItem.classList.toggle('completed');
            setTimeout(function() {
                addItem.remove();
                saveTasks();
            }, 3000);
        });

        return addItem;
    }


    loadTasks();

    addButton.addEventListener('click', function() {
        const taskText = itemInput.value.trim();

        if (taskText !== '') {
            const addItem = createTaskElement(taskText);
            list.appendChild(addItem);
            saveTasks();
            itemInput.value = '';
        }
    });

    itemInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            const taskText = itemInput.value.trim();

            if (taskText !== '') {
                const addItem = createTaskElement(taskText);
                list.appendChild(addItem);
                saveTasks();
                itemInput.value = '';
            }
        }
    });
});