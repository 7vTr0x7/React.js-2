import React, { useState } from "react";

const SelectTemp = () => {
  const [unit, setUnit] = useState("");
  const [text, setText] = useState("");

  const unitSelectHandler = (e) => {
    setUnit(e.target.value);

    if (e.target.value === "Celsius") {
      setText(
        "Temperature scale in which water freezed at 0 degees and boils at 100 degrees "
      );
    } else if (e.target.value === "Fahrenheit") {
      setText("Temperature scale widely used in United States");
    } else {
      setText("Absolute temperature scale with 0 representing absolute zero");
    }
  };

  return (
    <div>
      <label>Select a temperature unit: </label>
      <select id="unitSelect" onChange={unitSelectHandler}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <p>Description: {text && `${unit} - ${text}`}</p>
    </div>
  );
};

export default SelectTemp;
