function campeonato(firstPlace, secondPlace, lastPlace){
    let arrayDeResultado = [firstPlace, secondPlace, lastPlace]
    if (firstPlace === "Daniel"){
        return " 1ª - Colocado : " + arrayDeResultado[0] + ", 2ª - Colocado :" + arrayDeResultado[1] +", 3ª - Colocado: " + arrayDeResultado[2]
    }
    if (secondPlace === "Daniel") {        
        return " 1ª - Colocado : " + arrayDeResultado[1] + ", 2ª - Colocado :" + arrayDeResultado[0] +", 3ª - Colocado: " + arrayDeResultado[2]
    }
    return " 1ª - Colocado : " + arrayDeResultado[0] + ", 2ª - Colocado :" + arrayDeResultado[2] +", 3ª - Colocado: " + arrayDeResultado[1]
}
console.log (campeonato("Daniel","Manoel","Rafael"))
console.log (campeonato("Manoel","Daniel","Rafael"))
console.log (campeonato("Rafael","Manoel","Daniel"))