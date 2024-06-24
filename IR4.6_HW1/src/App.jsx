import CarSelect from "./components/CarSelect";
import LanguageSelect from "./components/LanguageSelect";
import SelectContinent from "./components/SelectContinent";
import SelectInstrument from "./components/SelectInstrument";

const App = () => {
  return (
    <div>
      <SelectInstrument />
      <br />
      <LanguageSelect />
      <br />
      <CarSelect />
      <br />
      <SelectContinent />
    </div>
  );
};

export default App;
