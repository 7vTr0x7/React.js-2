import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Employees = () => {
  const [department, setDepartment] = useState("");

  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>List of Employees</h1>
        <div className="py-4">
          <label id="departmentFilter">Filter By Department: </label>
          <select
            id="departmentFilter"
            onChange={(e) => setDepartment(e.target.value)}
            className="form-select">
            <option value="All">All Department</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div>
          <ul className="list-group">{}</ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Employees;
