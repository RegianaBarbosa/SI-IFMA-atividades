class item {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
}


// Produtos da Lanchonete IFMA
const suco = new item('Suco', 4.00)
const refri = new item('Refrigerante', 2.50)
const agua = new item('Água', 1.50)
const bolo = new item('Bolo', 3.50)
const pastel = new item('Pastel', 3.00)
const torta = new item('Torta', 4.00)


let form = document.querySelector('.form')
var totalPedido = 0;
let pedido = criarPedido()

var calcButton = document.querySelector('#btnCalcular');
calcButton.addEventListener('click', e => {
    e.preventDefault()
    let nome = document.querySelector('#nomeCliente + input').value;

    //obter opcao radio selecionada
    let radioBebida = document.querySelector('input[name="bebida"]:checked').value;
    console.log(radioBebida)
    //cria item de acordo com qual radio checked
    switch (radioBebida) {
        case 'suco':
            pedido.add(suco)
            break;
        case 'refri':
            pedido.add(refri)
            break;
        case 'agua':
            pedido.add(agua)
            break;
    }

    //obter opcoes do check-box checked 
    let checkDocSalg = document.getElementsByName('doceSalg');
    console.log(checkDocSalg)
    for(let i=0; i<checkDocSalg.length;i++){
        if (checkDocSalg != null) {
            if (checkDocSalg[i].checked == true) {
                switch (checkDocSalg[i].value) {
                    case 'bolo':
                        pedido.add(bolo)
                        break;
                    case 'pastel':
                        pedido.add(pastel)
                        break;
                    case 'torta':
                        pedido.add(torta)
                        break;
                }
            } else{
                console.error("Item "+ i + "não marcado");
            }
        } else {
            console.error("Item não encontrado");
        }
    }
    let itens
    itens = pedido.getItens().join(', ')
    console.log(itens)

    //imprimir resultado
    window.alert('Nome do Cliente: ' + nome
        + "\nItens Consumidos: " + pedido.getListNome() 
        + "\nTotal a pagar: R$ " + parseFloat(pedido.getTotal()).toFixed(2) + " reais")
});

function criarPedido() {
    let pedido = {
        itens: [],
        nomeItens: [],

        add: function (item) {
            this.itens.push(item)
            this.nomeItens.push(item.getNome())
        },

        getTotal: function () {
            let total = 0;
            this.itens.forEach(function (item) {
                total = total + item.getPreco()
            })
            return total
        },

        getListNome: function () {
            const nomes = this.nomeItens.join(', ')            
            return console.log(nomes)
        }
    }
    return pedido 
}

