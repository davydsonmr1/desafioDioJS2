document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                taskItem.classList.add("completed");
            } else {
                taskItem.classList.remove("completed");
            }
        });

        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskList.appendChild(taskItem);
    }
});
