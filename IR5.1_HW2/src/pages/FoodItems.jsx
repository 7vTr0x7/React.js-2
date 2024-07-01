import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { foodItemsData } from "../utils/common";
import { Link } from "react-router-dom";

const FoodItems = () => {
  const [categories, setCategories] = useState(["All"]);

  const categoriesHandler = (e) => {
    const { value, checked } = e.target;

    if (value === "All") {
      if (checked) {
        setCategories(["All"]);
      }
    } else {
      if (checked) {
        setCategories((prev) => {
          const values = prev.filter((category) => category !== "All");
          return [...values, value];
        });
      } else {
        setCategories((prev) => {
          const newCategories = prev.filter((category) => category !== value);
          return newCategories.length === 0 ? ["All"] : newCategories;
        });
      }
    }
  };

  const filteredItems =
    categories.includes("All") || categories.length === 0
      ? foodItemsData
      : foodItemsData.filter((item) => categories.includes(item.category));

  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>List of Food Items</h1>

        <div className="py-4">
          <label className="px-2">Category: </label>
          <input
            id="all"
            type="checkbox"
            value="All"
            checked={categories.includes("All")}
            onChange={categoriesHandler}
          />
          <label htmlFor="all" className="px-2">
            All
          </label>

          <input
            id="fruit"
            type="checkbox"
            value="Fruit"
            checked={categories.includes("Fruit")}
            onChange={categoriesHandler}
          />
          <label htmlFor="fruit" className="px-2">
            Fruit
          </label>

          <input
            id="protein"
            type="checkbox"
            value="Protein"
            checked={categories.includes("Protein")}
            onChange={categoriesHandler}
          />
          <label htmlFor="protein" className="px-2">
            Protein
          </label>

          <input
            id="vegetable"
            type="checkbox"
            value="Vegetable"
            checked={categories.includes("Vegetable")}
            onChange={categoriesHandler}
          />
          <label htmlFor="vegetable" className="px-2">
            Vegetable
          </label>

          <input
            id="dairy"
            type="checkbox"
            value="Dairy"
            checked={categories.includes("Dairy")}
            onChange={categoriesHandler}
          />
          <label htmlFor="dairy" className="px-2">
            Dairy
          </label>
        </div>

        <div>
          <ul className="list-group">
            {filteredItems.map((item) => (
              <li className="list-group-item" key={item.id}>
                <h4>{item.name}</h4>
                <p>Calories: {item.calories}</p>
                <p>Category: {item.category}</p>
                <Link to="#" className="btn btn-primary">
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

export default FoodItems;
