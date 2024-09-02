import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext.tsx";

const NameCard = () => {
  const {
    isNameCardActive,
    setIsNameCardActive,
    name,
    selectedRoles,
    avatar,
    level,
  } = useContext(AppContext);

  const handleClick = () => {
    setIsNameCardActive(true);
  };

  return (
    <div className="name-card">
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)",
        }}
      >
        <button className="light-button" onClick={() => handleClick}>
          Join us!
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="avatar">
          <img src={avatar}></img>
        </div>
        <div className="name-card-info">
          <div style={{ fontSize: "2rem" }}>{name}</div>
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
    </div>
  );
};

export default NameCard;
