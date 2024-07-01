import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { moviesData } from "../utils/common";

const Report = () => {
  const mostWatchedMovie = moviesData.reduce((acc, curr) =>
    acc.views < curr.views ? curr : acc
  );

  return (
    <>
      <Header />
      <div className="container py-4">
        <h2>Movie Report</h2>
        <hr />
        <h3>Most Watched Movie</h3>
        {mostWatchedMovie && (
          <>
            <p>Title: {mostWatchedMovie.title}</p>
            <p>Views: {mostWatchedMovie.views}</p>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Report;
