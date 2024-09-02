import React, { useContext } from "react";
import { AppContext } from "../../AppContext.tsx";

const Members = () => {
  const { selectedRoles, setSelectedRoles } = useContext(AppContext);
  const roles = ["Coder", "Artist", "Musician", "Game Designer"];
  const roleDescriptions = [
    "Individuals with a knack for coding and game mechanics",
    "Creative minds who bring games to life with stunning visuals",
    "Those who enhance the gaming experience with immersive audio",
    "Those passionate about creating unique game experiences",
  ];
  const images = [
    "/images/coder.png",
    "/images/artist.png",
    "/images/musician.png",
    "/images/desginer.png",
  ];

  const handleClick = (role: string) => {
    if (selectedRoles.includes(role)) {
      const updatedRoles = selectedRoles.filter((ele) => ele != role);
      setSelectedRoles(updatedRoles);
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };
  return (
    <div>
      <div className="heading">Members</div>
      <div className="content-text-box fade-in">
        <b>Our members</b> are the heart and soul of GameLab. Comprising a
        diverse group of students from various backgrounds and skill levels, our
        members brings their unique skills and perspectives, contributing to a
        rich collaborative environment.
      </div>
      <div className="role-container">
        {roles.map((role, i) => (
          <div className="role" key={role}>
            <button
              className={selectedRoles.includes(role) ? "active" : ""}
              onClick={() => handleClick(role)}
            >
              <img src={images[i]}></img>
              <div>{role}</div>
              <div style={{ fontSize: "1rem" }}>{roleDescriptions[i]}</div>
            </button>
          </div>
        ))}
      </div>
      <div className="convo-container">
        <img src={"/images/purple-cat.png"}></img>
        <div className="convo-bubble">
          Which roles are you <br></br>interested in?
        </div>
      </div>
    </div>
  );
};

export default Members;
