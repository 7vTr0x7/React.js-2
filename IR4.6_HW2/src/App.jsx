import React from "react";
import SelectClothingSize from "./components/SelectClothingSize";
import SelectJobType from "./components/SelectJobType";

const App = () => {
  return (
    <div>
      <SelectClothingSize />
      <br />
      <SelectJobType />
    </div>
  );
};

export default App;
