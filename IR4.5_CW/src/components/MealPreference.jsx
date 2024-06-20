import React, { useState } from "react";

const MealPreference = () => {
  const [preference, setPreference] = useState("");

  const handlePreference = (e) => {
    setPreference(e.target.value);
  };

  return (
    <div>
      <form onChange={handlePreference}>
        <label>Select your meal preference: </label>
        <br />
        <input type="radio" name="meal" value="Vegetarian" /> Vegetarian
        <br />
        <input type="radio" name="meal" value="Non-Vegetarian" /> Non-Vegetarian
      </form>
      <p>Selected Preference: {preference}</p>
    </div>
  );
};

export default MealPreference;
