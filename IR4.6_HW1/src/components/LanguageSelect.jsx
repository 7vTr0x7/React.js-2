import React, { useState } from "react";

const LanguageSelect = () => {
  const [language, setLanguage] = useState("");

  const languageSelectHandler = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="langSelect">Select a language: </label>
      <select id="langSelect" onChange={languageSelectHandler}>
        <option value="England">English</option>
        <option value="France">French</option>
        <option value="Spain">Spanish</option>
      </select>
      {language && <p>Origin: {language}</p>}
    </div>
  );
};

export default LanguageSelect;
