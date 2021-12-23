'use strict'
const menu = () => {
    const body = document.querySelector('body')
    const menuPopup = document.querySelector('.popup-menu');
    const dialogPopup = menuPopup.querySelector('.popup-dialog-menu');
    const footerBtn = body.querySelector('.button-footer a')

    const menuOpen = () => {
        dialogPopup.style.transform = 'translate3d(0, 0, 0)'
    }
    const menuClose = () => {
        dialogPopup.style.transform = ''
    }

    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            menuOpen()
        } else if (e.target.closest('.button-footer')) {
            e.preventDefault()
            document.querySelector(footerBtn.hash).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (e.target.classList.contains('close-menu') || !e.target.closest('.popup-menu-nav__item')) {
            menuClose()
        } else if (e.target.closest('.popup-menu-nav__item')) {
            e.preventDefault()
            menuClose()
            document.querySelector(e.target.hash).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    })
}
export default menu