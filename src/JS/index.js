//animações para section 1
const hidden = document.querySelector('.hidden')
const show = document.querySelector('.show')


const minhaObservacao = new IntersectionObserver((entradas) =>{
  entradas.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  }
  )
})
 

const itemsAnimation = document.querySelectorAll('.hidden');

itemsAnimation.forEach((element) => minhaObservacao.observe(element));