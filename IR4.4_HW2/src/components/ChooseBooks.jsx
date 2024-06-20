import React, { useState } from "react";

const ChooseBooks = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedGenres((prev) => [...prev, value]);
    } else {
      setSelectedGenres((prev) => prev.filter((genre) => genre !== value));
    }
  };

  return (
    <div>
      <p>Choose your favorite book genres: </p>
      <label for="Fiction">
        <input
          type="checkbox"
          value="Fiction"
          id="Fiction"
          onChange={handleGenreCheckbox}
        />
        Fiction
      </label>
      <br />
      <label for="Mystery">
        <input
          type="checkbox"
          value="Mystery"
          id="Mystery"
          onChange={handleGenreCheckbox}
        />
        Mystery
      </label>
      <br />
      <label for="Biography">
        <input
          type="checkbox"
          value="Biography"
          id="Biography"
          onChange={handleGenreCheckbox}
        />
        Biography
      </label>
      <br />
      {selectedGenres.length > 0 && (
        <p>Selected genres: {selectedGenres.join(", ")}</p>
      )}
    </div>
  );
};

export default ChooseBooks;
