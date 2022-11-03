const remera = new Product('Chomba','Color Rojo',4000,'https://picsum.photos/id/237/200/300')
console.log(remera)

const pantalonAzul = new Product("Pantalon","Pantalon de color azul",20,"https://http2.mlstatic.com/D_NQ_NP_823406-MLA44869414674_022021-W.jpg")

const container = document.getElementById('readycards')

const form = document.getElementById("product-form")

// form.onsubmit = handleFormSubmit

form.addEventListener("submit",handleFormSubmit)