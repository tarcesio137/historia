function setup() {
  
}

const avança = document.querySelectorAll('.proximo');
avança.forEach(button =>
              {
button.addEventListener('click', function(){
  const atual = document.querySelector('.ativo');
  const proximoPasso = "passo-" + this.getAttribute('data-proximo');
  atual.classList.remove('ativo');
  document.getElementById(proximoPasso).classList.add('ativo');
})
})

let musica;

function setup(){
  musica.loop();
  musica.play();
}

function preload(){
  musica = loadSound("fundo.mp3");
}
