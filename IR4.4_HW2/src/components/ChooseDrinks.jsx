import React, { useState } from "react";

const ChooseDrinks = () => {
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  const handleDrinksCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedDrinks((prev) => [...prev, value]);
    } else {
      setSelectedDrinks((prev) => prev.filter((drink) => drink !== value));
    }
  };

  return (
    <div>
      <p>Choose your favorite drinks: </p>
      <label for="Tea">
        <input
          type="checkbox"
          value="Tea"
          id="Tea"
          onChange={handleDrinksCheckbox}
        />
        Tea
      </label>
      <br />
      <label for="Coffee">
        <input
          type="checkbox"
          value="Coffee"
          id="Coffee"
          onChange={handleDrinksCheckbox}
        />
        Coffee
      </label>
      <br />
      <label for="Juice">
        <input
          type="checkbox"
          value="Juice"
          id="Juice"
          onChange={handleDrinksCheckbox}
        />
        Juice
      </label>
      <br />
      {selectedDrinks.length > 0 && (
        <p>Selected Drinks: {selectedDrinks.join(", ")}</p>
      )}
    </div>
  );
};

export default ChooseDrinks;
