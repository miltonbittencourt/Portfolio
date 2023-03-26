/* Script Menu */

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault()
    }

    const nav = document.getElementById('nav')

    nav.classList.toggle('active')

    const active = nav.classList.contains('active')

    event.currentTarget.setAttribute('aria-expanded', active)

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

const menuButton = document.getElementById('btn-mobile')
const header = document.getElementById('header')
const buttonContent = menuButton.innerHTML

function checkMenuButtonPosition() {
    const headerHeight = header.offsetHeight
    const scrollPosition = window.pageYOffset

    console.log()

    if (scrollPosition > headerHeight) {
        menuButton.classList.remove('btn-mobile-backn')
        menuButton.classList.add('btn-mobile-back')
        menuButton.innerHTML = buttonContent.replace('Menu', '')
    } else {
        menuButton.classList.remove('btn-mobile-back')
        menuButton.classList.add('btn-mobile-backn')
        menuButton.innerHTML = buttonContent
    }
}

window.addEventListener('scroll', checkMenuButtonPosition)
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

/* Script Tema */

const darkBtn = document.getElementById('toggle-dark')

if (localStorage.getItem('data-theme') == 'dark') {
    darkBtn.checked = true 
}

darkBtn.addEventListener('change', (event) => {
    let theme = localStorage.getItem('data-theme')
    
    if (!darkBtn.checked) {
        changeThemeToLight()
    } else {
        changeThemeToDark()
    }

    const label = document.getElementById('label')

    label.classList.toggle('act')

    const act = label.classList.contains('act')

    event.currentTarget.setAttribute('aria-checked', 'act')

    if(act) {
        event.currentTarget.setAttribute('aria-checked', true)
    } else {
        event.currentTarget.setAttribute('aria-checked', false)
    }
})