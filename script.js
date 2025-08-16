document.addEventListener("DOMContentLoaded", function(){
    let Inputarea= document.getElementById("Inputarea");
let addbutton= document.getElementById("addbutton");
let todolist= document.getElementById("Todo-list")

let TaskList= JSON.parse(localStorage.getItem('Task')) ||[];

TaskList.forEach(task => rendertasks(task))
    

addbutton.addEventListener("click", function (){
    let input= Inputarea.value.trim();
    if(input== ""){
        return; //break
    }

   const newtask={
    id: Date.now(),
    text: input,
    completed: false

   }

   TaskList.push(newtask);
   savetask();
   console.log(newtask);
    input="";
})

function rendertasks(task){
let li= document.createElement('li');
if(task.completed){
    li.classList.add('completed');
}
li.classList.add('editli')
li.setAttribute("data-id", task.id);
li.innerHTML= `<span>${task.text}</span>
<button class="deletebutton">Delete</button>`;


todolist.appendChild(li);

li.addEventListener('click', function(event){
if(event.target.classList.contains("deletebutton")){
    return;
}
task.completed = ! task.completed
li.classList.toggle('completed');
})
}

function savetask(){
    localStorage.setItem("Task",  JSON.stringify(TaskList));
}
})


