const form = document.querySelector('form');
const task = document.getElementById('Task');
const addButton = document.querySelector('button');
const allTask = document.getElementById('AllTask');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = task.value.trim();
    if(text == ""){
        return;
    }
    const parent  = document.createElement('div');
    parent.style.marginTop = '10px';
     
    const appearingText = document.createElement('span');
    appearingText.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "delete";
    deleteButton.style.marginLeft = "10px";

    const doneButton = document.createElement("button");
    doneButton.textContent = "done";
    doneButton.style.marginLeft = "10px";

    parent.append(appearingText, deleteButton, doneButton);

    allTask.append(parent);

    deleteButton.addEventListener('click',(e)=> {
        parent.remove();

    })

    doneButton.addEventListener('click',(e)=> {
        appearingText.style.textDecoration = 'line-through';
        appearingText.style.color = 'grey';
    })
    form.reset();

})