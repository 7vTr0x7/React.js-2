import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [interests, setInterests] = useState([]);
  const [update, setUpdate] = useState("");
  const [comment, setComment] = useState("none");
  const [submitted, setSubmitted] = useState(false);

  const handleInterests = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setInterests((prev) => [...prev, value]);
    } else {
      setInterests((prev) => prev.filter((interest) => interest !== value));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && email && interests && update && plan && comment) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h2>Subscription Form</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Full Name: </label>
        <input
          type="text"
          id="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="plan">Subscription Plan: </label>
        <select id="plan" required onChange={(e) => setPlan(e.target.value)}>
          <option value="">Select Plan</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Ultimate">Ultimate</option>
        </select>
        <br />
        <br />
        <label>Interests: </label>
        <br />
        <input type="checkbox" value="Technology" onChange={handleInterests} />
        Technology
        <br />
        <input type="checkbox" value="Fitness" onChange={handleInterests} />
        Fitness
        <br />
        <input type="checkbox" value="Cooking" onChange={handleInterests} />
        Cooking
        <br />
        <br />
        <label>Want to Receive Updates: </label>
        <br />
        <input
          type="radio"
          name="update"
          value="Yes"
          onChange={(e) => setUpdate(e.target.value)}
        />
        Yes
        <br />
        <input
          type="radio"
          name="update"
          value="No"
          onChange={(e) => setUpdate(e.target.value)}
        />
        No
        <br />
        <br />
        <label htmlFor="comment">Comment: </label>
        <br />
        <textarea
          id="comment"
          cols="50"
          rows="4"
          onChange={(e) => setComment(e.target.value)}></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {submitted && (
          <div>
            <h2>Submitted Details</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Subscription Plan: {plan}</p>
            <p>Interests: {interests.join(", ")}</p>
            <p>Want to receive updates: {update}</p>
            <p>Comment: {comment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
