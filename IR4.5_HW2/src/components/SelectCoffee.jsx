import React, { useState } from "react";

const SelectCoffee = () => {
  const [selectedCoffee, setSelectedCoffee] = useState("");

  const coffeeSelectionHandler = (e) => {
    setSelectedCoffee(e.target.value);
  };

  return (
    <div>
      <form onChange={coffeeSelectionHandler}>
        <label> Select your coffee preference: </label>
        <br />
        <label htmlFor="black">
          <input type="radio" name="coffee" id="black" value="black" />
          Black Coffee
        </label>
        <br />
        <label htmlFor="latte">
          <input type="radio" name="coffee" id="latte" value="latte" />
          Latte
        </label>
        <br />
        <label htmlFor="cappuccino">
          <input
            type="radio"
            name="coffee"
            id="cappuccino"
            value="cappuccino"
          />
          Cappuccino
        </label>
      </form>
      <p>Selected coffee preference: {selectedCoffee}</p>
    </div>
  );
};

export default SelectCoffee;
