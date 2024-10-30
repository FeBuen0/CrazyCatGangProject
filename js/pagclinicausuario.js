document.addEventListener('DOMContentLoaded', () => {
    const showPopupButton = document.querySelector('.mostrar-popup-botao');
    const hidePopupButton = document.querySelector('.esconder-popup-botao');
    const modalPopup = document.getElementById('modal');

    if (showPopupButton && hidePopupButton && modalPopup) {
        showPopupButton.addEventListener('click', () => {
            modalPopup.classList.add('exibir');
        });

        hidePopupButton.addEventListener('click', () => {
            modalPopup.classList.remove('exibir');
        });

        modalPopup.addEventListener('click', (event) => {
            if (event.target === modalPopup) {
                modalPopup.classList.remove('exibir');
            }
        });
    } else {
        console.error('Um ou mais elementos não foram encontrados.');
    }
});
