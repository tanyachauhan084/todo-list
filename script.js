let Inputarea= document.getElementById("Inputarea");
let addbutton= document.getElementById("addbutton");


TaskList= [];


 function todo(){
    let inputt= Inputarea.value.trim();
    if(inputt==""){
        return;
    }
    
    console.log(inputt);
    inputt="";

 }


 addbutton.addEventListener("click", todo)

 Inputarea.addEventListener("keydown", function(event){
if(event.key== 'Enter'){
    todo();
}
 })

