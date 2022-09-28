// 947 1920

var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
altura = window.innerHeight
largura = window.innerWidth
// console.log(largura, altura)

}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){ 

//Remover o Mosquito anterior ( caso ja exista um)
if ( document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();

}


var posicaoX = Math.floor( Math.random() * largura ) - 90
var posicaoY = Math.floor( Math.random() * altura ) - 90

posicaoX = posicaoX < 0 ? posicaoX : posicaoX
posicaoY = posicaoY < 0 ? posicaoY : posicaoY

// criar o Elemento HTML

var mosquito = document.createElement('img')
mosquito.src = '../imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'


document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'

    }

}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
      

    }


}