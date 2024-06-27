import React, { useState } from "react";

const Article = ({ title, content }) => {
  const [view, setView] = useState(false);

  const clickHandler = () => {
    setView((prev) => !prev);
  };

  return (
    <div>
      <h1>{title}</h1>

      <button onClick={clickHandler}>{view ? `Know Less` : `Know More`}</button>
      {view && <p>{content}</p>}
    </div>
  );
};

export default Article;
