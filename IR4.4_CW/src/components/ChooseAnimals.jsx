import React, { useState } from "react";

const ChooseAnimals = () => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);

  const handleAnimalsCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedAnimals((prev) => [...prev, value]);
    } else {
      setSelectedAnimals((prev) => prev.filter((animal) => animal !== value));
    }
  };

  return (
    <div>
      <p style={{ margin: "0", padding: "0" }}>Choose your favorite animals:</p>
      <label for="Dog">
        <input
          type="checkbox"
          value="Dog"
          id="Dog"
          onChange={handleAnimalsCheckbox}
        />
        Dog
      </label>
      <br />
      <label for="Cat">
        <input
          type="checkbox"
          value="Cat"
          id="Cat"
          onChange={handleAnimalsCheckbox}
        />
        Cat
      </label>
      <br />
      <label for="Rabbit">
        <input
          type="checkbox"
          value="Rabbit"
          id="Rabbit"
          onChange={handleAnimalsCheckbox}
        />
        Rabbit
      </label>
      <br />
      <p>Selected animals: {selectedAnimals.join(", ")}</p>
    </div>
  );
};

export default ChooseAnimals;
