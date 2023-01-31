const eladdModal = document.querySelector('#turn-on-modal');
const elmodal = document.querySelector('#modal-action');
const elTurnOn = document.querySelector('#turn-on')

eladdModal.addEventListener('click', function() {
elmodal.classList.add('modal-act');
});

elTurnOn.addEventListener('click', function() {
    elmodal.classList.remove('modal-act');
    });