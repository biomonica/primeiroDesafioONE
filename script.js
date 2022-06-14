const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
inputTexto.focus();

inputTexto.addEventListener("keypress", function(e){
    if(!checkChar(e)) {
        e.preventDefault();
    }
});

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a-zA-Z ]';

    if(char.match(pattern)) {
        console.log(char);
        return true;
    } else {
        alert("Não devem ser utilizados letras com acentos ou caracteres especiais.")
    }
}

function btnEncriptar() {
    const textoEncriptado=encriptar(inputTexto.value)
    mensagem.value=textoEncriptado
    mensagem.style.backgroundImage="none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    } 
    return stringEncriptada;
}

function copiarTexto(){
    let content = document.querySelector(".mensagem").value;
    navigator.clipboard.writeText(content);
    inputTexto.value = ""
    mensagem.value = ""
    inputTexto.focus();
    
}

function btnDesencriptar(){
    const textoDesencriptado=desencriptar(inputTexto.value)
    mensagem.value=textoDesencriptado
    mensagem.style.backgroundImage="none"
}

function desencriptar(stringDesencriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}