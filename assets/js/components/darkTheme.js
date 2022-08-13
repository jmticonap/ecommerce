export function darkTheme () {
  
  const btnTheme = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'bx-sun'

  const selectedTheme = window.localStorage.getItem('selected-theme')
  const selectedIcon = window.localStorage.getItem('selected-icon')

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => btnTheme.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    btnTheme.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
  }

  btnTheme.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    btnTheme.classList.toggle(iconTheme)
    window.localStorage.setItem('selected-theme', getCurrentTheme())
    window.localStorage.setItem('selected-icon', getCurrentIcon())
  })
}
