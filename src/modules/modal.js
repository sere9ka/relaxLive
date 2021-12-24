const modal = () => {
    // все события на body, массив всех модальных окон
    const body = document.querySelector('body')
    const popups = document.querySelectorAll('.popup')

    // функции открытия / закрытия popup
    const popupOpen = (popup) => {
        popup.style.visibility = 'visible'
    }
    const popupClose = (popup) => {
        popup.style.visibility = ''
    }

    // в зависимости от кнопки передаём конкретный popup
    body.addEventListener('click', (e) => {
        if (e.target.closest('.fullList')) {
            popups.forEach(popup => {
                if (popup.classList.contains('popup-repair-types')) {
                    popupOpen(popup)
                }
            })
            
        }
    })

    // закрытие любого popup при нажатии не в диалоговом окне
    popups.forEach(popup => {
        popup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-dialog')) {
                popupClose(popup)
            }
        })
    })
    
}

export default modal