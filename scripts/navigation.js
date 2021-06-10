
// pantalla inicial
document.querySelector('.intro__continuar').addEventListener('click', function() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.intro2').style.display = 'flex';
});

document.querySelector('.intro2__continuar').addEventListener('click', function() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.intro2').style.display = 'none';
    document.querySelector('.lookup').style.display = 'flex';
})