function handleFormSubmit(event) {
  event.preventDefault()
  const inputNombre = document.getElementById("product-name")
  
  const inputDescripcion = document.getElementById("product-description")
 
  const inputPrecio = document.getElementById("product-price")
  const product = new Product(inputNombre.value,inputDescripcion.value,inputPrecio.value)

  addProduct(product,container)
}