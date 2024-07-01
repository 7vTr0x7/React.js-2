import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <div>
          <img
            src="https://placehold.co/500x300?text=Movie+Cover"
            alt="Movie Cover"
            className="img-fluid"
          />
        </div>
        <div className="pt-4">
          <h2>Our Movies</h2>
          <p>
            Explore our collection of movies spanning various genres and themes.
          </p>
          <Link to="/movies" className="btn btn-primary">
            View Movies
          </Link>
        </div>
        <div className="pt-4">
          <h2>Movie Recommendations</h2>
          <p>Check our curated list recommended movies that you might enjoy.</p>
          <Link to="/report" className="btn btn-primary">
            View Recommendations
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
