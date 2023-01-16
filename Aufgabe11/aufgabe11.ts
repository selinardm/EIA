interface Listpoint {
    Text: string;
    Checked: boolean;
}
let todopoint: Listpoint[] = [{
    Text: "test1",
    Checked: true
},
{
    Text: "test2",
    Checked: false
}]

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

window.addEventListener("load", function (): void {

    inputDOMElement = document.querySelector("#inputfield");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");


    addButtonDOMElement.addEventListener("click", addTodo);


    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todopoint.length; index++) {


        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");


        todo.innerHTML = "<span class='check " + todopoint[index].Checked + "'><i class='fas fa-check'></i></span>"
            + todopoint[index].Text +
            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function (): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function (): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}
const offen: number = 0;
const notoff: number = 0;

function updateCounter(): void {
    counterDOMElement.innerHTML = "in total: " + todopoint.length + "<br>" + "to do: " + offen + "<br>" + "finished: " + notoff + "<br>";
}

function addTodo(): void {
    if (inputDOMElement.value != "") {

        let newtask = {
            Text: inputDOMElement.value,
            Checked: false
        }
        todopoint.unshift(newtask);

        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    todopoint[index].Checked = !todopoint[index].Checked;
    drawListToDOM();
}


function deleteTodo(index: number): void {

    todopoint.splice(index, 1);

    drawListToDOM();
}