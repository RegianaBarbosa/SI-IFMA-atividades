class item {
    constructor(codigo, nome, preco){
        this.codigo = codigo
        this.nome = nome
        this.preco = preco
    }

    getCodigo(){
        return this.codigo;
    }
    getNome(){
        return this.nome;
    }
    getPreco(){
        return this.preco;
    }

    getTotal(quantidade){
        return this.preco * quantidade;
    }
}

const item1 = new item (100, 'Cachorro Quente', 5.20);
const item2 = new item (101, 'Bauru Simples', 9.30);
const item3 = new item (102, 'Bauru com Ovo', 11.50);
const item4 = new item (103, 'Hambúrguer', 15.20);
const item5 = new item (104, 'Cheeseburguer', 16.30);
const item6 = new item (105, 'Refrigerante', 5.00);

const  form = document.querySelector('.form')
const tbody = document.querySelector('#tbodyItemPedido');
let codigo;
let quantidade;
let total = 0;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    codigo = form.querySelector('#codigo').value
    quantidade = form.querySelector('#quantidade').value
    console.log(codigo)

    switch(codigo){
        case '100':
            addTr(item1, quantidade)
            break;
        case '101':
            addTr(item2, quantidade)
            break;
        case '102':
            addTr(item3, quantidade)
            break;
        case '103':
            addTr(item4, quantidade)
            break;
        case '104':
            addTr(item5, quantidade)
            break;
        case '105':
            addTr(item6, quantidade)
            break;
        default:
            alert("Produto Inexistente")
    }
})

function addTd(valor){
    let td = document.createElement('td')
    td.textContent = valor
    return td;
}

function addTr(item, quantidade){
    let tr = document.createElement('tr')

    tr.appendChild(addTd(item.codigo))
    tr.appendChild(addTd(item.nome))
    tr.appendChild(addTd(quantidade))    
    tr.appendChild(addTd(item.preco))
    tr.appendChild(addTd(item.getTotal(quantidade)))
    tr.appendChild(addTd(trTotal(item, quantidade)))

    tbody.appendChild(tr);
}

function trTotal(item, quantidade){
    let tdTotal = document.querySelector('.js-total');    
    total = total + item.getTotal(quantidade);
    tdTotal.textContent = parseFloat(total)
    
}