import React, { useState } from "react";

const SelectSkillLevel = () => {
  const [level, setLevel] = useState("");
  const [text, setText] = useState("");

  const levelSelectHandler = (e) => {
    setLevel(e.target.value);
    if (e.target.value === "Beginner") {
      setText("Just starting out, limited experience or knowledge");
    } else if (e.target.value === "Intermediate") {
      setText("Some experience or knowledge, moderate skill level");
    } else {
      setText("Extensive experience or knowledge, high skill level");
    }
  };

  return (
    <div>
      <label htmlFor="levelSelect">Select a skill level: </label>
      <select id="levelSelect" onChange={levelSelectHandler}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <p>Description: {text && `${level} - ${text}`}</p>
    </div>
  );
};

export default SelectSkillLevel;
