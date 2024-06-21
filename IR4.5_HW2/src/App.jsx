import React from "react";
import SelectProficiency from "./components/SelectProficiency";
import SelectDestination from "./components/SelectDestination";
import SelectCoffee from "./components/SelectCoffee";
import SelectPet from "./components/SelectPet";

const App = () => {
  return (
    <div>
      <SelectProficiency />
      <br />
      <SelectDestination />
      <br />
      <SelectCoffee />
      <br />
      <SelectPet />
    </div>
  );
};

export default App;
