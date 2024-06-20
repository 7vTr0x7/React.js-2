import React, { useState } from "react";

const ChooseDeserts = () => {
  const [selectedDeserts, setSelectedDeserts] = useState([]);

  const handleDesertsCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedDeserts((prev) => [...prev, value]);
    } else {
      setSelectedDeserts((prev) => prev.filter((desert) => desert !== value));
    }
  };

  return (
    <div>
      <p>Choose your favorite deserts: </p>
      <label for="Cake">
        <input
          type="checkbox"
          value="Cake"
          id="Cake"
          onChange={handleDesertsCheckbox}
        />
        Cake
      </label>
      <br />
      <label for="Ice Cream">
        <input
          type="checkbox"
          value="Ice Cream"
          id="Ice Cream"
          onChange={handleDesertsCheckbox}
        />
        Ice Cream
      </label>
      <br />
      <label for="Pie">
        <input
          type="checkbox"
          value="Pie"
          id="Pie"
          onChange={handleDesertsCheckbox}
        />
        Pie
      </label>
      <br />
      {selectedDeserts.length > 0 && (
        <p>Selected Deserts: {selectedDeserts.join(", ")}</p>
      )}
    </div>
  );
};

export default ChooseDeserts;
