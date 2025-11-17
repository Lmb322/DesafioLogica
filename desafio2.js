let victory = 10
let defeat = 5
let result = calculeOSaldoDeVitorias()

function calculeOSaldoDeVitorias(){
    subtracao = victory - defeat
    return subtracao
    ranking()
}

function definicao(){
    if (result <= 10){
        ranking = "Ferro"
    }else if (result <= 20){
        ranking = "Bronze"
    }else if (result <= 30){
        ranking = "Prata"
    }else if (result <= 40){
        ranking = "Ouro"
}

console.log("O ranking do Heroi é: "+ ranking)