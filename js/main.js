/* Script Menu */

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault

    const nav = document.getElementById('nav')

    nav.classList.toggle('active')

    const active = nav.classList.contains('active')

    event.currentTarget.setAttribute('aria-extended', 'active')

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

/* Script Tema */

const darkBtn = document.getElementById('toggle-dark')

if (localStorage.getItem('data-theme') == 'dark') {
    darkBtn.checked = true 
}

darkBtn.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme')
    
    if (!darkBtn.checked) {
        changeThemeToLight()
    } else {
        changeThemeToDark()
    }
})