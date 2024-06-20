import React, { useState } from "react";

const ChooseFruits = () => {
  const [selectedFruits, setSelectedFruits] = useState([]);

  const handleFruitsCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedFruits((prev) => [...prev, value]);
    } else {
      setSelectedFruits((prev) => prev.filter((fruit) => fruit !== value));
    }
  };

  return (
    <div>
      <p>Choose your favorite fruits: </p>
      <label for="Apple">
        <input
          type="checkbox"
          value="Apple"
          id="Apple"
          onChange={handleFruitsCheckbox}
        />
        Apple
      </label>
      <br />
      <label for="Banana">
        <input
          type="checkbox"
          value="Banana"
          id="Banana"
          onChange={handleFruitsCheckbox}
        />
        Banana
      </label>
      <br />
      <label for="Orange">
        <input
          type="checkbox"
          value="Orange"
          id="Orange"
          onChange={handleFruitsCheckbox}
        />
        Orange
      </label>
      <br />
      {selectedFruits.length > 0 && (
        <p>Selected Fruits: {selectedFruits.join(", ")}</p>
      )}
    </div>
  );
};

export default ChooseFruits;
