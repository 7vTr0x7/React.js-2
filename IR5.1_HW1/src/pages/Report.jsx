import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { employees } from "../utils/common";

const Report = () => {
  const mostWorkedEmployee = employees.reduce((acc, curr) =>
    acc.hoursWorked < curr.hoursWorked ? curr : acc
  );

  const highestRatedEmployee = employees.reduce((acc, curr) =>
    acc.performanceRate < curr.performanceRate ? curr : acc
  );

  const totalOvertime = employees.reduce(
    (acc, curr) => acc + curr.overTimeHours,
    0
  );

  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>HR Report</h1>
        <hr />

        <div className="row">
          <div className="col-md-4">
            <h2>Most Worked Employee</h2>
            <p>Name: {mostWorkedEmployee.name}</p>
            <p>Hours Worked: {mostWorkedEmployee.hoursWorked}</p>
          </div>
          <div className="col-md-4">
            <h2>Highest Rated Employee</h2>
            <p>Name: {highestRatedEmployee.name}</p>
            <p>Performance Rate: {highestRatedEmployee.performanceRate}</p>
          </div>
          <div className="col-md-4">
            <h2>Total Overtime Hours</h2>
            <p>Total Overtime Hours: {totalOvertime}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Report;
