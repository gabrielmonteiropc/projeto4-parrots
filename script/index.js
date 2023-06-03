/*window.onload = function () {

    perguntarCartas();

};*/

// Função que pergunta a quantidade de cartas
function perguntarCartas() {

    // Perguntar com quantas cartas quer jogar
    let pergunta = Number(prompt('Digite um número de cartas de 4 a 14 e somente números pares'));

    // Usuário só pode inserir números pares de 4 a 14 se não ficar no looping
    while (pergunta % 2 != 0 || pergunta < 4 || pergunta > 14 && pergunta !== NaN) {
        pergunta = Number(prompt('Digite um número de cartas de 4 a 14 e somente números pares'));
    }

}
perguntarCartas()

// Função que faz a virada de cartas 
function virarCarta() {
    const cartaViradaFront = document.querySelector('.front-face');
    cartaViradaFront.classList.toggle('front');

    const cartaViradaBack = document.querySelector('.back-face');
    cartaViradaBack.classList.toggle('back');
}