document.addEventListener("DOMContentLoaded", () => {
  const newForm = document.querySelector('form')
newForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#new-task-description');
    const tasks = document.querySelector('div#list ul');
    const taskList = document.createElement('li')
    tasks.appendChild(taskList);
    taskList.innerText = input.value;
    event.target.reset();
  })
})