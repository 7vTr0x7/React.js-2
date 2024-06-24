import React, { useState } from "react";

const App = () => {
  const [mode, setMode] = useState("");
  const [usage, setUsage] = useState("");
  const [comment, setComment] = useState("none");
  const [experience, setExperience] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && experience && agreed) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Transportation Preference Form</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="modeSelect">Preferred mode of transportation: </label>
        <select
          id="modeSelect"
          onChange={(e) => setMode(e.target.value)}
          required>
          <option value="">Select</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Bicycle">Bicycle</option>
          <option value="Walk">Walk</option>
        </select>
        <br />
        <br />
        <label htmlFor="usageSelect">Frequency of usage: </label>
        <select
          id="usageSelect"
          required
          onChange={(e) => setUsage(e.target.value)}>
          <option value="">Select</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        <br />
        <br />
        <label htmlFor="comment">Comment (if any): </label>
        <br />
        <textarea
          cols="60"
          rows="4"
          id="comment"
          onChange={(e) => setComment(e.target.value)}></textarea>
        <br />
        <br />
        <label>Experience level: </label>
        <br />
        <input
          type="radio"
          name="experience"
          value="Beginner"
          onChange={(e) => setExperience(e.target.value)}
        />
        Beginner
        <br />
        <input
          type="radio"
          name="experience"
          value="Intermediate"
          onChange={(e) => setExperience(e.target.value)}
        />
        Intermediate
        <br />
        <input
          type="radio"
          name="experience"
          value="Advanced"
          onChange={(e) => setExperience(e.target.value)}
        />
        Advanced
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            onChange={(e) => setAgreed(e.target.checked)}
          />
          I agree to terms and condition
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>Submitted Details</h2>
          <p>Preferred mode of Transportation: {mode}</p>
          <p>Frequency of usage: {usage}</p>
          <p>Comment: {comment}</p>
          <p>Experience Level: {experience}</p>
        </div>
      )}
    </div>
  );
};

export default App;
