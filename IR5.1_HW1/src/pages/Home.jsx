import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="py-3">
          <img
            src="https://placehold.co/400x300?text=Employee+Smiling"
            alt="Employee"
            className="img-fluid"
          />
        </div>

        <div className="py-4">
          <h2>Our Employees</h2>
          <p>
            Meet our dedicated team of professionals who work tirelessly to
            achieve our company&apos;s goals.
          </p>
          <a className="btn btn-primary">View Employees</a>
        </div>
        <div className="py-4">
          <h2>Company Report</h2>
          <p>
            Explore our latest financial report to gain insights into our
            company&apos;s performance and growth.
          </p>
          <a className="btn btn-primary">View Report</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
