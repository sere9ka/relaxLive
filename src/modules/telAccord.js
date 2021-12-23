const telAccord = () => {
    const blockTel = document.querySelector('.header-contacts')
    const tel2 = blockTel.querySelector('.header-contacts__phone-number-accord')
    const tel2Number = tel2.querySelector('.header-contacts__phone-number')
    const arrow = blockTel.querySelector('.header-contacts__arrow')

    const arrowDown = () => {
        arrow.style.transform = 'rotate(180deg)'
        tel2.style.top = '20px'
        tel2Number.style.opacity = '1'
    }
    const arrowUp = () => {
        arrow.style.transform = ''
        tel2.style.top = ''
        tel2Number.style.opacity = ''
    }

    arrow.addEventListener('click', () => {
        if (arrow.style.transform == 'rotate(180deg)') {
            arrowUp()
        } else arrowDown()
    })

}

export default telAccord