import React from "react";
import SelectClothingSize from "./components/SelectClothingSize";
import SelectJobType from "./components/SelectJobType";
import SelectMealTime from "./components/SelectMealTime";
import SelectSkillLevel from "./components/SelectSkillLevel";
import SelectTemp from "./components/SelectTemp";

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
      <br />
      <SelectTemp />
    </div>
  );
};

export default App;
