import React, { useState } from "react";

const ChooseColor = () => {
  const [selectedColors, setSelectedColors] = useState("");

  const handleColorCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedColors((prev) => [...prev, value]);
    } else {
      setSelectedColors((prev) => prev.filter((color) => color !== value));
    }
  };

  return (
    <div>
      <p style={{ margin: "0", padding: "0" }}>Choose your favorite colors:</p>
      <label for="Red">
        <input
          type="checkbox"
          value="Red"
          id="Red"
          onChange={handleColorCheckbox}
        />
        Red
      </label>
      <br />
      <label for="Blue">
        <input
          type="checkbox"
          value="Blue"
          id="Blue"
          onChange={handleColorCheckbox}
        />
        Blue
      </label>
      <br />

      <label for="Green">
        <input
          type="checkbox"
          value="Green"
          id="Green"
          onChange={handleColorCheckbox}
        />
        Green
      </label>
      <br />

      <label for="Yellow">
        <input
          type="checkbox"
          value="Yellow"
          id="Yellow"
          onChange={handleColorCheckbox}
        />
        Yellow
      </label>
      <br />
      {selectedColors.length > 0 && (
        <p>Selected colors: {selectedColors.join(", ")}</p>
      )}
    </div>
  );
};

export default ChooseColor;
