import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { moviesData } from "../utils/common";

const Report = () => {
  const mostWatchedMovie = moviesData.reduce((acc, curr) =>
    acc.view < curr.view ? (acc = curr) : acc
  );

  console.log(mostWatchedMovie);

  return (
    <>
      <Header />
      <div className="container py-4">
        <h2>Movie Report</h2>
      </div>
      <Footer />
    </>
  );
};

export default Report;
