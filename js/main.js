/* Animação Menu */

const nav = document.getElementById('nav')
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {

    nav.classList.toggle('active')

    const active = nav.classList.contains('active')

    btnMobile.setAttribute('aria-expanded', active)

    if(active) {
        btnMobile.setAttribute('aria-label', 'Fechar Menu')
    } else {
        btnMobile.setAttribute('aria-label', 'Abrir Menu')
    }
}

/* Menu Hamburguer */

const header = document.getElementById('header')
const buttonContent = btnMobile.innerHTML

function checkBtnMobilePosition() {
    const headerHeight = header.offsetHeight
    const scrollPosition = window.pageYOffset

    if (scrollPosition > (headerHeight - 40)) {
        btnMobile.classList.remove('btn-mobile-backn')
        btnMobile.classList.add('btn-mobile-back')
        btnMobile.innerHTML = buttonContent.replace('Menu', '')
    } else {
        btnMobile.classList.remove('btn-mobile-back')
        btnMobile.classList.add('btn-mobile-backn')
        btnMobile.innerHTML = buttonContent
    }
}

window.addEventListener('scroll', checkBtnMobilePosition)

/* Tema */

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