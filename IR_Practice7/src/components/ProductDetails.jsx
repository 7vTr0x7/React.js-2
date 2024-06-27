import React, { useState } from "react";

const ProductDetails = ({ productName, description, price }) => {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(true);
  };

  return (
    <div>
      <h1>Product Details</h1>
      <p>
        <b>Product Name: </b>
        {productName}
      </p>

      {show ? (
        <div>
          <p>
            <b>Description: </b>
            {description}
          </p>
          <p>
            <b>Price: </b>
            {price}
          </p>
        </div>
      ) : (
        <button onClick={clickHandler}>Show Details</button>
      )}
    </div>
  );
};

export default ProductDetails;
