function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.classList.add("task");
    li.textContent = taskText;
    li.onclick = function() {
        li.classList.toggle("completed");
    };
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function(event) {
        event.stopPropagation();
        li.remove();
    };
    
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}