function addProduct(product, container) {    

const card = document.createElement('article')
card.className = "card"

const imagen = document.createElement('img')
imagen.src = product.image
imagen.className = "card-image"

const productName = document.createElement('h3')
productName.textContent = product.name

const productDescription = document.createElement('p')
productDescription.textContent = product.description

const productPrice = document.createElement('p')
productPrice.textContent = product.price

card.appendChild(imagen)
card.appendChild(productName)
card.appendChild(productDescription)
card.appendChild(productPrice)

container.appendChild(card)
}




