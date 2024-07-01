import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Employees from "./pages/Employees.jsx";
import Report from "./pages/Report.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
  {
    path: "/report",
    element: <Report />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
