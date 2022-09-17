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

let data =[]
 
function acceptdata(){
    data.push({
     text:textInput.value,
     description:topicInput.value,
     date:dateInput.value,

     
    });
    localStorage.setItem("data",JSON.stringify(data))
    console.log(data);

    
    createtaski()
}
function createtaski(){
    taski.innerHTML ="";
    data.map((x,y)=>{
        return(
            taski.innerHTML +=`  <li id${y} >
            <h3 class="Description">${x.description}</h3>
            <h5 class="details">${x.text}</h5>
            <div class="task-icons">
                <i onClick="editbtn(this)"  class="fa-solid edit fa-pen-to-square"></i>
                <i onClick="editbtn(this)" class="fa-regular fa-calendar-days edit"></i>
                <i onClick="deletebtn(this);createtaski()" class="fa-solid fa-trash delete"></i>
            </div>
            <div class="todos-btns">
                <div class="todos-btns1">
                    <i class="fa-regular fa-clock"></i>
                    <h6 class="time">${x.date}</h6>
                </div>
                <div class="todos-btns2">
                    <h6>Upcoming</h6>
                    <i class="fa-solid fa-clipboard"></i> 
                </div>
            </div>
        </li>`);
    })

reset()
}
 
function editbtn(e){
   let selectedTask =e.parentElement.parentElement
   topicInput.value= selectedTask.children[0].innerHTML
   dateInput.value= selectedTask.children[2].innerHTML
   textInput.value= selectedTask.children[1].innerHTML
    edit()
    deletebtn(e)
}
function edit(){
    document.getElementById("modal-containert").style.display="block" 
}


function deletebtn(e){
e.parentElement.parentElement.remove()
data.splice(e.parentElement.parentElement.id, 1)
localStorage.setItem("data",JSON.stringify(data))
}

function reset(){
    topicInput.value= "";
    dateInput.value= "";
    textInput.value= "";
  
}

(() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    createtaski()
    console.log(data)
} )();