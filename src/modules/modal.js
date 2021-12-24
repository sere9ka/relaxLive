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
        } else if (e.target.closest('.link-privacy')) {
            popups.forEach(popup => {
                if (popup.classList.contains('popup-privacy')) {
                    popupOpen(popup)
                }
            })
        } else if (e.target.closest('.portfolio-slider__slide-frame')) {
            popups.forEach(popup => {
                if (popup.classList.contains('popup-portfolio')) {
                    popupOpen(popup)
                }
            })
        } else if (e.target.closest('.transparency-item')) {
            popups.forEach(popup => {
                if (popup.classList.contains('popup-transparency')) {
                    popupOpen(popup)
                }
            })
        } else if (e.target.closest('.button_wide')) {
            popups.forEach(popup => {
                if (popup.classList.contains('popup-consultation')) {
                    popupOpen(popup)
                }
            })
        } 
    })

    // закрытие любого popup при нажатии на крестик 
    popups.forEach(popup => {
        popup.addEventListener('click', (e) => {
            if (e.target.closest('.close')) {
                popupClose(popup)
            }
        })
    })
    
}

export default modal