import React, { useState } from "react";

const FavoriteMovie = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleMoviesCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedMovies((prev) => [...prev, value]);
    } else {
      setSelectedMovies((prev) => prev.filter((movie) => movie !== value));
    }
  };

  return (
    <div>
      <p>Choose your favorite movies: </p>
      <label for="Action">
        <input
          type="checkbox"
          value="Action"
          id="Action"
          onChange={handleMoviesCheckbox}
        />
        Action
      </label>
      <br />
      <label for="Comedy">
        <input
          type="checkbox"
          value="Comedy"
          id="Comedy"
          onChange={handleMoviesCheckbox}
        />
        Comedy
      </label>
      <br />
      <label for="Drama">
        <input
          type="checkbox"
          value="Drama"
          id="Drama"
          onChange={handleMoviesCheckbox}
        />
        Drama
      </label>
      <br />
      {selectedMovies.length > 0 && (
        <p>Selected Movies: {selectedMovies.join(", ")}</p>
      )}
    </div>
  );
};

export default FavoriteMovie;
