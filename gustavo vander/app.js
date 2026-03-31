let inputTexto = document.querySelector(".texto");

let idioma = document.querySelector(".idioma");

let traducao = document.querySelector(".traducao");

async function traduzir() {
    console.log(inputTexto.value);

let url = "https://api.mymemory.translated.net/get?qbom%20trabalho!&langpair=pt|it";

let resposta = await fetch(url);
let traducao = await resposta.json();

console.log(traducao.responseData.transLatedText);

}