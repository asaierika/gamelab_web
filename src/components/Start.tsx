import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";

const Start = () => {
  const { name, setName, isNameCardActive } = useContext(AppContext);
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState(name);
  const [hasStarted, setHasStarted] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setName(event.target.value);
  };
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setHasStarted(true), 1000);
  };

  return (
    <div>
      {!hasStarted && (
        <div
          className={`overlay column-container ${isClicked ? "fade-out" : ""}`}
        >
          <div className="title column-container" style={{ gap: "2rem" }}>
            <img style={{ width: "20rem" }} src="/logo.png"></img>
            <img src="/images/purple-cat.gif"></img>
            <div className="row-container">
              <div>My name is...</div>
              <input value={inputValue} onChange={handleChange}></input>
            </div>
            <button className="light-button" onClick={() => handleClick()}>
              Start exploring GameLab!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Start;
