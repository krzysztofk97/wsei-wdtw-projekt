function main() {

    //Header margin 

    let header = document.getElementsByTagName("header")[0];

    try {
        let underHeaderMargin = document.getElementById("under-header-margin");

        underHeaderMargin.style.height = header.clientHeight + "px";
    } catch {};

    window.addEventListener("resize", () => {
        try {
            underHeaderMargin.style.height = header.clientHeight + "px";
        } catch {};
    });

    //Header menu hide

    let headerContent = document.getElementById("header-content");
    let menuExpandButton = document.getElementById("menu-expand");
    let menuExpanded = false;

    menuExpandButton.addEventListener("click", () => {
        if (!menuExpanded) {
            headerContent.className = "header-menu-opened";
            menuExpanded = true;
        }
        else {
            headerContent.className = "header-menu-closed";
            menuExpanded = false;
        }
    });

    //Todo app

    let todoContainer = document.getElementById("todo-container");
    let newTodo = document.getElementById("new-todo");
    let newTodoAddButton = document.getElementById("new-todo-add-button");
    
    newTodoAddButton.addEventListener("click", () => {
        if (newTodo.value != "") {
            let todoDiv = document.createElement("div");
            todoDiv.className = "todo";

            let todoInput = document.createElement("input");
            todoInput.type = "text";
            todoInput.value = newTodo.value;

            todoDiv.appendChild(todoInput);

            let todoA = document.createElement("a");
            todoA.href = "#";
            todoA.id = "new-todo-add-button";
            todoA.className = "button button-ico-right";
            todoA.innerHTML = "<span>delete</span>";
            todoA.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>';
            
            todoDiv.appendChild(todoA);

            todoA.addEventListener("click", () => {
                todoDiv.remove();
            });

            todoContainer.appendChild(todoDiv);

        newTodo.value = "";
        }
    });
}