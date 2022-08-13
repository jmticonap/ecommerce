export function cartMenu() {
  const cartToggle = document.getElementById('cart-shop')
  const cart = document.getElementById('cart')
  const cartClose = document.getElementById('cart-close')
  const main = document.querySelector("main.main")
  const nav = document.querySelector("nav")

  if (cartToggle) {
    cartToggle.addEventListener('click', (evt) => {
      nav.classList.toggle("modal-efect")
      main.classList.toggle("modal-efect")
      cart.classList.toggle('show-cart')
    })
  }

  const closeCart = () => {
    nav.classList.remove("modal-efect")
    main.classList.remove("modal-efect")
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
