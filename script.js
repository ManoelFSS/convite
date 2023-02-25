
 document.querySelector('h1').style.display = 'none'
 document.querySelector('span').innerHTML= nome;
 document.querySelector('.conteiner_card').style.display = 'block'




do {
  var nome = prompt('Olá, digite seu nome para abrir seu Convite');
} while (nome === ''){

if (nome) {
  
}else{
  alert("Por favor, digite seu nome para continuar.");
  location.reload();
}
if(nome === ''){
  location.reload();
}

document.querySelector('span').innerHTML= nome;
};
