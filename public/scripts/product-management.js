const deleteProductButtonElements = document.querySelectorAll('.product-item button');

const deleteProduct = async (event) => {
  const buttonElement = event.target;
  const productId = buttonElement.dataset.productid;
  const csrfToken = buttonElement.dataset.csrf;

  const response = await fetch(`/admin/products/${productId}?_csrf=${csrfToken}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }
  buttonElement.parentElement.parentElement.parentElement.parentElement.remove();
};

deleteProductButtonElements.forEach((deleteProductButtonElement) => {
  deleteProductButtonElement.addEventListener('click', deleteProduct);
});
