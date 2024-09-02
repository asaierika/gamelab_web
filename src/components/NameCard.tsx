import React, { useContext } from "react";
import { AppContext } from "../AppContext.tsx";

const NameCard = () => {
  const { name } = useContext(AppContext);
  const { selectedRoles } = useContext(AppContext);
  const { avatar } = useContext(AppContext);
  const { level } = useContext(AppContext);

  return (
    <div className="name-card">
      <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
        <button>Join us!</button>
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
