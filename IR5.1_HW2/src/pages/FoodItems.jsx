import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FoodItems = () => {
  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>List of Food Items</h1>
      </div>
      <Footer />
    </>
  );
};

export default FoodItems;
