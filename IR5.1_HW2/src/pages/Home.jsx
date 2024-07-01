import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container py-4">
        <div>
          <img
            src="https://placehold.co/400x300?text=Healthy+Lifestyle"
            className="img-fluid"
            alt="Healthy Lifestyle"
          />
        </div>
        <div className="mt-4">
          <h2>Health Resources</h2>
          <p>
            Explore food and information to support your journey towards a
            healthier lifestyle.
          </p>
          <Link to="/food" className="btn btn-primary">
            Explore Food Items
          </Link>
        </div>
        <div className="mt-4">
          <h2>Health Report</h2>
          <p>See health report</p>
          <Link to="/report" className="btn btn-primary">
            View Report
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
