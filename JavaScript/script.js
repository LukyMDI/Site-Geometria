var raio = document.getElementById('raio-cone');
var altura = document.getElementById('altura-cone');
var volume = document.getElementById('volume-cone');
var botao = document.getElementById('botao');

botao.addEventListener('click', function(){
    volume.innerHTML = raio.value;
})