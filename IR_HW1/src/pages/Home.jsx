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
          The Taj Mahal, located in Agra, India, is a stunning white marble
          mausoleum built by Mughal Emperor Shah Jahan in memory of his wife,
          Mumtaz Mahal. Completed in 1653, this UNESCO World Heritage Site
          showcases a blend of Islamic, Persian, Ottoman Turkish, and Indian
          architectural styles. Its central dome, flanked by four minarets, and
          set amidst formal gardens with reflecting pools, epitomizes Mughal
          architecture&apos;s elegance.
        </p>
        <p>
          Inside, the Taj Mahal features a beautifully decorated chamber with
          the cenotaphs of Mumtaz Mahal and Shah Jahan, surrounded by intricate
          marble screens and inlaid with precious stones. Adorned with floral
          patterns and Quranic calligraphy, the Taj Mahal is not only an
          architectural marvel but also a symbol of eternal love, drawing
          millions of visitors annually.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
