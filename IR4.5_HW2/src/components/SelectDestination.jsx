import React, { useState } from "react";

const SelectDestination = () => {
  const [selectedDestination, setSelectedDestination] = useState("");

  const destinationSelectionHandler = (e) => {
    setSelectedDestination(e.target.value);
  };

  return (
    <div>
      <form onChange={destinationSelectionHandler}>
        <label>Select your dream travel destination:</label>
        <br />

        <label htmlFor="beach">
          <input type="radio" name="destination" id="beach" value="beach" />
          Beach
        </label>
        <br />
        <label htmlFor="mountain">
          <input
            type="radio"
            name="destination"
            id="mountain"
            value="mountain"
          />
          Mountain
        </label>
        <br />

        <label htmlFor="city">
          <input type="radio" name="destination" id="city" value="city" />
          City
        </label>
      </form>
      <p>Selected travel destination: {selectedDestination}</p>
    </div>
  );
};

export default SelectDestination;
