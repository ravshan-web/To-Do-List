const toDoListForm = document.querySelector('#todolist_form')
const toDoListFormInput = document.querySelector('#todolist-adder-input')
const todolistCollection = document.querySelector('#todolist-collection')
const todolistInputClearX = document.querySelector('#input-clear') 
const deleteAlltodolist = document.querySelector('#delete-all-todo');

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
    todolistCollection.appendChild(todolistLi);
    

    // li elements setting items
    const settingsItem = document.createElement("div");
    const doneBtnEl = document.createElement("div");
    doneBtnEl.className = "done__btn settings";
    doneBtnEl.innerHTML = ' <i class="bi bi-check-circle"></i>  Completed'

    const editBtnEl = document.createElement("div");
    editBtnEl.className = "edit__btn settings";
    editBtnEl.innerHTML = '<i class="bi bi-pencil-square"></i> Edit'

    const timeBtnEl = document.createElement("div");
    const time = new Date();
    const now = `${time.getHours().toString().padStart(2, "0")} : ${time. getMinutes().toString().padStart(2, "0")} : ${time.getSeconds().toString().padStart(2, "0")}`
    timeBtnEl.className = "time__btn settings"
    timeBtnEl.innerHTML = `<i class="bi bi-clock"></i> ${now}`

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
            todolistLi.style.display = "none"
        }
    })  

    toDoListFormInput.value = "";
}

deleteAlltodolist.addEventListener("click", ()=>{
    let confirmIt = confirm("Do you really want delete all of tasks???");
    if(confirmIt){
        todolistCollection.innerHTML = '';
        toDoListFormInput.value = "";
    }
})

