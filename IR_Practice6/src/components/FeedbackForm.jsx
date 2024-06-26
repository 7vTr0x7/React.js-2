import React from "react";
import { useState } from "react";

const FeedbackForm = () => {
  const [selectedType, setSelectedType] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const clickHandler = () => {
    if (comments && selectedType) {
      setSubmitted(true);
    }
  };

  const typeSelectHandler = (e) => {
    if (comments && selectedType) {
      setSubmitted(false);
      setComments("");
    } else {
      setSelectedType(e.target.value);
    }
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <label htmlFor="typeSelect">Feedback Type: </label>
      <select id="typeSelect" onChange={typeSelectHandler}>
        <option value="">-- Select Feedback Type --</option>
        <option value="Compliment">Compliment</option>
        <option value="Complaint">Complaint</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Other">Other</option>
      </select>
      {selectedType && (
        <div>
          <br />
          <br />

          <label htmlFor="comments">Comments: </label>
          <textarea
            cols="40"
            rows="6"
            value={comments}
            onChange={(e) => setComments(e.target.value)}></textarea>
        </div>
      )}
      <br />
      <br />
      <button onClick={clickHandler}>Submit</button>

      {submitted && (
        <div>
          <br />

          <p>{selectedType}</p>
          <br />

          <p>{comments}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
