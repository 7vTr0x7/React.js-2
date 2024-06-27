import React from "react";
import Article from "./components/Article";
import About from "./components/About";

const App = () => {
  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";

  const heading = "About Me";
  const name = "Salman"; // you can put your name
  const learning = "I am learning React JS currently at neoG Camp.";

  return (
    <div>
      <Article title={title} content={content} />
      <About heading={heading} name={name} learning={learning} />
    </div>
  );
};

export default App;
