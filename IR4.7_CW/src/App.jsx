import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const [color, setColor] = useState("Red");
  const [submitted, setSubmitted] = useState(false);

  const interestsHandler = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setInterests((prev) => [...prev, value]);
    } else {
      setInterests((prev) => prev.filter((interest) => interest !== value));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && address && gender && interests && color) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>User Profile Form</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="address">Address: </label>
        <br />
        <textarea
          cols="40"
          rows="4"
          id="address"
          onChange={(e) => setAddress(e.target.value)}></textarea>
        <br />
        <br />
        <label>Gender: </label>
        <br />
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Female
        <br />
        <input
          type="radio"
          name="gender"
          value="Others"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Others
        <br />
        <br />
        <label>Interests: </label>
        <br />
        <input
          type="checkbox"
          name="interests"
          value="Reading"
          onChange={interestsHandler}
        />
        Reading
        <br />
        <input
          type="checkbox"
          name="interests"
          value="Singing"
          onChange={interestsHandler}
        />
        Singing
        <br />
        <input
          type="checkbox"
          name="interests"
          value="Painting"
          onChange={interestsHandler}
        />
        Reading
        <br />
        <br />
        <label htmlFor="colorSelect">Favorite color: </label>
        <select id="colorSelect" onChange={(e) => setColor(e.target.value)}>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Orange">Orange</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>Submitted Details</h2>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Gender: {gender}</p>
          <p>Interests: {interests.join(", ")}</p>
          <p>Favorite Color: {color}</p>
        </div>
      )}
    </div>
  );
};

export default App;
