interface Task {
    name: string;
    done: Boolean;
}

const tasks = document.querySelectorAll("ToDoList");

let input: HTMLInputElement = (document.getElementById("task-input") as HTMLInputElement);



let totaltasks: number = 0;


function addTask() {

   
    let div: HTMLDivElement = document.createElement("div");
    div.setAttribute("class", "task-item");

    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("class", "checkbox");


    let title: HTMLDivElement = document.createElement("div");
    title.setAttribute("class", "task-name");

    let trash: HTMLElement = document.createElement("i");
    trash.setAttribute("class", "far fa-trash-alt");

    document.getElementById("ToDoList")?.appendChild(div);
    div?.appendChild(checkbox);
    div?.appendChild(title);
    div?.appendChild(trash);
    title.innerHTML = input.value;

    trash.addEventListener("click", function (event: MouseEvent) {
        console.log(event);
        deleteTask(div);
        totaltasks --;
        TaskDisplay()
    });
}

function deleteTask(div: HTMLElement) {
    div.remove();
}

function TaskDisplay() {
    document.getElementById("total-tasks").innerHTML = totaltasks.toFixed() + " tasks in total"; //tasklist.length + " in total"; (-> später, wenn der Array steht)
}


input.addEventListener("keydown", function (event: KeyboardEvent): void {
    if (event.code === "Enter") {
        addTask();
        input.value = "";
        totaltasks ++;
        TaskDisplay()
    }
});

for (let i=0; i<tasks.length; i++) {
    document.querySelector(".checkbox")
}