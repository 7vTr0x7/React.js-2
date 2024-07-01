import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Report = () => {
  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>Hr Report</h1>
        <hr />

        <div className="row">
          <div className="col-md-4">
            <h2>Weight Loss Progress</h2>
            <p>Current Weight: 180 lbs</p>
            <p>Starting Weight: 200 lbs</p>
            <p> Weight Loss: 20 lbs</p>
          </div>
          <div className="col-md-4">
            <h2>Exercise Goals</h2>
            <p>Weekly exercise hours goals: 5 hours</p>
            <p> Exercise hours this week: 7 hours</p>
            <p>Remaining hours to goals: 0 hours</p>
          </div>
          <div className="col-md-4">
            <h2>Healthy Eating Habits</h2>
            <p>Vegetables Consumed: 5 servings/day</p>
            <p>Food Consumed: 3 servings/day</p>
            <p>Water Intake: 8 glasses/day</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Report;
