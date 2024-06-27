import React, { useState } from "react";

const UserProfile = ({ username, imageUrl, bio, location }) => {
  const [view, setView] = useState(false);

  const clickHandler = () => {
    setView(true);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>
        <b>Username: </b>
        {username}
      </p>
      {view ? (
        <div>
          <div>
            <img src={imageUrl} alt="user" />
          </div>
          <p>
            <b>Bio: </b>
            {bio}
          </p>
          <p>
            <b>Location: </b>
            {location}
          </p>
        </div>
      ) : (
        <button onClick={clickHandler}>View Profile</button>
      )}
    </div>
  );
};

export default UserProfile;
