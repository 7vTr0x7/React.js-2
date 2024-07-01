import { useState } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [showData, setShowData] = useState(false);

  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos/4");

  return (
    <div>
      <h1>Programming API</h1>
      <button onClick={() => setShowData(true)}>Get Data</button>
      {showData && (
        <div>
          {data ? (
            <p>{JSON.stringify(data)}</p>
          ) : (
            <p>An Error ocurred while fetching joke.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
