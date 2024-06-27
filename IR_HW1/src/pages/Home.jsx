import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Overview</h1>
        <div>
          <img
            alt="Taj Mahal"
            className="img-fluid"
            src="https://assets.editorial.aetnd.com/uploads/2011/06/taj-mahal-gettyimages-463924915.jpg?width=1920&height=960&crop=1920%3A960%2Csmart&quality=75&auto=webp"
          />
        </div>
        <p className="pt-3">
          The Taj Mahal, located in Agra, India, is a magnificent white marble
          mausoleum built by the Mughal Emperor Shah Jahan in memory of his
          beloved wife, Mumtaz Mahal. Completed in 1653, this UNESCO World
          Heritage Site is renowned for its stunning architectural beauty and
          intricate craftsmanship, combining elements of Islamic, Persian,
          Ottoman Turkish, and Indian architectural styles. The main structure
          is flanked by four minarets and is set amidst expansive formal gardens
          with reflecting pools that enhance its splendor. The central dome,
          adorned with a lotus design and crowned by a gilded finial, is an
          iconic feature that captures the essence of Mughal architecture.
        </p>
        <p>
          The interior of the Taj Mahal is equally impressive, with a
          meticulously decorated chamber housing the cenotaphs of Mumtaz Mahal
          and Shah Jahan, surrounded by delicate marble screens and inlaid with
          precious and semi-precious stones. The walls and floors are adorned
          with intricate floral patterns and calligraphy, displaying verses from
          the Quran. Beyond its architectural grandeur, the Taj Mahal stands as
          a symbol of eternal love, attracting millions of visitors each year
          who come to admire its beauty and reflect on the poignant love story
          that inspired its creation.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
