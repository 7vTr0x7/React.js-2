import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error, fetchData } = useFetch(
    "https://api.adviceslip.com/advice"
  );

  console.log(data);

  return (
    <div className="container text-center py-4">
      <h1>Advice Slip API</h1>
      <button onClick={fetchData} className="btn btn-primary">
        Get Advice
      </button>
      <div className="my-3">
        {loading && <p>Loading...</p>}
        {error && <p>Error occurred while fetching advice.</p>}
        {data && (
          <p>
            <b>{data.slip.advice}</b>
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
