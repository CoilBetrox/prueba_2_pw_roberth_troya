function getNumeroAleatorio(min, max) {
    max++
    
    return Math.floor(Math.random() * (max-min)+min)
}

function getArregloRandom(){
    return getNumeroAleatorio(1,3)
}

export default getArregloRandom

