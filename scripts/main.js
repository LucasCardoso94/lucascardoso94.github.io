let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
  }
}
if(!localStorage.getItem('nome')){
  defineNomeUsuario();
}
else{
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.innerHTML = 'Mozilla é legal, ' + nomeGuardado;
}

meuBotao.onclick = function(){ defineNomeUsuario();}

let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/mozila.jpg') { minhaImagem.setAttribute('src','imagens/firefox2.png');}
    else { minhaImagem.setAttribute ('src','imagens/mozila.jpg');}
}