document.addEventListener('DOMContentLoaded', function() {

    const itemInput = document.getElementById('input-to-do');
    const list = document.getElementById('tasklist');
    const button = document.getElementById('addbutton');

    button.addEventListener('click', function() {

        const taskText = itemInput.value.trim();

        if (taskText !== '') {

            const addItem = document.createElement('li');
            const checkbox = document.createElement('input'); // Korrektur hier
            checkbox.type = 'checkbox';
            checkbox.classList.add('task-checkbox');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            checkbox.addEventListener('change', function() { // Korrektur hier
                if (checkbox.checked) {
                    taskSpan.classList.add('completed');
                } else {
                    taskSpan.classList.remove('completed');
                }
            });

            addItem.appendChild(checkbox);
            addItem.appendChild(taskSpan);

            list.appendChild(addItem);
            itemInput.value = '';
        }
    });
});
addEventListener("keydown", function(e) {
    if (e.code === ) {
        