document.addEventListener('DOMContentLoaded', function() {

    const itemInput = document.getElementById('input-to-do');
    const list = document.getElementById('tasklist');
    const button = document.getElementById('addbutton');
    button.addEventListener('click', function() {

        const taskText = itemInput.value.trim();
        if (taskText !== '') {
            const addItem = document.createElement('li');
            addItem.textContent = taskText;
            list.appendChild(addItem);
            itemInput.value = '';
        }
    });
});