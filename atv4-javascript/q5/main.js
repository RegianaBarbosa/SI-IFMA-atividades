const opAnteriorText = document.querySelector('#op-anterior')
const opAtualText = document.querySelector('#op-atual')
const buttons = document.querySelectorAll('#buttons-container button')

//Classe com os métodos das operações da Calculadora
class Calculadora{
    constructor(opAnteriorText, opAtualText){
        //Recebe o que está impresso na tela
        this.opAnteriorText = opAnteriorText
        this.opAtualText = opAtualText
        //Recebe a opercao que estar sendo digitada
        this.opAtual = ''

    }

    //Adiciona o digito clicado
    addDigit(digito){
        
        //Verifica se o decimal já foi adicionado
        if(digito == '.' && this.opAtualText.innerText.includes('.')){
          return;  
        }
        this.opAtual = digito
        this.atualizaTela()
    }

    //Cálculos 
    calcularOperacao(operacao){
        //Verificar se o valor atual é vazio
        if (this.opAtualText.innerText == '' && operacao !== 'C') {
            if (this.opAnteriorText.innerText !== '') {
                //mudar a operacao
                this.mudarOp(operacao)
            }
            return;
        }

        //Obter valor anterior e atual
        let operacaoValue
        const anterior = +this.opAnteriorText.innerText.split(' ')[0]
        const atual = +this.opAtualText.innerText

        switch (operacao) {
            case '÷':
                    operacaoValue = anterior / atual;
                    this.atualizaTela(
                        operacaoValue,operacao,atual,anterior)
                break;
            case 'x':
                    operacaoValue = atual * anterior;
                    this.atualizaTela(
                        operacaoValue,operacao,atual,anterior)
                break;
            case '-':
                    operacaoValue = atual - anterior;                     
                    this.atualizaTela(
                       operacaoValue,operacao,atual,anterior)
                break;
            case '+':
                    operacaoValue = atual + anterior;
                    this.atualizaTela(
                        operacaoValue,operacao,atual,anterior)
                break;        
            case 'CE':
                    this.opCE()
                break;        
            case 'C':
                    this.opC()
                break;        
            case 'DEL':
                    this.opDEL()
                break;        
            case '=':
                    this.resultado()
                break;        
            default:
                return;
        }
    }

    //Atualiza a tela
    atualizaTela(
        operacaoValue = null, 
        operacao = null,
        atual = null,
        anterior = null
        ){
           if(operacaoValue == null){
              this.opAtualText.innerText += this.opAtual;
           } else{
                //Verifica se já tem algum valor anterior
                //se for zero existe apenas o valor atual
                if(anterior == 0){
                    operacaoValue = atual
                }
                if (operacao == '-' && atual<anterior) {
                    operacaoValue = Math.abs(operacaoValue)
                }
                //Adiciona o valor atual ao anterior
                this.opAnteriorText.innerText = 
                `${operacaoValue} ${operacao}` //concatena o valor e a operacao
                this.opAtualText.innerText = ''
           }
    }    

    //Muda Operacao
    mudarOp(operacao){
        const operacoes = ['÷', 'x', '-', '+']

        if (!operacoes.includes(operacao)) {
            return
        }
        this.opAnteriorText.innerText = 
        this.opAnteriorText.innerText.slice(0, -1) 
        + operacao //remover a operacao e adiciona a nova operacao
    }

    //operador apaga digitos atuais
    opCE(){
        this.opAtualText.innerText = ''
    }

    //operador apaga anterior e atual
    opC(){        
        this.opAnteriorText.innerText = ''
        this.opAtualText.innerText = ''
    }
    //operador deleta digito
    opDEL(){
        this.opAtualText.innerText = 
        this.opAtualText.innerText.slice(0, -1)
    }

    //Botao = -> resultado do cálculo
    resultado(){
        const op = this.opAnteriorText.innerText.split(' ')[1] 
        this.calcularOperacao(op)
    }
}

const calc = new Calculadora(opAnteriorText, opAtualText)

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value == '.'){
            calc.addDigit(value)
        } else {
            calc.calcularOperacao(value)
        }
    })
}) 