/*window.onload = function () {

    perguntarCartas();

};*/


// Variável global guardando um array que usei para fazer o embarelhamento das imagens das cartas pegando o nome delas
let cartasImagens = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
// Variável global
let baralho = [];
// Variável global
let pergunta = 0;

// Função usada para aparecer as cartas no layout
function mostrarCartas() {
    const conteudo = document.querySelector('.conteudo');

    for (let c = 0; c < baralho.length; c++) {
        let recebeCartas = baralho[c];

        conteudo.innerHTML +=
            `<div class="card" onclick = "virarCarta(this)" data-test="card">
                <div class="front-face face">
                    <img src="./img/back.png" data-test="face-down-image">
                </div>
                <div class="back-face face">
                    <img src="./img/${recebeCartas}.gif" data-test="face-up-image">
                </div>
            </div>`;
    }

}


// Função usada para embaralhar as imagens das cartas que eu guardei dentro da variável "cartasImagens"
function cartasEmbaralhadas() {
    for (let t = 0; t < pergunta / 2; t++) {

        let recebeCartas = cartasImagens[t];

        baralho.push(recebeCartas);
        baralho.push(recebeCartas);
    }

    console.log(baralho);

    mostrarCartas();
}


// Função que pergunta a quantidade de cartas
function perguntarCartas() {

    // Perguntar com quantas cartas quer jogar
    pergunta = Number(prompt('Digite um número de cartas de 4 a 14 e somente números pares'));

    // Usuário só pode inserir números pares de 4 a 14 se não ficar no looping
    while (pergunta % 2 != 0 || pergunta < 4 || pergunta > 14 && pergunta !== NaN) {
        pergunta = Number(prompt('Digite um número de cartas de 4 a 14 e somente números pares'));
    }

    cartasEmbaralhadas()
}


// Executar a função que pergunta as cartas para que ao carregar a página apareça o prompt
perguntarCartas()


// Função que faz a virada de cartas 
function virarCarta() {
    const cartaViradaFront = document.querySelector('.front-face');
    cartaViradaFront.classList.toggle('front');

    const cartaViradaBack = document.querySelector('.back-face');
    cartaViradaBack.classList.toggle('back');
}