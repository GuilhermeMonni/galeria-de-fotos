document.addEventListener("DOMContentLoaded", () => {
  const home = document.querySelector("#nav-home")//btn home
  const text_home = document.querySelector(".text-home")//texto da home
  const fotos = document.querySelector("#nav-fotos")//btn fotos
  const text_fotos = document.querySelector(".text-fotos")//texto fotos
  const bio = document.querySelector("#nav-bio")//btn bio
  const text_bio = document.querySelector(".text-bio")//texto bio
  const contato = document.querySelector("#nav-contato")//btn contato
  const text_cont = document.querySelector(".text-contato")//texto contato
  const btns_nav = document.querySelector(".nav-fotos")//div do cabecalho

  //funcao texto nav home
  home.addEventListener("mousemove", () => {
    text_home.style.color = "#FFFF"
  })
  home.addEventListener("mouseleave", () =>{
    text_home.style.color = "teal"
  })

  //funcao texto nav fotos
  fotos.addEventListener("mousemove", () => {
    text_fotos.style.color = "#FFFF"
  })
  fotos.addEventListener("mouseleave", () =>{
    text_fotos.style.color = "teal"
  })

  //funcao texto nav bio
  bio.addEventListener("mousemove", () => {
    text_bio.style.color = "#FFFF"
  })
  bio.addEventListener("mouseleave", () =>{
    text_bio.style.color = "teal"
  })

  //funcao texto nav contato
  contato.addEventListener("mousemove", () => {
    text_cont.style.color = "#FFFF"
  })
  contato.addEventListener("mouseleave", () =>{
    text_cont.style.color = "teal"
  })

  //cliques
  home.addEventListener("click", () => {
    location.replace("index.html")
  })
  fotos.addEventListener("click", () => {
    location.replace("fotos.html")
  })
  bio.addEventListener("click", () => {
    window.location.reload(true)
  })
  contato.addEventListener("click", () => {
    location.replace("contato.html")
  })

})

function clickVermais(){
  location.replace("fotos.html")
}