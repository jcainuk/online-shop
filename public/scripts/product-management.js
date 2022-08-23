const deleteProductButtonElements = document.querySelectorAll('.product-item button');

const deleteProduct = async (event) => {
  const buttonElement = event.target;
  const productId = buttonElement.dataset.productid;
  const csrfToken = buttonElement.dataset.csrf;

  await fetch(`/admin/products/${productId}?_csrf=${csrfToken}`, {
    method: 'DELETE',
  });
};

deleteProductButtonElements.forEach((deleteProductButtonElement) => {
  deleteProductButtonElement.addEventListener('click', deleteProduct);
});
