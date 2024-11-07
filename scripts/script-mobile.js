//imagens 
const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const img4 = document.querySelector("#img4")
const img5 = document.querySelector("#img5")
const img6 = document.querySelector("#img6")
const img7 = document.querySelector("#img7")

//media query para pag fotos
const media = window.matchMedia("(max-width: 1000px)")

function handleTabletChange(e){
  if(e.matches){
    img4.setAttribute("src", "images/")
  }else{
    
  }
}

media.addEventListener("change", handleTabletChange)
handleTabletChange(media)