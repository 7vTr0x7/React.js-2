import React, { useState } from "react";

const SelectJobType = () => {
  const [jobType, setJobType] = useState("");
  const [text, setText] = useState("");

  const typeSelectHandler = (e) => {
    setJobType(e.target.value);
    if (e.target.value === "Full-time") {
      setText("Employment for a standard 40-hours workweek");
    } else if (e.target.value === "Part-time") {
      setText("Employment for  less than a standard workweek");
    } else {
      setText("Temporary employment for specific project or period");
    }
  };

  return (
    <div>
      <label>Select a job type: </label>
      <select id="jobSelect" onChange={typeSelectHandler}>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
      </select>
      <p>Description: {text && `${jobType} - ${text}`}</p>
    </div>
  );
};

export default SelectJobType;
