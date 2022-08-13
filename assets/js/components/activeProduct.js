export function activeProduct () {
  const linksProducts = document.querySelectorAll('.products__item')

  linksProducts.forEach((prod, i) => {
    prod.addEventListener('click', function(evt){
      linksProducts.forEach((p, j) => {
        p.classList.remove('active-product')
      })
      this.classList.add('active-product')
    })
  })
}
