document.addEventListener('DOMContentLoaded', function(){
    const botao = document.querySelector('.botao');

    botao.addEventListener('click', function(){
      mostraElementos();
    })

    function mostraElementos(){
        const elementos = document.querySelectorAll('.doutor__imagens');
        // Adquire o número sorteado aleatoriamente
        const aleatorio = Math.floor(Math.random() * elementos.length);
    
        // Alterna a visibilidade do elemento sorteado
        elementos.forEach((elemento, index) => {
            elemento.style.display = (index === aleatorio) ? 'block' : 'none';
        });
      }
  })

