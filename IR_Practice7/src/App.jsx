import React from "react";
import Article from "./components/Article";
import About from "./components/About";
import UserInfo from "./components/UserInfo";

const App = () => {
  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";

  const heading = "About Me";
  const name = "Salman"; // you can put your name
  const learning = "I am learning React JS currently at neoG Camp.";

  const userName = "Salman";
  const email = "sk@gmail.com";
  const age = 22;

  return (
    <div>
      <Article title={title} content={content} />
      <About heading={heading} name={name} learning={learning} />
      <UserInfo userName={userName} email={email} age={age} />
    </div>
  );
};

export default App;
