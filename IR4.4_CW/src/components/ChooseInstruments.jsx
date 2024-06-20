import React, { useState } from "react";

const ChooseInstruments = () => {
  const [selectedInstruments, setSelectedInstruments] = useState([]);

  const handleInstrumentsCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedInstruments((prev) => [...prev, value]);
    } else {
      setSelectedInstruments((prev) =>
        prev.filter((instru) => instru !== value)
      );
    }
  };

  return (
    <div>
      <p style={{ margin: "0", padding: "0" }}>
        Choose your musical instruments:
      </p>
      <label for="Guitar">
        <input
          type="checkbox"
          value="Guitar"
          id="Guitar"
          onChange={handleInstrumentsCheckbox}
        />
        Guitar
      </label>
      <br />
      <label for="Piano">
        <input
          type="checkbox"
          value="Piano"
          id="Piano"
          onChange={handleInstrumentsCheckbox}
        />
        Piano
      </label>
      <br />
      <label for="Drums">
        <input
          type="checkbox"
          value="Drums"
          id="Drums"
          onChange={handleInstrumentsCheckbox}
        />
        Drums
      </label>
      <br />
      <p>Selected Instruments: {selectedInstruments.join(", ")}</p>
    </div>
  );
};

export default ChooseInstruments;
