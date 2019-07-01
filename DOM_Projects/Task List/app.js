// Task-list Project
// Zijing Mo
// Define UI Vars
const form = document.querySelector('#task-form'); //form tag
const taskList = document.querySelector('.collection');//ul class
const clearBtn = document.querySelector('.clear-tasks');//a tag
const filter = document.querySelector('#filter');//input id whose parent is 'cardaction' class
const taskInput = document.querySelector('#task');//input tag whose parent is 'form' tag

//console.log(clearBtn); // checking variables if they are null value

// Call 'Load all event listeners' function
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from Local Storage
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    //console.log(tasks);
  }
  tasks.forEach(function(task){
  // Create li element
  const li = document.createElement('li');
  // Add class
  li.classList = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(task));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);
  })
}

// Add Task
function addTask(e) {
  if(taskInput.value === ''){
    alert('Add a task');
  }
  // Create li element
  const li = document.createElement('li');
  // Add class
  li.classList = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store in Local Storage
  storeTaskinLS(taskInput.value);

  // Clear input
  taskInput.value = '';

  //console.log(li);
  //console.log(taskList);

  e.preventDefault();
}

// Store Task 
function storeTaskinLS(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    //console.log(tasks);
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  //console.log(localStorage.getItem('tasks'));
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('You Sure? Do not ruin your task.')){
    e.target.parentElement.parentElement.remove();
    
    //Remove from Local Storage
    removeTaskFromLS(e.target.parentElement.parentElement);
    }
    //console.log(e.target);
  }
}

// Remove from Local Store
function removeTaskFromLS(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    //console.log(tasks);
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
    //This condition means that we wanna see if passing value equals the value of current task in iteration, which the value of local storage
    //splice(index, 1) means that we'll delete one value each time.
  })

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
  //taskList.innerHTML = ''; // First method

  // Faster Clear method // Second one
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from Local Storage
  clearTasksFromLS();
}

// Clear Tasks from Local Storage
function clearTasksFromLS() {
  localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
  //For searching easily
  const text = e.target.value.toLowerCase();
  //Select all queries whose tag is 'li'
  document.querySelectorAll('.collection-item').forEach
  (function(licollections){
      const item = licollections.firstChild.textContent;
      
      //Testing
      //console.log(item.toLowerCase().indexOf(text));
      //console.log(licollections.style.display);
      //console.log(item);

      //For indexof() method, returns the position of the first occurrence of a specified value in a string and -1 means the value not searching for.
      //console.log(licollections);  
      if(item.toLowerCase().indexOf(text) != -1){
        //.html shows matching value 
        licollections.style.display = 'block';
      } else {
        //.html shows nothing since there is no matching value
        licollections.style.display = 'none';
      }
    }
  )
}



