import React, { useContext } from "react";
import { AppContext } from "../../AppContext.tsx";

const Members = () => {
  const {
    setLevel,
    setHint,
    selectedRoles,
    setSelectedRoles,
    hasSelectedRoles,
    setHasSelectedRoles,
  } = useContext(AppContext);
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
      if (updatedRoles.length == 0) {
        updatedRoles.push("Guest");
      }
      setSelectedRoles(updatedRoles);
    } else {
      const updatedRoles = selectedRoles.filter((ele) => ele != "Guest");
      setSelectedRoles([...updatedRoles, role]);
    }

    if (!hasSelectedRoles) {
      setHasSelectedRoles(true);
      setHint("You have selected a role!");
      setLevel((prevLevel) => {
        return prevLevel + 1;
      });
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
      <div className="row-container" style={{ gap: "2rem" }}>
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
        <div className="column-container">
          <div className="convo-bubble">
            Which roles are you <br></br>interested in?
          </div>
          <img className="char-image" src={"/images/purple-cat.gif"}></img>
        </div>
      </div>
    </div>
  );
};

export default Members;
