function handleFormSubmit(event) {
  event.preventDefault()
  const inputNombre = document.getElementById("product-name")
  const product = new Product (inputNombre.value)
  addProduct(product,container)
}