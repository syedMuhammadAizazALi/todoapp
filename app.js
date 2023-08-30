const input =document.querySelector("input")
let todo = []
function sends() {
    if(input.value==''){
     alert('please enter task')
    }
    else{
    console.log(input.value);
    input.value=''
    todo.push(input);
    console.log(todo);
    for (let i = 0; i < todo.length; i++) {
       ul.innerHTML= `<li>${todo} </li>`
            
    }
}
    }

