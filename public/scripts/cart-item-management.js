const cartItemUpdateFormElements = document.querySelectorAll('.cart-item-management');

const updateCartItem = (event) => {
  event.preventDefault();
};

cartItemUpdateFormElements.forEach((formElement) => { formElement.addEventListener('submit', updateCartItem); });
