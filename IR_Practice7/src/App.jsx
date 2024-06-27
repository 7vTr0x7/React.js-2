import React from "react";
import Article from "./components/Article";

const App = () => {
  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";

  return (
    <div>
      <Article title={title} content={content} />
    </div>
  );
};

export default App;
