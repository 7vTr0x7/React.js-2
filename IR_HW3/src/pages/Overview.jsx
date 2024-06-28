import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Overview = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Overview</h1>
        <div>
          <img
            alt="iPhone 15"
            className="img-fluid"
            src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
          />
        </div>
        <p className="pt-3 fw-normal">
          Introducing the all-new iPhone 15, the latest innovation form apple.
          Explore its incredible features, specifications, and stunning design
          in this website.
        </p>
      </main>
      <Footer />
    </>
  );
};
Overview;
export default Overview;
