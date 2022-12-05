const container = document.querySelector('.container-sm');
let btn = document.querySelector('.btn')
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
btn.addEventListener('click', e => {
    e.preventDefault()

    let dataInfo = document.querySelector('#inputData').value
    var ano = dataInfo.split('-')[0]
    var mes = dataInfo.split('-')[1]
    var dia = dataInfo.split('-')[2]
    console.log(dia)
    console.log(mes)
    console.log(ano)

    if(validar(ano, mes, dia) == true){        
        var diaext = dia + " de " + meses[parseInt(mes)] + " de " + ano;
        dataExtenso(diaext)
    }
    else{
        window.alert("Data Inválida")
    }
})

function validar(anoInfo, mesInfo, diaInfo) {
    var dia = parseInt(diaInfo);
    var mes = parseInt(mesInfo);
    var ano = parseInt(anoInfo);
    let validador
    //valida os meses com 31 dias
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (dia <= 31)
                validador=true
            else
                validador=false
                window.alert('Mês Inválido')
            break;
        //valida os meses com 30 dias
        case 4: case 6:
        case 9: case 11:
            if (dia <= 30)
                validador=true
            else
                validador=false
                window.alert('Mês Inválido')
            break;
        //valida o mes de fevereiro
        case 2:
            if ((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0))
                {if (dia <= 29){
                    validador=true}
                else{
                    validador=false
                    window.alert('Mês Inválido')}}
            else{
                if (dia <= 28){
                    validador=true}
                else{
                    validador=false
                    window.alert('Mês Inválido')}}
            break;
    }
    return validador
}
function dataExtenso(texto) {
    //adiciona data por extenso no html
    document.getElementById("resultado").innerHTML = texto;
}