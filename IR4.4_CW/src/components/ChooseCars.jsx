import React, { useState } from "react";

const ChooseCars = () => {
  const [selectedCars, setSelectedCars] = useState([]);

  const handleCardCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedCars((prev) => [...prev, value]);
    } else {
      setSelectedCars((prev) => prev.filter((car) => car !== value));
    }
  };

  return (
    <div>
      <p style={{ margin: "0", padding: "0" }}>Choose your favorite cars:</p>
      <label for="Mercedes">
        <input
          type="checkbox"
          value="Mercedes"
          id="Mercedes"
          onChange={handleCardCheckbox}
        />
        Mercedes
      </label>
      <br />
      <label for="BMW">
        <input
          type="checkbox"
          value="BMW"
          id="BMW"
          onChange={handleCardCheckbox}
        />
        BMW
      </label>
      <br />
      <label for="Audi">
        <input
          type="checkbox"
          value="Audi"
          id="Audi"
          onChange={handleCardCheckbox}
        />
        Audi
      </label>
      <br />
      <p>Selected Cars: {selectedCars.join(", ")}</p>
    </div>
  );
};

export default ChooseCars;
