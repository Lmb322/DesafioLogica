let victory = 92
let defeat = 1
let result = definition()

definition()
function definition(){
    let subtraction = victory - defeat
    if (subtraction <= 10){
        ranking = "Ferro"
    }else if(subtraction <= 20){
        ranking = "Bronze"
    }else if(subtraction <= 50){
        ranking = "Prata"
    }else if(subtraction <= 80){
        ranking = "Ouro"
    }else if(subtraction <= 90){
        ranking = "Diamante"
    }else if(subtraction <= 100){
        ranking = "Lendário"
    }else{
        ranking = "Imortal"
    }
    return ranking
}
console.log("O ranking do Heroi é: "+ ranking)