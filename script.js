var textoentrada = document.querySelector("#textentrada");
var boton = document.querySelector(".botonazul");
var textosalida = document.querySelector("#textsalida");
var nada = document.querySelector(".nada");
var botondes = document.querySelector(".desencriptar");
var copiar = document.querySelector(".copiar");
const datossal = document.querySelectorAll(".contsalida");
boton.onclick = encriptar;
copiar.onclick = copiarsalida;
botondes.onclick = desencriptar;
textosalida.onchange = cambio;

function encriptar() {
    var texto = textoentrada.value;
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    texto = texto.replaceAll("e", "enter");
    texto = texto.replaceAll("i", "imes");
    texto = texto.replaceAll("a", "ai");
    texto = texto.replaceAll("o", "ober");
    texto = texto.replaceAll("u", "ufat");
    textosalida.value = texto;
    cambio();
}

function desencriptar() {
    var texto = textoentrada.value;
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
    textosalida.value = texto;
    cambio();
}

function cambio() {
    var ancho = screen.width;
    if (textosalida.value != "") {
        nada.style.opacity = "0";
        datossal.forEach(element => {
            element.style.opacity = "1";
            if (ancho < 1025) {
                element.style.display = "block"
            }
        });
    }else{        
        nada.style.opacity = "1";
        datossal.forEach(element => {
            element.style.opacity = "0";
            if (ancho < 1025) {
                element.style.display = "none"
            }
        });
    }
}

function copiarsalida() {
    navigator.clipboard.writeText(textosalida.value)
        .then(() => {
            console.log('Texto copiado al portapapeles')
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
        })
}