function handleFormSubmit(event) {
  event.preventDefault()
  const inputNombre = document.getElementById("product-name")
  const product = new Product (inputNombre.value)
  const inputDescripcion = document.getElementById("product-description")
  const descripcion = new Product (inputDescripcion.value)
  const inputPrecio = document.getElementById("product-price")
  const precio = new Product (inputPrecio.value)
  addProduct(product,container)
  addProduct(descripcion,container)
  addProduct(precio,container)
}