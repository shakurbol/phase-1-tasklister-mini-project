const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

form.addEventListener('submit', function (event) {
  
  event.preventDefault();

  
  const taskDescriptionInput = document.getElementById('new-task-description');
  const taskDescription = taskDescriptionInput.value;

  if (taskDescription.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;
;
    taskList.appendChild(taskItem);

    
    taskDescriptionInput.value = '';
  }
});
