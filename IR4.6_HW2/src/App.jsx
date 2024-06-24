import React from "react";
import SelectClothingSize from "./components/SelectClothingSize";
import SelectJobType from "./components/SelectJobType";
import SelectMealTime from "./components/SelectMealTime";
import SelectSkillLevel from "./components/SelectSkillLevel";

const App = () => {
  return (
    <div>
      <SelectClothingSize />
      <br />
      <SelectJobType />
      <br />
      <SelectMealTime />
      <br />
      <SelectSkillLevel />
    </div>
  );
};

export default App;
