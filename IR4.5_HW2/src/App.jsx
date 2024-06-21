import React from "react";
import ChooseEducation from "./components/ChooseEducation";
import ChooseMusicGenre from "./components/ChooseMusicGenre";
import ChoosePaymentMethod from "./components/ChoosePaymentMethod";
import ChooseWeather from "./components/ChooseWeather";
import ChooseOccupation from "./components/ChooseOccupation";

const App = () => {
  return (
    <div>
      <ChooseEducation />
      <br />
      <ChooseMusicGenre />
      <br />
      <ChoosePaymentMethod />
      <br />
      <ChooseWeather />
      <br />
      <ChooseOccupation />
    </div>
  );
};

export default App;
