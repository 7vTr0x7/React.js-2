import React, { useState } from "react";

const ChooseOccupation = () => {
  const [selectedOccupation, SetSelectedOccupation] = useState("");

  const occupationSelectionHandler = (e) => {
    SetSelectedOccupation(e.target.value);
  };

  return (
    <div>
      <form onChange={occupationSelectionHandler}>
        <label>Choose your occupation:</label>
        <br />
        <label htmlFor="student">
          <input type="radio" name="occupation" id="student" value="student" />
          Student
        </label>
        <br />
        <label htmlFor="teacher">
          <input type="radio" name="occupation" id="teacher" value="teacher" />
          Teacher
        </label>
        <br />
        <label htmlFor="engineer">
          <input
            type="radio"
            name="occupation"
            id="engineer"
            value="engineer"
          />
          Engineer
        </label>
        <br />
        <label htmlFor="doctor">
          <input type="radio" name="occupation" id="doctor" value="doctor" />
          Doctor
        </label>
      </form>
      <p>Selected Occupation: {selectedOccupation}</p>
    </div>
  );
};

export default ChooseOccupation;
