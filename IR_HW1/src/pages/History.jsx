import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const History = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>History</h1>
        <p>
          The history of the Taj Mahal dates back to the early 17th century
          during the reign of Mughal Emperor Shah Jahan. In 1631, Shah Jahan's
          beloved wife, Mumtaz Mahal, died during childbirth, leaving the
          emperor heartbroken. To honor her memory, Shah Jahan decided to build
          a mausoleum that would be unparalleled in grandeur and beauty.
          Construction began in 1632 and involved thousands of artisans and
          laborers from across the empire, as well as architects from Persia,
          the Ottoman Empire, and India.
        </p>
        <p>
          The construction of the Taj Mahal took over 20 years, with the main
          mausoleum completed in 1648 and the surrounding structures and gardens
          finished by 1653. The project was meticulously planned and executed,
          with materials sourced from all over India and Asia, including white
          marble from Makrana, Rajasthan, and precious and semi-precious stones
          from various regions. The Taj Mahal stands as a testament to the
          artistic and architectural achievements of the Mughal era. After Shah
          Jahan's death in 1666, he was buried next to Mumtaz Mahal in the Taj
          Mahal, further cementing the monument as a symbol of eternal love and
          devotion.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default History;
