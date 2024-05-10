const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {

    // Mensaje predeterminado
    const message = Ya somos novios 

    // Abrir la URL en una nueva pestaña o ventana
    window.open(whatsappUrl, '_blank');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
