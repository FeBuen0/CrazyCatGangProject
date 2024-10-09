// Obter o botão de abrir e fechar o pop-up
const openPopupBtn = document.querySelector('.abrir-popup-button');
const closePopupBtn = document.querySelector('.fechar-popup-button');
const popup = document.getElementById('popup');

// Mostrar o pop-up quando o botão de abrir for clicado
openPopupBtn.addEventListener('click', () => {
    popup.classList.add('mostrar');
});

// Fechar o pop-up quando o botão de fechar for clicado
closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('mostrar');
});

// Fechar o pop-up se clicar fora do conteúdo
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('mostrar');
    }
});
