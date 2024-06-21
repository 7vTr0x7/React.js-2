import React from "react";
import ChooseEducation from "./components/ChooseEducation";
import ChooseMusicGenre from "./components/ChooseMusicGenre";
import ChoosePaymentMethod from "./components/ChoosePaymentMethod";
import ChooseWeather from "./components/ChooseWeather";

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
    </div>
  );
};

export default App;
