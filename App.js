const input = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const btn = document.querySelector('button')


function addTask(){
  if (input.value==="") {
      alert('Nothing show for inside box o!')
  } else {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    listContainer.appendChild(li)
    let span = document.createElement('span');
    span.innerHTML = '\u00d7'
    li.appendChild(span);
  }

  input.value=""

  saveData()
}

btn.addEventListener('click', addTask)


listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
      saveData()
  } else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData()
  }
})


function saveData(){
  localStorage.setItem('data', listContainer.innerHTML)
}

function showDta() {
  listContainer.innerHTML = localStorage.getItem('data');
}

showDta()