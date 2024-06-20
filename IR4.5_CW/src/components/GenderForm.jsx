import React, { useState } from "react";

const GenderForm = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderSelection = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div>
      <form onChange={handleGenderSelection}>
        <label>Select Gender: </label>
        <br />
        <input type="radio" name="gender" value="Male" /> Male
        <input type="radio" name="gender" value="Female" /> Female
        <input type="radio" name="gender" value="Other" /> Other
      </form>
      <p>Selected Gender: {selectedGender}</p>
    </div>
  );
};

export default GenderForm;
