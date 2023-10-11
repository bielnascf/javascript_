export const Modal = {
    popUp: document.querySelector('.modal-wrapper'),
    text: document.querySelector('h2'),
    rank: document.querySelector('#rank'),
    closeButton: document.querySelector('#closeButton'),

    open() {
        Modal.popUp.classList.add('open')
    },
    close() {
    Modal.popUp.classList.remove('open')

    }
}

Modal.closeButton.addEventListener('click', () => {
    Modal.close()
})