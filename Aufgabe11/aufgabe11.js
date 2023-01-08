const tasks = document.querySelectorAll("ToDoList");
let input = document.getElementById("task-input");
let totaltasks = 0;
function addTask() {
    let div = document.createElement("div");
    div.setAttribute("class", "task-item");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("class", "checkbox");
    let title = document.createElement("div");
    title.setAttribute("class", "task-name");
    let trash = document.createElement("i");
    trash.setAttribute("class", "far fa-trash-alt");
    document.getElementById("ToDoList")?.appendChild(div);
    div?.appendChild(checkbox);
    div?.appendChild(title);
    div?.appendChild(trash);
    title.innerHTML = input.value;
    trash.addEventListener("click", function (event) {
        console.log(event);
        deleteTask(div);
        totaltasks--;
        TaskDisplay();
    });
}
function deleteTask(div) {
    div.remove();
}
function TaskDisplay() {
    document.getElementById("total-tasks").innerHTML = totaltasks.toFixed() + " tasks in total"; //tasklist.length + " in total"; (-> später, wenn der Array steht)
}
input.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        addTask();
        input.value = "";
        totaltasks++;
        TaskDisplay();
    }
});
for (let i = 0; i < tasks.length; i++) {
    document.querySelector(".checkbox");
}
//# sourceMappingURL=aufgabe11.js.map