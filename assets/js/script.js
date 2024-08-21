// Obtener elementos del DOM
const elInput = document.getElementById('input-texto');
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const borrador = document.querySelector(".borrador");

// Agregar evento keyup al input
elInput.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        btnEncriptar();
    }
});

// Función para encriptar el texto
function encriptar(texto) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    let textoEncriptado = texto.toLowerCase();

    matrizCodigo.forEach(([original, encriptado]) => {
        textoEncriptado = textoEncriptado.replaceAll(original, encriptado);
    });

    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    let textoDesencriptado = texto.toLowerCase();

    matrizCodigo.forEach(([original, encriptado]) => {
        textoDesencriptado = textoDesencriptado.replaceAll(encriptado, original);
    });

    return textoDesencriptado;
}

// Función para manejar la encriptación
function btnEncriptar() {
    if (!inputTexto.value.trim()) {
        return entrada();
    }

    borrador.style.background = "rgba(0, 0, 0, 0.6)";
    borrador.value = "";

    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
}

// Función para manejar la desencriptación
function btnDesencriptar() {
    if (!mensaje.value.trim()) {
        return salida();
    }

    borrador.style.background = "rgba(0, 0, 0, 0.6)";
    borrador.value = "";

    const textoDesencriptado = desencriptar(mensaje.value);
    inputTexto.value = textoDesencriptado;
    inputTexto.style.color = "white";
}

// Función para borrar el contenido
function btnBorrar() {
    inputTexto.style.color = "black";
    borrador.style.background = "rgba(0, 0, 0, 0.6)";
    borrador.style.textAlign = "center";

    inputTexto.value = "";
    mensaje.value = "";
    borrador.value = "";
}
