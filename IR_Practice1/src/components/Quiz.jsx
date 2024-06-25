import React, { useState } from "react";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const questions = [
    "What is the national bird of India?",
    "How many colors are there in Indian flag?",
    "What is the color of sky?",
  ];

  const nextQuestionHandler = () => {
    setIndex((prev) => prev + 1);
    setAnswer("");
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <p>
        {index === questions.length
          ? `You answered all questions`
          : `${questions[index]}`}
      </p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={nextQuestionHandler}>Next</button>
    </div>
  );
};

export default Quiz;
