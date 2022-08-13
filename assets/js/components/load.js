export function load () {
  const load = document.getElementById('load')
  if (load) {
    //Este timeout le da tres segundos antes de ocultar el loader
    setTimeout(() => {
      //El display:none es agregado a la linea por especificidad
      load.style.display = 'none'
    }, 3000)
  }
}
