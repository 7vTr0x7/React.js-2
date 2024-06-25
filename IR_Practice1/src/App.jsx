import React from "react";
import PosNeg from "./components/PosNeg";
import UserLogin from "./components/UserLogin";
import TempCalculator from "./components/TempCalculator";
import ShoppingCart from "./components/ShoppingCart";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <div>
      <PosNeg />
      <UserLogin />
      <TempCalculator />
      <ShoppingCart />
      <Quiz />
    </div>
  );
};

export default App;
