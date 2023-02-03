const elModal = document.querySelector('#modal-action');
const elTurnOn = document.querySelector('.exit-btn')

if (elTurnOn) {
    elTurnOn.addEventListener('click', function() {
        elModal.classList.add('js-modal');
        });
};

setTimeout(function () {
    elModal.classList.add('modal');
}, 30000);
