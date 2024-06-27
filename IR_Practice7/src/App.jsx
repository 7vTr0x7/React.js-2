import React from "react";
import Article from "./components/Article";
import About from "./components/About";
import UserInfo from "./components/UserInfo";
import UserProfile from "./components/UserProfile";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";

  const heading = "About Me";
  const name = "Salman"; // you can put your name
  const learning = "I am learning React JS currently at neoG Camp.";

  const userName = "Salman";
  const email = "sk@gmail.com";
  const age = 22;

  const username = "John Doe";
  const imageUrl = "https://via.placeholder.com/200";
  const bio = "Frontend Developer";
  const location = "New York";

  const productName = "Smartphone";
  const description = "High-performance smartphone with advance features";
  const price = "$599.99";

  return (
    <div>
      <Article title={title} content={content} />
      <About heading={heading} name={name} learning={learning} />
      <UserInfo userName={userName} email={email} age={age} />
      <UserProfile
        username={username}
        imageUrl={imageUrl}
        bio={bio}
        location={location}
      />
      <ProductDetails
        productName={productName}
        description={description}
        price={price}
      />
    </div>
  );
};

export default App;
