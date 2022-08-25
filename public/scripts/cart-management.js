const addToCartButtonElement = document.querySelector('#product-details button');

const addToCart = async () => {
  const productId = addToCartButtonElement.dataset.productid;
  const response = await fetch('/cart/items', {
    method: 'POST',
    body: JSON.stringify({
      productId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    alert('Something went wrong!');
  }
};

addToCartButtonElement.addEventListener('click', addToCart);
