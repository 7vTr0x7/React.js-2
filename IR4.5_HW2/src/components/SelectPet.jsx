import React, { useState } from "react";

const SelectPet = () => {
  const [selectedPet, setSelectedPet] = useState("");

  const petSelectionHandler = (e) => {
    setSelectedPet(e.target.value);
  };

  return (
    <div>
      <form onChange={petSelectionHandler}>
        <label>Select your preferred pet:</label>
        <br />
        <label htmlFor="dog">
          <input type="radio" name="pet" value="dog" id="dog" />
          Dog
        </label>
        <br />
        <label htmlFor="cat">
          <input type="radio" name="pet" value="cat" id="cat" />
          Cat
        </label>
        <br />
        <label htmlFor="fish">
          <input type="radio" name="pet" value="fish" id="fish" />
          Fish
        </label>
      </form>
      <p>Selected Pet: {selectedPet}</p>
    </div>
  );
};

export default SelectPet;
