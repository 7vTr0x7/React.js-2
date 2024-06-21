import React, { useState } from "react";

const SelectSports = () => {
  const [selectedSport, setSelectedSport] = useState("");

  const sportSelectionHandler = (e) => {
    setSelectedSport(e.target.value);
  };

  return (
    <div>
      <forms onChange={sportSelectionHandler}>
        <label>Select your favorite sport: </label>
        <br />
        <label htmlFor="football">
          <input type="radio" name="sport" id="football" value="football" />
          Football
        </label>
        <br />
        <label htmlFor="basketball">
          <input type="radio" name="sport" id="basketball" value="basketball" />
          Basketball
        </label>
        <br />
        <label htmlFor="tennis">
          <input type="radio" name="sport" id="tennis" value="tennis" />
          Tennis
        </label>
      </forms>
      <p>Selected spot: {selectedSport}</p>
    </div>
  );
};

export default SelectSports;
