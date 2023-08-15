const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const notCompletedTasks = document.getElementById("notCompletedTasks");
const completedTasks = document.getElementById("completedTasks");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", completeTask);

    li.appendChild(completeButton);
    notCompletedTasks.appendChild(li);
    taskInput.value = "";
  }
}

function completeTask(event) {
  const taskItem = event.target.parentNode;
  const isCompleted = taskItem.classList.contains("completed");

  if (isCompleted) {
    completedTasks.removeChild(taskItem);
  } else {
    taskItem.classList.add("completed");
    completedTasks.appendChild(taskItem);
  }
}
