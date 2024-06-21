import React, { useState } from "react";

const ChooseEducation = () => {
  const [selectedEducation, setSelectedEducation] = useState("");

  const educationSelectionHandler = (e) => {
    setSelectedEducation(e.target.value);
  };

  return (
    <div>
      <form onChange={educationSelectionHandler}>
        <label>Choose your highest education level: </label>
        <br />
        <label for="highSchool">
          <input
            type="radio"
            value="high school"
            name="eduction"
            id="highSchool"
          />
          High School
        </label>
        <br />
        <label for="bachelor">
          <input type="radio" value="bachelors" name="eduction" id="bachelor" />
          Bachelor&apos;s degree
        </label>
        <br />
        <label for="masters">
          <input type="radio" value="masters" name="eduction" id="masters" />
          Master&apos;s degree
        </label>
        <br />
        <label for="phd">
          <input type="radio" value="phd" name="eduction" id="phd" />
          PhD.
        </label>
      </form>
      {selectedEducation && (
        <p>Education Level: I have {selectedEducation} degree.</p>
      )}
    </div>
  );
};

export default ChooseEducation;
