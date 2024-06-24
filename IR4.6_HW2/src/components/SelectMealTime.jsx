import React, { useState } from "react";

const SelectMealTime = () => {
  const [meal, setMeal] = useState("");
  const [text, setText] = useState("");

  const mealSelectHandler = (e) => {
    setMeal(e.target.value);

    if (meal === "Breakfast") {
      setText("Morning meal typically eaten before starting the day");
    } else if (meal === "Lunch") {
      setText("Midday meal typically eaten around noon");
    } else {
      setText("Evening meal typically eaten at the end of the day");
    }
  };

  return (
    <div>
      <label htmlFor="mealSelect">Select meal time: </label>
      <select id="mealSelect" onChange={mealSelectHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <p>Description: {text && `${meal} - ${text}`}</p>
    </div>
  );
};

export default SelectMealTime;
