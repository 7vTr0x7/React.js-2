import React from "react";
import { useParams } from "react-router-dom";
import { employees } from "../utils/common";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EmployeeDetails = () => {
  const emp = useParams();

  const employee = employees.find((employee) => employee.id == emp.empId);

  return (
    <>
      <Header />

      <div className="container py-4">
        <h1>{employee.name}</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Name: </b>
            {employee.name}
          </li>
          <li className="list-group-item">
            <b>Designation: </b>
            {employee.title}
          </li>
          <li className="list-group-item">
            <b>Department: </b>
            {employee.department}
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default EmployeeDetails;
