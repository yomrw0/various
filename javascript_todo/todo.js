const qs = selector => document.querySelector(selector);
const qsa = nodeList => document.querySelectorAll(nodeList);

const addButton = qs("#addList > button")
const editButton = qsa("#todoList > .list > button[name=update]");
const removeButton = qsa("#todoList > .list > button[name=delete]");
const todoList = qs("#todoList")


function eventButton(e) {

}

function insertTodo() {
    `<div class="list" id=${Math.random}>
        <input type="text" disabled>
        <button name="update">수정</button>
        <button name="delete">삭제</button>
    </div>`
}

function eventName(event) {
    switch (event.name) {
        case "insert":
            return insertTodo;
        case "update":
            return updateTodo;
        case "delete":
            return deleteTodo;
        case "all":
            return 
        case "progress":
            return 
        case "complete":
            return 
        default:
            break;
    }
}


qsa("button").forEach(event => {
    event.addEventListener('click', () => {
        eventName(event)
    })
}); 