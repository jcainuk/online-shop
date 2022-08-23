const deleteProductButtonElements = document.querySelectorAll('.product-item button');

const deleteProduct = (event) => {
  const buttonElement = event.target;
  const productId = buttonElement.dataset.productid;
};

deleteProductButtonElements.forEach((deleteProductButtonElement) => {
  deleteProductButtonElement.addEventListener('click', deleteProduct);
});
