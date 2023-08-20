// scroll-transition.js

// Define a posição de início da animação da transição
const transitionStart = 500; // A posição de rolagem onde a transição deve começar

// Adiciona um ouvinte de evento para o clique no botão
const transitionButton = document.getElementById('transitionButton');
transitionButton.addEventListener('click', function () {
    // Faz a animação da transição
    document.body.style.opacity = '0'; // Altera a opacidade da página atual para esconder
    setTimeout(() => {
        window.location.href = 'pagina2.html'; // Redireciona para a próxima página
    }, 500); 
});