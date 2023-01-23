const toDoListForm = document.querySelector('#todolist_form')
const toDoListFormInput = document.querySelector('#todolist-adder-input')
const todolistCollection = document.querySelector('#todolist-collection')
const todolistInputClearX = document.querySelector('#input-clear') 
const deleteAlltodolist = document.querySelector('#delete-all-todo');

// Modal Window variables
const modalWindow = document.querySelector('#modal_window')
const modalConfirmYes = document.querySelector('#modal_yes')
const modalConfirmNo = document.querySelector('#modal_no')

const body = document.querySelector("body")
console.log(body);

todolistInputClearX.addEventListener("click" , ()=>{
    toDoListFormInput.value = "";
})

toDoListForm.addEventListener("submit", AddToDo)

function AddToDo(e){
    e.preventDefault();
    const inputValue = toDoListFormInput.value; 
    const todolistLi = document.createElement("li");
    todolistLi.className = "collection-item";
    const todolistText = document.createElement("p");
    todolistText.innerText = inputValue;
    todolistLi.appendChild(todolistText);
    todolistCollection.prepend(todolistLi);
    

    // li elements setting items
    const settingsItem = document.createElement("div");
    const doneBtnEl = document.createElement("div");
    doneBtnEl.className = "done__btn settings";
    doneBtnEl.innerHTML = ' <i class="bi bi-check-circle"></i>  Completed'

    const editBtnEl = document.createElement("div");
    editBtnEl.className = "edit__btn settings";
    editBtnEl.innerHTML = '<i class="bi bi-pencil-square"></i> Edit'


    //time btn
    const timeBtnEl = document.createElement("div");
    const time = new Date();
    const now = `${time.getHours().toString().padStart(2, "0")} : ${time. getMinutes().toString().padStart(2, "0")} : ${time.getSeconds().toString().padStart(2, "0")}`

    const current12Hours = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true })
        // console.log(current12Hours);

    timeBtnEl.className = "time__btn settings"
    timeBtnEl.innerHTML = `<i class="bi bi-clock"></i> ${now}`


    //deletebtn
    const deleteBtnEl = document.createElement("div");
    deleteBtnEl.className = "delete__btn settings"
    deleteBtnEl.innerHTML = '<i class="bi bi-trash3-fill"></i> Remove'

    settingsItem.className = "settings-item";
    settingsItem.appendChild(doneBtnEl);
    settingsItem.appendChild(editBtnEl);
    settingsItem.appendChild(timeBtnEl);
    settingsItem.appendChild(deleteBtnEl);
    todolistLi.appendChild(settingsItem);


    // DELETE ONE OF TASK FROM TODO LIST
    deleteBtnEl.addEventListener("click", ()=>{
        let confirmation = confirm("Do you really want to delete this task?")
        if(confirmation){
            todolistLi.remove()
        }
    })  


    // COMPLETE ONE OF TASK FROM TOFO LIST
    doneBtnEl.addEventListener('click', (e)=>{
            todolistText.classList.toggle("completed") 
            doneBtnEl.classList.toggle("completed-btn-style")
    })
    

    // EDIT BUTTON CODE
    editBtnEl.addEventListener('click', ()=>{
        if(todolistText.hasAttribute("contenteditable")){
            todolistText.removeAttribute("contenteditable")
            editBtnEl.innerHTML = '<i class="bi bi-pencil-square"></i> Edit'
            editBtnEl.style.background = "orange"
        }
        else{
            todolistText.setAttribute("contenteditable", true)
            editBtnEl.innerHTML = '<i class="fas fa-check-double"></i> Save edit'
            editBtnEl.style.background = "purple"
        }
    })


    //TIME BUTTON CODE
    timeBtnEl.addEventListener('click' , ()=>{
        if(timeBtnEl.innerHTML == `<i class="bi bi-clock"></i> ${now}`){
            timeBtnEl.innerHTML = `<i class="bi bi-clock"></i> ${current12Hours}`
        }
        else{
            timeBtnEl.innerHTML = `<i class="bi bi-clock"></i> ${now}`
        }        
    })


    toDoListFormInput.value = "";
}





//DELETING ALL TASKS

deleteAlltodolist.addEventListener("click", ()=>{
    modalWindow.style.display = "flex";
    // let confirmIt = confirm("Do you really want delete all of tasks???");
    // if(confirmIt){
    //     todolistCollection.innerHTML = "";
    //     toDoListFormInput.value = "";
    // }
})

    

    


    
    

    
    
  


