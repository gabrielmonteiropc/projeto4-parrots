/*window.onload = function () {

    perguntarCartas();

};*/


// Variável global guardando um array que usei para fazer o embarelhamento das imagens das cartas pegando o nome delas
let cartasImagens = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
// Variável global
let baralho = [];
// Variável global
let pergunta = 0;
// Variável global
let c1, c2;
// Variável global
let testeJogadas = 0, testeJogadasCertas = 0;

// Função para verificar o fim de jogo
function fimJogo() {
    if (testeJogadasCertas === baralho.length) {
        alert('fim de jogo');
    }
}

// Função para desvirar as cartas quando o usuário em cartas erradas
function desvirarSetTimeoOut() {

    c1.classList.remove('virarCarta');
    c2.classList.remove('virarCarta');

    c1 = undefined;
    c2 = undefined;
}

// Função que faz a virada de cartas 
function virarCarta(cartaQueFoiClicada) {

    if (cartaQueFoiClicada.classList.contains('virarCarta')) {
        return;
    }

    testeJogadas = testeJogadas + 1

    if (c1 === undefined) {
        c1 = cartaQueFoiClicada;

        c1.classList.add('virarCarta');
    } else {
        if (c2 === undefined) {
            c2 = cartaQueFoiClicada;

            c2.classList.add('virarCarta');

            if (c2.innerHTML === c1.innerHTML) {

                testeJogadasCertas = testeJogadasCertas + 2

                c1 = undefined;
                c2 = undefined;

                fimJogo();

            } else {

                setTimeout(desvirarSetTimeoOut, 1000);

            }
        }
    }
    console.log(c1);
    console.log(c2);
}


// Função disponibilizada no Notion para embaralhar as cartas
function comparador() {
    return Math.random() - 0.5;
}


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

    baralho.sort(comparador);

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
