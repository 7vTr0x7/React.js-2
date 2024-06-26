import React from "react";
import { useState } from "react";

const FoodSurveyApp = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [options, setOptions] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      question: "Which type of cuisine do you prefer?",
      options: {
        Asian: ["Chinese", "Japanese", "Indian"],
        European: ["Italian", "French", "Spanish"],
        American: ["Burgers", "Pizza", "BBQ"],
      },
    },
  ];

  const optionSelectHandler = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setOptions((prev) => [...prev, value]);
    } else {
      setOptions((prev) => prev.filter((option) => value !== option));
    }
  };

  const clickHandler = () => {
    if (options.length > 0 && selectedCuisine) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Food Survey App</h1>
      {submitted ? (
        <div>
          <h2>Thank You for Sharing Your Preferences!</h2>
          <p>Cuisine: {selectedCuisine} </p>
          <br />
          <p>Preferred Options: {options.join(" ,")}</p>
        </div>
      ) : (
        <div>
          <label htmlFor="selectCuisine">Select Your Preferred Cuisine: </label>
          <select
            id="selectCuisine"
            onChange={(e) => setSelectedCuisine(e.target.value)}>
            <option value="">-- Select Cuisine --</option>
            <option value="Asian">Asian</option>
            <option value="European">European</option>
            <option value="American">American</option>
          </select>
          {selectedCuisine && (
            <div>
              <br />
              <label>Select Your Preferred Options: </label>
              {questions.map((que) =>
                que.options[selectedCuisine].map((option) => (
                  <p key={option}>
                    <input
                      type="checkBox"
                      value={option}
                      onChange={optionSelectHandler}
                    />
                    {option}
                  </p>
                ))
              )}
              <br />
              <button onClick={clickHandler}>Submit</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FoodSurveyApp;
