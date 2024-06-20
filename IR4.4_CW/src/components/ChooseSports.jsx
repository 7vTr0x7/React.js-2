import React, { useState } from "react";

const ChooseSports = () => {
  const [selectedSports, setSelectedSports] = useState([]);

  const handleSportsCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedSports((prev) => [...prev, value]);
    } else {
      setSelectedSports((prev) => prev.filter((sport) => sport !== value));
    }
  };

  return (
    <div>
      <p style={{ margin: "0", padding: "0" }}>Choose your favorite sports:</p>
      <label for="Football">
        <input
          type="checkbox"
          value="Football"
          id="Football"
          onChange={handleSportsCheckbox}
        />
        Football
      </label>
      <br />
      <label for="Basketball">
        <input
          type="checkbox"
          value="Basketball"
          id="Basketball"
          onChange={handleSportsCheckbox}
        />
        Basketball
      </label>
      <br />
      <label for="Tennis">
        <input
          type="checkbox"
          value="Tennis"
          id="Tennis"
          onChange={handleSportsCheckbox}
        />
        Tennis
      </label>
      <br />
      <label for="Swimming">
        <input
          type="checkbox"
          value="Swimming"
          id="Swimming"
          onChange={handleSportsCheckbox}
        />
        Swimming
      </label>
      <br />
      {selectedSports.length > 0 && (
        <p>Selected Sports: {selectedSports.join(", ")}</p>
      )}
    </div>
  );
};

export default ChooseSports;
