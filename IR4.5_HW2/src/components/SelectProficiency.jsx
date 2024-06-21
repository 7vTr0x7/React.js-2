import React, { useState } from "react";

const SelectProficiency = () => {
  const [selectedProficiency, setSelectedProficiency] = useState("");

  const proficiencySelectionHandler = (e) => {
    setSelectedProficiency(e.target.value);
  };

  return (
    <div>
      <form onChange={proficiencySelectionHandler}>
        <label>Select your proficiency in a programming language:</label>
        <br />
        <label htmlFor="beginner">
          <input
            type="radio"
            name="proficiency"
            value="beginner"
            id="beginner"
          />
          Beginner
        </label>
        <br />
        <label htmlFor="intermediate">
          <input
            type="radio"
            name="proficiency"
            value="intermediate"
            id="intermediate"
          />
          Intermediate
        </label>
        <br />
        <label htmlFor="advanced">
          <input
            type="radio"
            name="proficiency"
            value="advanced"
            id="advanced"
          />
          Advanced
        </label>
      </form>
      <p>Selected Proficiency Level: {selectedProficiency}</p>
    </div>
  );
};

export default SelectProficiency;
