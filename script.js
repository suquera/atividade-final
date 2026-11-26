
// Aguarda o HTML carregar
document.addEventListener("DOMContentLoaded", function () {

    // Pega o elemento do ano no rodapé
    const anoAtual = document.getElementById("anoAtual");

    // Mostra o ano atual automaticamente
    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }

    // Seleciona o botão do menu
    const menuBotao = document.getElementById("menuBotao");

    // Seleciona a lista de links
    const menuLinks = document.getElementById("menuLinks");

    // Verifica se os elementos existem
    if (menuBotao && menuLinks) {

        // Cria uma função para abrir e fechar o menu
        menuBotao.addEventListener("click", function () {

            menuLinks.classList.toggle("aberto");

            // Verifica se o menu está aberto
            const menuEstaAberto = menuLinks.classList.contains("aberto");

            menuBotao.setAttribute("aria-expanded", menuEstaAberto);

            // Altera o símbolo do botão
            menuBotao.textContent = menuEstaAberto ? "×" : "☰";

        });

    }

});
