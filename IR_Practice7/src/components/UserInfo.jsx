import React, { useState } from "react";

const UserInfo = ({ userName, email, age }) => {
  const [view, setView] = useState(false);

  const clickHandler = () => {
    setView(true);
  };

  return (
    <div>
      <h1>User Information</h1>
      <p>
        <strong>Username: </strong>
        {userName}
      </p>
      {view ? (
        <div>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Age: </strong>
            {age}
          </p>
        </div>
      ) : (
        <button onClick={clickHandler}>See Profile</button>
      )}
    </div>
  );
};

export default UserInfo;
