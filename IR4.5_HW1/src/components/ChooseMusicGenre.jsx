import React, { useState } from "react";

const ChooseMusicGenre = () => {
  const [genre, setGenre] = useState("");

  const genreSelectHandler = (e) => {
    setGenre(e.target.value);
  };

  return (
    <div>
      <form onChange={genreSelectHandler}>
        <label>Choose your favorite music genre:</label>
        <br />
        <label for="pop">
          <input type="radio" name="genre" id="pop" value="pop" />
          Pop
        </label>
        <br />
        <label for="rock">
          <input type="radio" name="genre" id="rock" value="rock" />
          Rock
        </label>
        <br />
        <label for="hipHop">
          <input type="radio" name="genre" id="hipHop" value="hiphop" />
          Hip Hop
        </label>
        <br />
        <label for="classical">
          <input type="radio" name="genre" id="classical" value="classical" />
          Classical
        </label>
      </form>

      {genre && <p>I like {genre} music.</p>}
    </div>
  );
};

export default ChooseMusicGenre;
