import "./App.css";
import ChooseDeserts from "./components/ChooseDeserts";
import ChooseDrinks from "./components/ChooseDrinks";
import ChooseFruits from "./components/ChooseFruits";
import FavoriteMovie from "./components/FavoriteMovie";

const App = () => {
  return (
    <div>
      <FavoriteMovie />
      <br />
      <ChooseFruits />
      <br />
      <ChooseDrinks />
      <br />
      <ChooseDeserts />
    </div>
  );
};

export default App;
