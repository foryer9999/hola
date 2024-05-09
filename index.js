const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {

    // Número de teléfono de WhatsApp (incluyendo el código de país)
    const phoneNumber = '59160499541'
    // Reemplaza con el número de WhatsApp deseado

    // Mensaje predeterminado
    const message = encodeURIComponent('¡Sí, quiero ser tu novia!'); // Mensaje codificado para URL

    // Crear la URL de WhatsApp con el número y el mensaje
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

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
