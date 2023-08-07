// jQuery
// $(document).ready(function() {
  // code
// });

// Vanilla JS

// window.onload = function() {
//   code
// };


const menu = () => {

  const menuButton = document.querySelector("#menu-button");
  const menu = document.querySelector(".menu")

    const menuActive = (event) => {
        if(menu.classList.contains("-active")) {
          menu.classList.remove("-active")
        }
        else {
          menu.classList.add("-active")
        }
      }
  
    menuButton.addEventListener("click", menuActive) 
}
menu()

const accordion = () => { 

  const itens = document.querySelectorAll(".item")

  itens.forEach(item => {
     item.addEventListener("click", () => {
        if(item.classList.contains("-active")) {
          item.classList.remove("-active")
        }
        else {
          itens.forEach((item) => {
            item.classList.add("-active")
          })
        }
      })
     })
}
accordion()
