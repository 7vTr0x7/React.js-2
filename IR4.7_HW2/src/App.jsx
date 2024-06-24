import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const [crust, setCrust] = useState("");
  const [delivery, setDelivery] = useState("");
  const [instructions, setInstructions] = useState("none");
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name && size && toppings && crust && delivery && instructions) {
      setSubmitted(true);
    }
  };

  const handleToppings = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setToppings((prev) => [...prev, value]);
    } else {
      setToppings((prev) => prev.filter((topping) => topping !== value));
    }
  };

  return (
    <div>
      <h2>Pizza Order Form</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Customer Name: </label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="selectSize">Choose Pizza Size: </label>
        <select
          id="selectSize"
          required
          onChange={(e) => setSize(e.target.value)}>
          <option value="">Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <br />
        <br />
        <label>Choose Toppings: </label>
        <br />
        <input type="checkbox" value="Pepperoni" onChange={handleToppings} />
        Pepperoni
        <br />
        <input type="checkbox" value="Mushrooms" onChange={handleToppings} />
        Mushrooms
        <br />
        <input type="checkbox" value="Olives" onChange={handleToppings} />
        Olives
        <br />
        <br />
        <label>Choose Crust Type: </label>
        <br />
        <input
          type="radio"
          name="crust"
          value="Thin"
          onChange={(e) => setCrust(e.target.value)}
        />
        Thin
        <br />
        <input
          type="radio"
          name="crust"
          value="Thick"
          onChange={(e) => setCrust(e.target.value)}
        />
        Thick
        <br />
        <br />
        <label>Choose Delivery Option: </label>
        <br />
        <input
          type="radio"
          name="delivery"
          value="Pickup"
          onChange={(e) => setDelivery(e.target.value)}
        />
        Pickup
        <br />
        <input
          type="radio"
          name="delivery"
          value="Delivery"
          onChange={(e) => setDelivery(e.target.value)}
        />
        Delivery
        <br />
        <br />
        <label htmlFor="instructions"> Special instructions (if any): </label>
        <br />
        <textarea
          id="instructions"
          cols="50"
          rows="4"
          onChange={(e) => setInstructions(e.target.value)}></textarea>
        <br />
        <button type="submit">Place order</button>
      </form>

      {submitted && (
        <div>
          <h2>Order Details</h2>
          <p>Customer Name: {name}</p>
          <p>Pizza Size: {size}</p>
          <p>Toppings: {toppings.join(", ")} </p>
          <p>Crust Type: {crust}</p>
          <p>Delivery Option: {delivery}</p>
          <p>Special Instructions : {instructions}</p>
        </div>
      )}
    </div>
  );
};

export default App;
