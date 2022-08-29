const cartItemUpdateFormElements = document.querySelectorAll('.cart-item-management');

const updateCartItem = async (event) => {
  event.preventDefault();

  const form = event.target;

  const productId = form.dataset.productid;
  const csrfToken = form.dataset.csrf;
  const quantity = form.firstElementChild.value;

  const response = await fetch('/cart/items', {
    method: 'PATCH',
    body: JSON.stringify({
      productId,
      quantity,
      _csrf: csrfToken,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

cartItemUpdateFormElements.forEach((formElement) => { formElement.addEventListener('submit', updateCartItem); });
