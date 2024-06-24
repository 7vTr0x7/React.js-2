import React, { useState } from "react";

const CarSelect = () => {
  const [car, setCar] = useState("");

  const carSelectHandler = (e) => {
    setCar(e.target.value);
  };

  return (
    <div>
      <label htmlFor="carSelect">Select a car brand:</label>
      <select id="carSelect" onChange={carSelectHandler}>
        <option value="Audi- German luxury automobile manufacturer">
          Audi
        </option>
        <option value="BMW - Bavarian Motor Works, a German multinational company">
          BMW
        </option>
        <option value="Tesla - American electric vehicle and clean engine company">
          Tesla
        </option>
      </select>
      <p>Details: {car}</p>
    </div>
  );
};

export default CarSelect;
