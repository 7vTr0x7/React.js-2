import React, { useState } from "react";

const About = ({ heading, name, learning }) => {
  const [view, setView] = useState(false);

  const clickHandler = () => {
    setView((prev) => !prev);
  };

  return (
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={clickHandler}>{view ? `Know Less` : `Know More`}</button>
      {view && <p>{learning}</p>}
    </div>
  );
};

export default About;
