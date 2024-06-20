import "./App.css";
import ChooseFruits from "./components/ChooseFruits";
import FavoriteMovie from "./components/FavoriteMovie";

const App = () => {
  return (
    <div>
      <FavoriteMovie />
      <br />
      <ChooseFruits />
    </div>
  );
};

export default App;
