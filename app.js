
//Declaro las variables de inicio
let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}, eres una perrucha`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (numeroSecreto > numeroDeUsuario)
            asignarTextElemento('p', 'El número secreto es mayor');
        else
            asignarTextElemento('p', 'El número secreto es menor');
        intentos++;
        limpiarCaja();
    }   
    return;
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos (sacamos) todos los números
    if (listaNumerosSorteados == numeroMaximo) {
        asignarTextElemento('p', 'Ya se sortearon (salieron) todos los números posibles');
    } else {
        // Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextElemento('h1', 'Juego del Número Secreto');
    asignarTextElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(params) {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje del Juego
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de juego para evitar reinicio de juego entre cada juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();