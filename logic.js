const inputBox = document.getElementById('text-box');
const list = document.getElementById('list');

function addItem() {
    if (inputBox.value == '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', list.innerHTML);
}

function loadData() {
    list.innerHTML = localStorage.getItem('data');
}
loadData();
