import CarSelect from "./components/CarSelect";
import LanguageSelect from "./components/LanguageSelect";
import SelectInstrument from "./components/SelectInstrument";

const App = () => {
  return (
    <div>
      <SelectInstrument />
      <br />
      <LanguageSelect />
      <br />
      <CarSelect />
    </div>
  );
};

export default App;
