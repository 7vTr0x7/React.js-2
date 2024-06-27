import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Biography = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Biography</h1>
        <p>
          Virat Kohli, born on November 5, 1988, in Delhi, India, is a
          celebrated cricketer known for his aggressive batting and leadership
          skills. Rising through the ranks of youth cricket, he made his
          international debut in 2008 and has since become one of the most
          successful and influential players in the sport.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Biography;
