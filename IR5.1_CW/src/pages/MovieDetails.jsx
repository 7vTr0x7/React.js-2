import React from "react";
import { useParams } from "react-router-dom";
import { moviesData } from "../utils/common";

const MovieDetails = () => {
  const movieId = useParams();

  const movie = moviesData.find((movie) => movie.id == movieId.movieId);
  console.log(movie);

  return <div></div>;
};

export default MovieDetails;
