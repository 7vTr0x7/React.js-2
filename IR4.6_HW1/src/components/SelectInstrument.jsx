import React, { useState } from "react";

const SelectInstrument = () => {
  const [instrument, setInstrument] = useState("");

  const instrumentSelectHandler = (e) => {
    setInstrument(e.target.value);
  };

  return (
    <div>
      <label htmlFor="instrumentSelect">Select a musical instrument: </label>
      <select id="instrumentSelect" onChange={instrumentSelectHandler}>
        <option value="Guitar">Guitar</option>
        <option value="Piano">Piano</option>
        <option value="Drums">Drums</option>
      </select>
      <p>Type: {instrument}</p>
    </div>
  );
};

export default SelectInstrument;
