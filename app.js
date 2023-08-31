const input = document.querySelector("input")
const ul = document.querySelector("ul")
const errorMessage = document.querySelector("#error-message"); 
let todo = []
function sends() {
    if (input.value == '') {
        errorMessage.textContent = 'Please enter a task'; 
    }
    else {

        console.log(input.value);
        todo.push(input.value);
        console.log(todo);
        input.value = ''
        ul.innerHTML = "";
        for (let i = 0; i < todo.length; i++) {
            const list = todo[i];
            ul.innerHTML += `<li>${list}</li><button  onclick="deleteTask(${i})" >Delete</button>
                <button onclick="editTask(${i})">Edit</button> `
        }

    }
}
function deleteTask(index) {
    todo.splice(index, 1); 
    renderTasks(); 
}

function editTask(index) {
    const newText = prompt('Edit task:', todo[index]);
    if (newText !== null) {
        todo[index] = newText;
        renderTasks();
    }
}

function renderTasks() {
    ul.innerHTML = "";
    for (let i = 0; i < todo.length; i++) {
        const list = todo[i];
        ul.innerHTML += `
            <li>${list}
                <button onclick="deleteTask(${i})">Delete</button>
                <button onclick="editTask(${i})">Edit</button>
            </li>`;
    }
}















