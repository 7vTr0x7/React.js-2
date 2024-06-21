import React from "react";
import ChooseEducation from "./components/ChooseEducation";
import ChooseMusicGenre from "./components/ChooseMusicGenre";
import ChoosePaymentMethod from "./components/ChoosePaymentMethod";

const App = () => {
  return (
    <div>
      <ChooseEducation />
      <br />
      <ChooseMusicGenre />
      <br />
      <ChoosePaymentMethod />
    </div>
  );
};

export default App;
