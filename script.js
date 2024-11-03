//Selecting All//

var input = document.getElementById("input")
var btn = document.getElementById("add")
var todoList = document.getElementById("todoList");

// Creating array for todos list // // local storage//
let todos = [];

// Add button click function//

btn.addEventListener("click",function(){
    todos.push(input.value)
    console.log(todos)
    addtodo(input.value)
    input.value =''
    
})

// create a new function for input todo list value//
function addtodo(todo){
    let para = document.createElement("p")
    para.innerText = todo;
    todoList.appendChild(para)

    //Input value line-throw//
    para.addEventListener("click",function(){
          para.style.textDecoration = "line-through"
          remove(todo)
    })

     //double click remove para //
    para.addEventListener("dblclick",function(){
        todoList.removeChild(para)
        remove(todo)
  })
}


//todo remove function//
function remove(todo){
   let index = todos.indexOf(todo)
    if(index>-1)
        todos.splice(index,1)
}
