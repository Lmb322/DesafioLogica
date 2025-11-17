let victory = 100
let defeat = 60
let result = calculeOSaldoDeVitorias()
let ranking;

function calculeOSaldoDeVitorias(){
    subtracao = victory - defeat
    return subtracao
}

definicao()
function definicao(){
    if (result <= 10){
        ranking = "Ferro"
    }else if(result <= 20){
        ranking = "Bronze"
    }else if(result <= 30){
        ranking = "Prata"
    }else if(result <= 40){
        ranking = "Ouro"
    }
    return ranking
}

console.log("O ranking do Heroi é: "+ ranking)