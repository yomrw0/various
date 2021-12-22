const qs = selector => document.querySelector(selector);
const qsa = nodeList => document.querySelectorAll(nodeList);

const addButton = qs("#addList > button")
const editButton = qsa("#todoList > .list > button[name=update]");
const removeButton = qsa("#todoList > .list > button[name=delete]");


function eventButton(e) {

}

function eventHandle(event) {
    switch (event) {
        case "insert":

        case "update":

        case "delete":

        case "all":

        case "progress":

        case "complete":

        default:
            break;
    }
}



qsa("button").forEach(e => {
    e.addEventListener('click', () => {
        eventHandle(e.name)
    })
}); 