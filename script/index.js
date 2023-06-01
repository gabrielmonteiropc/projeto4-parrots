function virarCarta(){
    const cartaViradaFront = document.querySelector('.front-face');
    cartaViradaFront.classList.toggle('front');

    const cartaViradaBack = document.querySelector('.back-face');
    cartaViradaBack.classList.toggle('back');
}