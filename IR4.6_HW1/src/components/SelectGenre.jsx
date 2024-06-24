import React, { useState } from "react";

const SelectGenre = () => {
  const [genre, setGenre] = useState("");
  const [text, setText] = useState("");

  const genreSelectHandler = (e) => {
    setGenre(e.target.value);

    if (e.target.value === "Comedy") {
      setText("Films intended to make the audience laugh");
    } else if (e.target.value === "Drama") {
      setText("Films with serious themes and emotions");
    } else {
      setText("Films with exiting and fast-paced sequences");
    }
  };

  return (
    <div>
      <label htmlFor="genreSelect">Select a movie genre: </label>
      <select id="genreSelect" onChange={genreSelectHandler}>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>
      <p>Description: {text && `${genre} - ${text}`}</p>
    </div>
  );
};

export default SelectGenre;
