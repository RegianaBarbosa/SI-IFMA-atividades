let n1
let n2
let form = document.querySelector('.form')
const tbody = document.querySelector('#tbody');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    n1 = Number(form.querySelector('#n1').value)    
    console.log(n1)
    n2 = Number(form.querySelector('#n2').value)
    console.log(n2)
    // SOMA
    let tr = document.createElement('tr')
    tr.appendChild(addTd(n1 + " + " + n2))
    tr.appendChild(addTd(n1 + n2))
    tbody.appendChild(tr)
    // MULTIPLICACAO
    tr = document.createElement('tr')
    tr.appendChild(addTd(n1 + " * " + n2))
    tr.appendChild(addTd(n1 * n2))
    tbody.appendChild(tr)
    // DIVISAO
    tr = document.createElement('tr')
    tr.appendChild(addTd(n1 + " / " + n2))
    tr.appendChild(addTd(n1 / n2))
    tbody.appendChild(tr)
    // DIVISAO COM RESTO    
    tr = document.createElement('tr')
    tr.appendChild(addTd(n1 + " % " + n2))
    tr.appendChild(addTd(n1 % n2))
    tbody.appendChild(tr)


})

function addTd(info) {
    let td = document.createElement('td')
    td.textContent = info
    return td;
}