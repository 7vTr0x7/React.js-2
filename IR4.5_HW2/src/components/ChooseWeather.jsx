import React, { useState } from "react";

const ChooseWeather = () => {
  const [selectedWeather, setSelectedWeather] = useState("");

  const weatherSelectionHandler = (e) => {
    setSelectedWeather(e.target.value);
  };

  return (
    <div>
      <form onChange={weatherSelectionHandler}>
        <label>Choose your preferred weather: </label>
        <br />
        <label for="sunny">
          <input type="radio" name="weather" value="sunny" id="sunny" /> Sunny
        </label>
        <br />
        <label for="rainy">
          <input type="radio" name="weather" value="rainy" id="rainy" /> Rainy
        </label>
        <br />
        <label for="cloudy">
          <input type="radio" name="weather" value="cloudy" id="cloudy" />{" "}
          Cloudy
        </label>
        <br />
        <label for="snowy">
          <input type="radio" name="weather" value="snowy" id="snowy" /> Snowy
        </label>
        <br />
        {selectedWeather && (
          <p>Selected weather: I like {selectedWeather} weather</p>
        )}
      </form>
    </div>
  );
};

export default ChooseWeather;
