const btnNav = document.querySelector('.btn-nav');
const cabNav = document.querySelector('.cabecalho-nav');
const conteudo = document.querySelector('.conteudo')
let showNav = false;

function mostrarNav() {

  showNav = !showNav;
  if (showNav) {
    //true
    cabNav.style.marginLeft = "-10vw"
    cabNav.style.animationName = 'showSidebar'
    conteudo.style.filter = 'blur(2px)'

  } else {
    //false
    cabNav.style.marginLeft = "-100vw"
    cabNav.style.animationName = ''
    conteudo.style.filter = ''

  }

}

function fecharBar() {
  if (showNav) {
    mostrarNav()
  }
}


window.addEventListener('resize', function (event) {
  if (this.window.innerWidth > 768 && showNav) {
    mostrarNav()
  }
})