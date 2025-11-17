let victory = 10
let defeat = 5
let result;
 

calculeOSaldoDeVitorias()

function calculeOSaldoDeVitorias(){
    subtracao = victory - defeat
    return subtracao
}

function ranking(){
    if (subtracao <= 10){
        result = "Ferro"
    }else if (subtracao <= 20){
        result = "Bronze"
    }
}