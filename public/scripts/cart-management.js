const addToCartButtonElement = document.querySelector('#product-details button');

const addToCart = async () => {
  const productId = addToCartButtonElement.dataset.productid;
  fetch('/cart/items', {
    method: 'POST',
    body: JSON.stringify({
      productId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

addToCartButtonElement.addEventListener('click', addToCart);
