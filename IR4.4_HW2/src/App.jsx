import ChooseSports from "./components/ChooseSports";
import ChooseColor from "./components/ChooseColor";
import ChooseInstruments from "./components/ChooseInstruments";
import ChooseAnimals from "./components/ChooseAnimals";
import ChooseCars from "./components/ChooseCars";

const App = () => {
  return (
    <div>
      <ChooseSports />
      <br />
      <ChooseColor />
      <br />
      <ChooseInstruments />
      <br />
      <ChooseAnimals />
      <br />
      <ChooseCars />
    </div>
  );
};

export default App;
