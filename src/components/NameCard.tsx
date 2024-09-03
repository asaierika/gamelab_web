import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext.tsx";

const NameCard = () => {
  const {
    hint,
    setHint,
    isSubmitted,
    setIsSubmitted,
    isNameCardActive,
    setIsNameCardActive,
    name,
    setName,
    selectedRoles,
    avatar,
    level,
  } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(name);

  const handleJoin = () => {
    setIsNameCardActive(true);
  };

  const handleCancel = () => {
    setIsNameCardActive(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setName(event.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsNameCardActive(false);
    setHint("Yay! You have submitted an application!");
  };

  return (
    <div className={`name-card-container ${isNameCardActive ? "active" : ""}`}>
      <div className="name-card">
        {!isNameCardActive && !isSubmitted && (
          <button
            className="join-us-button light-button"
            onClick={() => handleJoin()}
          >
            Join us!
          </button>
        )}

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="avatar">
            <img src={avatar}></img>
          </div>
          <div className="name-card-info">
            <input
              className="default-input"
              value={inputValue}
              onChange={handleChange}
            ></input>
            <div>Lv.{level}</div>
          </div>
        </div>
        <div className="name-card-roles">
          {selectedRoles.map((role, i) => (
            <div key={role} className="name-card-role">
              {role}
            </div>
          ))}
        </div>
        {isNameCardActive && (
          <div className="fade-in-slow input-container">
            <div className="input-label-pair">
              <label>school email:</label>
              <input></input>
            </div>
            <div className="input-label-pair">
              <label>interest(s):</label>
              <input></input>
            </div>
            <div className="input-label-pair">
              <label>portfolio link:</label>
              <input></input>
            </div>
            <div
              className="row-container"
              style={{
                position: "absolute",
                bottom: "1rem",
                right: "50%",
                transform: "translateX(50%)",
              }}
            >
              <button className="light-button" onClick={() => handleSubmit()}>
                Submit
              </button>
              <button className="light-button" onClick={() => handleCancel()}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NameCard;
