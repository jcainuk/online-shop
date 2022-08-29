const cartItemUpdateFormElements = document.querySelectorAll('.cart-item-management');

const updateCartItem = (event) => {
  event.preventDefault();

  const form = event.target;

  const productId = form.dataset.productid;
  const csrfToken = form.dataset.csrf;
  const quantity = form.firstElementChild.value;
};

cartItemUpdateFormElements.forEach((formElement) => { formElement.addEventListener('submit', updateCartItem); });
