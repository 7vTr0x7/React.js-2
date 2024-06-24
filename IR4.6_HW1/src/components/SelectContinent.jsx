import React, { useState } from "react";

const SelectContinent = () => {
  const [continent, setContinent] = useState("");
  const [text, setText] = useState("");

  const continentSelectHandler = (e) => {
    setContinent(e.target.value);
    if (e.target.value === "Asia") {
      setText("The largest continent by land area and population");
    } else if (e.target.value === "Africa") {
      setText("The second largest and second most populous continent");
    } else {
      setText("The third most populous continent");
    }
  };

  return (
    <div>
      <label htmlFor="continentSelect">Select a continent: </label>
      <select id="continentSelect" onChange={continentSelectHandler}>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
      <p>Details: {text && `${continent} - ${text}`}</p>
    </div>
  );
};

export default SelectContinent;
