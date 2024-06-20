import ChooseSports from "./components/ChooseSports";
import ChooseColor from "./components/ChooseColor";
import ChooseInstruments from "./components/ChooseInstruments";
import ChooseAnimals from "./components/ChooseAnimals";

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
    </div>
  );
};

export default App;
