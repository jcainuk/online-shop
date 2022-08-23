const deleteProductButtonElements = document.querySelectorAll('.product-item button');

const deleteProduct = () => {};

deleteProductButtonElements.forEach((deleteProductButtonElement) => {
  deleteProductButtonElement.addEventListener('click', deleteProduct);
});
