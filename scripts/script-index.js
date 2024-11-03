document.addEventListener("DOMContentLoaded", () => {
  const cont = document.querySelector(".container") //div container
  const cont_inicio = document.querySelector(".cont-inicio")//janela inicio
  const home = document.querySelector("#nav-home")//botao home
  const fotos = document.querySelector("#nav-fotos")//btn fotos
  const bio = document.querySelector("#nav-bio")//btn bio
  const contato = document.querySelector("#nav-contato")//btn contato
  const ig = document.querySelector("#img-ig")//logo instagram
  const linkedin = document.querySelector("#img-linkedin")//logo linkedin
  const github = document.querySelector("#img-github")//logo github
  
  setTimeout(function pagInicio(){//temporizador acesso galeria
    cont_inicio.style.scale = 1
    cont.style.opacity = 0.7
  }, 4000)

  //cliques nav
  home.addEventListener("click", () => {//botao home
    cont_inicio.style.scale = 0
    cont.style.opacity = 1
  })
  fotos.addEventListener("click", () => {//btn fotos
    location.replace("fotos.html")
  })
  bio.addEventListener("click", () => {//btn bio
    location.replace("bio.html")
  })
  contato.addEventListener("click", () => {//btn contato
    location.replace("contato.html")
  })

  //cliques redes
  ig.addEventListener("click", () => {//abrir instagram
    window.open("https://www.instagram.com/", "_blank");
  })
  linkedin.addEventListener("click", () => {//abrir linkedin
    window.open("https://www.linkedin.com/feed/", "_blank")
  })
  github.addEventListener("click", () => {//abrir github
    window.open("https://github.com/", "_blank")
  })

})

function clickFotos(){ //btn abrir galeria
  location.replace("fotos.html");
}