//let numeroSecreto = generarNumeroSecreto();
let numeroSecreto = 0;
//let intentos = 1;
let intentos = 0;
//console.log(numeroSecreto);
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;//buena practica colocar el retorno de una funcion 
}

//let titulo = document.querySelector('h1'); //asignar el objeto "h1" a la variable titulo
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto); // === igual en valor y tipo de dato
    //console.log(intentos);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
    //let valorCaja = document.querySelector('#valorUsuario'); // Se llama al selector generico y con # se indica que es para un id
    //valorCaja.value = '';
}

function generarNumeroSecreto () {
    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
    //Si el número generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // return para que sea devuelto el valor
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() { // la función condiciones iniciales le dara el valor correcto a las asignaciones de variables iniciales
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número aleatorio
    //Inicializar el número de intentos
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
} 

condicionesIniciales();