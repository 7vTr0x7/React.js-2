import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Records() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Records</h1>
        <p>
          Virat Kohli holds numerous cricket records, including being the
          fastest to 8,000, 9,000, 10,000, 11,000, and 12,000 runs in One Day
          Internationals (ODIs). He has also amassed the most centuries in run
          chases in ODIs and holds the record for the highest number of
          centuries in a calendar year across all formats.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Records;
