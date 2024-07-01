import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { employees } from "../utils/common";
import { Link } from "react-router-dom";

const Employees = () => {
  const [department, setDepartment] = useState("All");

  const filteredEmployee =
    department === "All"
      ? employees
      : employees.filter((emp) => emp.department == department);

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
          <ul className="list-group">
            {filteredEmployee.map((employee) => (
              <li key={employee.id} className="list-group-item">
                <h4>{employee.name}</h4>
                <p>{employee.title}</p>
                <Link
                  to={`/employees/${employee.id}`}
                  className="btn btn-primary">
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Employees;
