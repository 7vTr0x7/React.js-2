import React from "react";
import { useState } from "react";

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Favorite Color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      id: 2,
      question: "Favorite Animal?",
      options: ["Dog", "Cat", "Bird", "Fish"],
    },
    {
      id: 3,
      question: "Favorite Food?",
      options: ["Pizza", "Burger", "Pasta", "Salad"],
    },
  ];

  const questionsListing = questions.map((que) => (
    <div key={que.id}>
      <h2>{que.question}</h2>
      <ul>
        {que.options.map((option) => (
          <li key={option}>
            <input
              type="radio"
              name={que.question}
              value={option}
              onChange={(e) => setAnswers((prev) => [...prev, e.target.value])}
            />
            {option}
          </li>
        ))}
      </ul>
    </div>
  ));

  const submitHandler = (e) => {
    e.preventDefault();
    if (answers) {
      setSubmitted(true);
      console.log(answers);
    }
  };

  return (
    <div>
      <h1>Polling App</h1>
      {submitted ? (
        <h2>Thank you for participating!</h2>
      ) : (
        <form onSubmit={submitHandler}>
          {questionsListing}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default App;
