let victory = 0
let defeat = 10
let result = definition(victory - defeat)

function definition(subtraction){
    if (subtraction >0 <= 10){
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
    console.log("O ranking do Heroi é: "+ ranking)
}
