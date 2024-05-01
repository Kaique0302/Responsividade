// Espera até que o DOM esteja completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão responsável por ativar o menu lateral e armazena em uma variável
    const toggleMenuBtn = document.getElementById('toggle-menu');
    // Seleciona o elemento que representa o menu lateral e armazena em uma variável
    const menuLateral = document.getElementById('menu-lateral');

    // Adiciona um event listener para o evento de clique no botão
    toggleMenuBtn.addEventListener('click', function() {
        // Quando o botão é clicado, toggle a classe 'ativo' no menu lateral
        menuLateral.classList.toggle('ativo');
    });
});
