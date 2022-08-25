const addToCartButtonElement = document.querySelector('#product-details button');

const addToCart = async () => {
  fetch('/cart/items', {
    method: 'POST',
    body: JSON.stringify({
      productId:
    }),
  });
};

addToCartButtonElement.addEventListener('click', addToCart);
