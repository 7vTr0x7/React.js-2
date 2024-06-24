import React from "react";
import SelectClothingSize from "./components/SelectClothingSize";
import SelectJobType from "./components/SelectJobType";
import SelectMealTime from "./components/SelectMealTime";

const App = () => {
  return (
    <div>
      <SelectClothingSize />
      <br />
      <SelectJobType />
      <br />
      <SelectMealTime />
    </div>
  );
};

export default App;
