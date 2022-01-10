const accordeon = () => {
    const sectionFAQ = document.getElementById('faq')
    const listFAQ = sectionFAQ.querySelector('ul')
    const items = listFAQ.querySelectorAll('h2')

    const goActive = (title, i) => {
        items.forEach(item => {
            item.classList.remove('msg-active')
        })
        title.classList.add('msg-active')
    }

    items.forEach((item, i) => {
        // const title = item.querySelector('h2')
        
        item.addEventListener('click', () => {
            goActive(item, i)
        })
    })
}

export default accordeon