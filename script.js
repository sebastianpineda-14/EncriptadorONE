var entradaTexto = document.querySelector(".entrada-texto");
var salidaTexto = document.querySelector(".salida-texto");
var seccionTexto1 = document.querySelector(".texto1");
var seccionTexto2 = document.querySelector(".texto2");
var btnCopiar = document.querySelector(".copiar");

function validar(textoValidar){
    return /^[a-z\s]*$/.test(textoValidar);
}

function encriptar() {
    var texto = entradaTexto.value;
    if(!validar(texto)){
        alert("Texto inválido, verifique su texto.")
        return;
    }
    var salida = texto.replace(/e/g, "enter")
                     .replace(/i/g, "imes")
                     .replace(/a/g, "ai")
                     .replace(/o/g, "ober")
                     .replace(/u/g, "ufat");
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function desencriptar() {
    var texto = entradaTexto.value;
    if(!validar(texto)){
        alert("Texto inválido, verifique su texto.")
        return;
    }
    var salida = texto.replace(/ai/g, "a")
                      .replace(/enter/g, "e")
                      .replace(/imes/g, "i")
                      .replace(/ober/g, "o")
                      .replace(/ufat/g, "u");
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function ocultar(){
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "";
}

function mostrar(){
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/buscar.png)";
    seccionTexto1.style.display = "";
    seccionTexto2.style.display = "";
    btnCopiar.style.display = "none";
}

function copiar(){
    var copia = salidaTexto.value;
    navigator.clipboard.writeText(copia);
    
    var anuncio = document.querySelector(".anuncio");
    alert('Texto copiado al portapapeles');
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    setTimeout(() => {
        anuncio.style.display = "none";
    }, 950);
    salidaTexto.value = "";
    mostrar();
}
