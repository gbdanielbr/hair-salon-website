const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
// MENU ABRE E FECHA QUANDO CLICA NOS ICONES

for(const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// MENU FECHA QUANDO CLICA NO ITEM DA LISTA DE MENU
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}