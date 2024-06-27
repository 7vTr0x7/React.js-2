import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Architecture = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Architecture</h1>
        <p>
          The Taj Mahal's architecture is a stunning fusion of Islamic, Persian,
          Ottoman Turkish, and Indian styles. Designed by Ustad Ahmad Lahauri,
          its central dome rises to 240 feet and is surrounded by four smaller
          domes and four minarets, each over 130 feet tall. The white marble
          façade is adorned with intricate carvings, calligraphy, and inlays of
          precious stones forming floral patterns and Quranic verses.
        </p>
        <p>
          Inside, the octagonal chamber houses the cenotaphs of Mumtaz Mahal and
          Shah Jahan, enclosed by a delicate marble screen. The complex also
          features a mosque, a guest house, and gardens laid out in the charbagh
          style, symbolizing paradise. The Taj Mahal's symmetry, precision, and
          artistic excellence make it an architectural marvel and a symbol of
          eternal love.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Architecture;
