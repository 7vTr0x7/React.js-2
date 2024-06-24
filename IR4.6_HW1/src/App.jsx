import CarSelect from "./components/CarSelect";
import LanguageSelect from "./components/LanguageSelect";
import SelectContinent from "./components/SelectContinent";
import SelectGenre from "./components/SelectGenre";
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
      <br />
      <SelectGenre />
    </div>
  );
};

export default App;
