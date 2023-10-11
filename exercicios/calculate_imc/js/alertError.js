export const AlertError = {
    element: document.querySelector('.alert-error'),
    show() {
        AlertError.element.classList.add('open')
    },
    hide() {
        AlertError.element.classList.remove('open')
    }
}