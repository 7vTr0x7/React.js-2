import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div className="container py-4">
      <h1>Posts</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && (
        <p className="text-center">An error occurred while fetching posts.</p>
      )}
      <ul className="list-group my-4">
        {data &&
          data.map((post) => (
            <li className="list-group-item" key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
