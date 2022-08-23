const deleteProductButtonElements = document.querySelectorAll('.product-item button');

const deleteProduct = (event) => {
  const buttonElement = event.target;
  const productId = buttonElement.dataset.productid;

  fetch(`/admin/products/${productId}`, {
    method: 'DELETE',
  });
};

deleteProductButtonElements.forEach((deleteProductButtonElement) => {
  deleteProductButtonElement.addEventListener('click', deleteProduct);
});
