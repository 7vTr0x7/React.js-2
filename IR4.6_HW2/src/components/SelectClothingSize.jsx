import React, { useState } from "react";

const SelectClothingSize = () => {
  const [size, setSize] = useState("");
  const [text, setText] = useState("");

  const sizeSelectHandler = (e) => {
    setSize(e.target.value);

    if (e.target.value === "Small") {
      setText("Fits chest size 34-36 inches");
    } else if (e.target.value === "Medium") {
      setText("Fits chest size 38-40 inches");
    } else {
      setText("Fits chest size 42-44 inches");
    }
  };

  return (
    <div>
      <label htmlFor="selectSize">Select a clothing size: </label>
      <select id="selectSize" onChange={sizeSelectHandler}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <p>Description: {text && `${size} - ${text}`}</p>
    </div>
  );
};

export default SelectClothingSize;
