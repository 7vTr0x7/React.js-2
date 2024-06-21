import React, { useState } from "react";

const ChoosePaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const methodSelectionHandler = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div>
      <form onChange={methodSelectionHandler}>
        <label>Select your preferred payment method:</label>
        <br />
        <label for="creditcard">
          <input
            type="radio"
            id="creditcard"
            name="method"
            value="creditcard"
          />{" "}
          Credit Card
        </label>
        <br />
        <label for="paypal">
          <input type="radio" id="paypal" name="method" value="paypal" /> Pay
          Pal
        </label>
        <br />
        <label for="bitcoin">
          <input type="radio" id="bitcoin" name="method" value="bitcoin" />{" "}
          Bitcoin
        </label>
        <br />
        <label for="cash">
          <input type="radio" id="cash" name="method" value="cash" /> Cash
        </label>
      </form>
      <p>Selected payment method: {selectedMethod}</p>
    </div>
  );
};

export default ChoosePaymentMethod;
