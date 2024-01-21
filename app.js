let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let maximoIntentos = 5;
let listaNumerosSorteados = [];

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número ${numeroUsuario}. En ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }.`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroUsuario > numeroSecreto) {
    asignarTextoElemento("p", "El número es menor");
  } else {
    asignarTextoElemento("p", "El número es mayor");
  }
  intentos++;
  limpiarInput();
  if (intentos > maximoIntentos) {
    asignarTextoElemento(
      "p",
      `Llegaste el número maximo de intentos de ${maximoIntentos}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  }
  return;
}

function limpiarInput() {
  let valor = (document.getElementById("numeroUsuario").value = "");
}

function asignarTextoElemento(elemento, texto) {
  let asignacionTexto = document.querySelector(elemento);
  asignacionTexto.innerHTML = texto;
  return;
}

function numeroAleatorio() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sotearon todos los numeros posibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return numeroAleatorio();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Adivina el numero");
  asignarTextoElemento("p", `Ingresa un número del 1 al ${numeroMaximo}`);
  numeroSecreto = numeroAleatorio();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarInput();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
