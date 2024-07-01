import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodItems from "./pages/FoodItems.jsx";
import Report from "./pages/Report.jsx";
import FoodDetails from "./pages/FoodDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/food",
    element: <FoodItems />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/food/:itemId",
    element: <FoodDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
