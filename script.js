let burger = document.querySelector('#burger')
let menu = document.querySelector('#menu')

burger.addEventListener("click", (event) => {
    menu.classList.toggle("active")
})