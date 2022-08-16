export function cartMenu() {
  const cartToggle = document.getElementById('cart-shop')
  const cart = document.getElementById('cart')
  const cartClose = document.getElementById('cart-close')
  const main = document.querySelector("main.main")
  const nav = document.querySelector("nav")
  const footer = document.querySelector('footer')

  if (cartToggle) {
    cartToggle.addEventListener('click', (evt) => {
      nav.classList.toggle("modal-effect")
      main.classList.toggle("modal-effect")
      footer.classList.toggle("modal-effect")
      cart.classList.toggle('show-cart')
    })
  }

  const closeCart = () => {
    nav.classList.remove("modal-effect")
    main.classList.remove("modal-effect")
    footer.classList.remove("modal-effect")
    cart.classList.remove('show-cart')
  }

  if (cartClose) {
    document.addEventListener('keydown', function(event){
      if(event.key === "Escape"){
        closeCart()
      }
    })
    cartClose.addEventListener('click', closeCart)
  }
}
