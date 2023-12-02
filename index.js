function soma(vitorias,derrotas){
    let result = vitorias - derrotas
    return result
}
function ranked(){
    let valor = soma(255,188)
    let nivel = ""
    
    if(valor <=10){
        nivel = "Ferro"
    }
    else if(valor <=20){
        nivel = "Bronze"
    }
    else if(valor <=50){
        nivel = "Prata"
    }
    else if(valor <=80){
        nivel = "Ouro"
    }
    else if(valor <=90){
        nivel ="Diamante"
    }
    else if(valor <=100){
        nivel = "Lendário"
    }
    else if (valor <=101){
        nivel = "Imortal"
    }

return "O Herói tem saldo de " + valor + " está no nivel de " + nivel
}
console.log(ranked())