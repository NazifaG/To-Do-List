let input = document.querySelector('#toDoInput');
let button = document.querySelector('#addButton');
let list = document.querySelector('#toDoList');
let arr = [];

button.addEventListener('click', function(){
    let arrText = input.value;
    if (arrText !== "") {
        arr.push(arrText);
        controlList();
        input.value=""
    }
});

input.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let a = input.value;
        if (a !== "") {
            arr.push(a);
            controlList();
            input.value = ""
        }
    }
});

function controlList() {
    list.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        li.classList.add("li");
        controlButton(li, i);
        list.appendChild(li);
    }
}


function controlButton(li, i) {
    let buttonContainer = document.createElement("div")
    buttonContainer.classList.add("buttonContainer")


    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function(){
        arr.splice(i, 1);
        controlList();
    });

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("editButton");
    editButton.addEventListener("click", function(){
        let newToDo = prompt('Change your To-Do List:',arr[i]);
        if(newToDo !== ""){
            arr[i] = newToDo;
            controlList();
        }
    });
     
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(editButton);
    li.appendChild(buttonContainer)
}
