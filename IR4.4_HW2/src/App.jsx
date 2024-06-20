import "./App.css";
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
    </div>
  );
};

export default App;
