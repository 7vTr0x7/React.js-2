import React from "react";
import "./App.css";
import FoodSurveyApp from "./components/FoodSurveyApp";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  return (
    <div>
      <FoodSurveyApp />
      <FeedbackForm />
    </div>
  );
};

export default App;
