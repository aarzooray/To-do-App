
var cont = document.querySelector('#container');

var inputTask = document.querySelector('#inputTask');
var inputBox = document.querySelector('.inputTaskBox');

var addTask = document.querySelector('#addBtn');

//
function addTaskFun()
{


addTask.addEventListener("click", function () {
    var taskBox = document.createElement('div');

    taskBox.classList.add('taskBox');

    var task = document.createElement('li');
    task.innerHTML = inputTask.value;
    task.classList.add('task');


    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.id = "delBtn";
    deleteBtn.innerHTML = `<i class="ri-delete-bin-line"></i>`;

    var doneBtn = document.createElement('button');
    doneBtn.classList.add('btn');
    doneBtn.id ="doneBtn"
    doneBtn.innerHTML = `<i class="ri-check-line"></i>`;

    taskBox.appendChild(task);
    taskBox.appendChild(deleteBtn);
    taskBox.appendChild(doneBtn);
    cont.appendChild(taskBox);


    deleteBtn.addEventListener("click", function () {
        taskBox.remove();
    })

    doneBtn.addEventListener("click", function () {
        task
        task.style.textDecoration = "line-through"
        task.style.textDecorationColor = "red"
    })

    inputTask.value = ""
})

}

function addTaskFunEnter(){
    if(inputTask.value.trim() === "")
        {
    window.addEventListener("keydown", function (event) {
        if(event.key == "Enter")
            {
                event.preventDefault();
        var taskBox = document.createElement('div');
    
        taskBox.classList.add('taskBox');
    
        var task = document.createElement('li');
        task.innerHTML = inputTask.value;
        task.classList.add('task');
    
    
        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn');
        deleteBtn.id ="delBtn"
        deleteBtn.innerHTML = `<i class="ri-delete-bin-line"></i>`;
    
        var doneBtn = document.createElement('button');
        doneBtn.classList.add('btn');
        doneBtn.id ="doneBtn"
        doneBtn.innerHTML = `<i class="ri-check-line"></i>`;
    
        taskBox.appendChild(task);
        taskBox.appendChild(deleteBtn);
        taskBox.appendChild(doneBtn);
        cont.appendChild(taskBox);
    
    
        deleteBtn.addEventListener("click", function () {
            taskBox.remove();
        })
    
        doneBtn.addEventListener("click", function () {
            task.style.textDecoration = "line-through"
            task.style.textDecorationColor = "red"
        })
    
        inputTask.value = ""
    }
    })
}
else{
    alert("hello")
}
}


let loader = document.querySelector("#loader");
window.addEventListener("DOMContentLoaded", function () {
    loader.style.display = "none";

})


addTaskFunEnter();
addTaskFun();