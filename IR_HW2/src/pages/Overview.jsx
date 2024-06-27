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
            alt="virat"
            className="img-fluid"
            src="https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png"
          />
        </div>
        <p className="pt-4">
          Virat Kohli is an Indian cricketer known for his exceptional batting
          skills and leadership, serving as the former captain of the Indian
          national team. Renowned for his aggressive play and numerous records,
          he is one of the most successful and influential cricketers in modern
          cricket.
        </p>
        <p>
          Virat Kohli is a renowned Indian cricketer celebrated for his prolific
          run-scoring and dynamic leadership, having captained the Indian
          national team across all formats. He is widely regarded as one of the
          best batsmen of his generation, with numerous records and accolades to
          his name.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Overview;
