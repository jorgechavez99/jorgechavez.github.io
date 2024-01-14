//Capturamos los elementos del DOM
const menuBurger = document.querySelector("#menuBurger")
const navegacion = document.querySelector("#navegacion")

//Evento
document.addEventListener('click', (ev) => {
    if (ev.target.matches("#menuBurger")) {
        console.log("hamburguesa")
        navegacion.classList.add("navVisible")
    } else {
        if (ev.target.matches(".cerrar")) {
            navegacion.classList.remove("navVisible")
        }
    }
})