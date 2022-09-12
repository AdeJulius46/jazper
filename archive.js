let create = document.getElementById("create")
let cancel = document.getElementById("cancel")
let addTask = document.getElementById("add-task")
let dateInput = document.getElementById("date-input")
let textInput = document.getElementById("text-input")
let topicInput = document.getElementById("topic-input") 
let msg = document.getElementById("msg")
let taski = document.getElementById("taski")

create.addEventListener("click",function(){
 document.getElementById("modal-containert").style.display="block"

})

cancel.addEventListener("click",function(){
 document.getElementById("modal-containert").style.display="none"

})

addTask.addEventListener("click",function(){
    addTaskvalidation(); 
})
 
function addTaskvalidation(){
    if(topicInput.value === ""){
        msg.innerHTML = "This cannot be empty"
         
    }
    else{
        msg.innerHTML = "";
        acceptdata();   
        document.getElementById("modal-containert").style.display="none"  
    }
}

let data ={}
 
function acceptdata(){
    data["text"]=textInput.value;
    data["description"]=topicInput.value;
    data["date"]=dateInput.value;
    createtaski()
}
function createtaski(){
    taski.innerHTML +=`  <li>
    <h3 class="Description">${data.description}</h3>
    <h5 class="details">${data.text}</h5>
    <div class="task-icons">
        <a href="" class="edit"><i class="fa-solid fa-pen-to-square"></i></a>
        <a href="" class="date"><i class="fa-regular fa-calendar-days"></i></a>
        <a href="" class="delete"><i class="fa-solid fa-trash"></i></a>
    </div>
    <div class="todos-btns">
        <div class="todos-btns1">
            <i class="fa-regular fa-clock"></i>
            <h6 class="time">${data.date}</h6>
        </div>
        <div class="todos-btns2">
            <h6>Archived</h6>
            <i class="fa-solid fa-clipboard"></i> 
        </div>
    </div>
</li>`
reset()
}

function reset(){
    topicInput.value= ""
    dateInput.value= ""
    textInput.value= "" 
  
}