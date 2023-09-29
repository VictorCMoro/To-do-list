const task = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function AddTask(){
    const taskValue = task.value
    if (taskValue === '') {
        alert("Você deve escrever algo para adicionar como tarefa.")
    } else {
        let li = document.createElement('li')
        li.innerHTML = task.value;
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    task.value = ''
    saveData()
}

listContainer.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
        saveData()
    } else if (ev.target.tagName === 'SPAN') {
        ev.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()