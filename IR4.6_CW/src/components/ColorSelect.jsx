import React, { useState } from "react";

const ColorSelect = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const colorSelectHandler = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <label>Select a color: </label>
      <select onChange={colorSelectHandler}>
        <option value="Red">Red</option>
        <option value="Yellow">Yellow</option>
        <option value="Green">Green</option>
      </select>
      {selectedColor && <p>Selected Color: {selectedColor}</p>}
    </div>
  );
};

export default ColorSelect;
