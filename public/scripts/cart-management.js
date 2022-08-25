const addToCartButtonElement = document.querySelector('#product-details button');

const addToCart = async () => {
  const productId = addToCartButtonElement.dataset.productid;
  let response;
  try {
    response = await fetch('/cart/items', {
      method: 'POST',
      body: JSON.stringify({
        productId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    alert('Something went wrong!');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }

  const responseData = await response.json();

  const newTotalQuantity = responseData.newTotalItems;
};

addToCartButtonElement.addEventListener('click', addToCart);
