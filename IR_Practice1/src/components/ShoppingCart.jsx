import React, { useState } from "react";

const ShoppingCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const addProductHandler = (item, price) => {
    setProducts((prev) => [...prev, { item: item, price: price }]);
    setTotalPrice((prev) => prev + price);
  };

  const productListing = products.map((product, index) => (
    <li key={index}>
      {product.item} - {product.price}
    </li>
  ));

  return (
    <div>
      <h1>Shopping Cart</h1>

      {products.length > 0 && <ul>{productListing}</ul>}

      <p>TotalPrice: ${totalPrice}</p>
      <button onClick={() => addProductHandler("Product A", 10)}>
        Add Product A
      </button>
      <button onClick={() => addProductHandler("Product B", 20)}>
        Add Product B
      </button>
    </div>
  );
};

export default ShoppingCart;
