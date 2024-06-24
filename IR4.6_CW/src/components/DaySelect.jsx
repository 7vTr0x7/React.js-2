import React, { useState } from "react";

const DaySelect = () => {
  const [day, setDay] = useState("");

  const daySelectHandler = (e) => {
    setDay(e.target.value);
  };

  return (
    <div>
      <label htmlFor="daySelect">Select a day: </label>
      <select id="daySelect" onChange={daySelectHandler}>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
      <p>
        {day &&
          (day === "Sunday" || day === "Saturday"
            ? `${day} is a weekend`
            : `${day} is a weekday`)}
      </p>
    </div>
  );
};

export default DaySelect;
