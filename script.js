// fetch imge from locql filre 
// covetrt in blob 
// asign to img in tag in html

const imgStand =document.querySelector("#img-stand")
fetchPhoto()

async function fetchPhoto(){

    const response = await fetch("photos/krushna.jpg")
  
    const blob = await response.blob()
    console.log(blob)
    const img = document.createElement("img")
    img.src = URL.createObjectURL(blob)
    imgStand.append(img)


}