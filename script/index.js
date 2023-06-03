/*window.onload = function () {

    perguntarCartas();

};*/

function perguntarCartas() {

    // Perguntar com quantas cartas quer jogar
    const pergunta = Number(prompt('Com quantas cartas você quer jogar?'));

    // Só pode inserir números pares de 4 a 14
    if (pergunta >= 4 && pergunta <= 14) {
        alert('FUNCIONOU!');
    } else { // Se for número inválido o prompt tem que ficar se repetindo em Looping até o número ser válido
        
        let contadorCartas = 0;

        for (contadorCartas = 0; contadorCartas <= 1; contadorCartas++) {
            prompt('Número inválido! Digite um número par entre 4 a 14');
            prompt('Digite um número válido');
        } 
    }
}

perguntarCartas()

function virarCarta() {
    const cartaViradaFront = document.querySelector('.front-face');
    cartaViradaFront.classList.toggle('front');

    const cartaViradaBack = document.querySelector('.back-face');
    cartaViradaBack.classList.toggle('back');
}