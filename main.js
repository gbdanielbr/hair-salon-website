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

// MUDAR O HEADER QUANDO SCROLL
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// SWIPER
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
});

// SCROLL REVEAL
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
})

scrollReveal.reveal(`#home .text, #home .image, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links`, { interval: 100})