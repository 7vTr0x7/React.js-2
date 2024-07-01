import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { foodItemsData } from "../utils/common";

const FoodDetails = () => {
  const item = useParams();

  const foodItem = foodItemsData.find((food) => food.id == item.itemId);

  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>{foodItem.name}</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <span>
              <b>Name: </b>
              {foodItem.name}
            </span>
          </li>
          <li className="list-group-item">
            <span>
              <b>Calories: </b>
              {foodItem.calories}
            </span>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default FoodDetails;
