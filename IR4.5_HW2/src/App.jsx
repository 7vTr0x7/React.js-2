import React from "react";
import SelectProficiency from "./components/SelectProficiency";
import SelectDestination from "./components/SelectDestination";
import SelectCoffee from "./components/SelectCoffee";

const App = () => {
  return (
    <div>
      <SelectProficiency />
      <br />
      <SelectDestination />
      <br />
      <SelectCoffee />
    </div>
  );
};

export default App;
