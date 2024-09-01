import React from "react";
import logo from "/logo.png";

const Members = () => {
  const roles = ["Coder", "Artist/Animator", "Musicians", "Game Designer"];
  const images = [logo, logo, logo, logo];
  return (
    <div>
      <div className="heading">Members</div>
      <div className="content-text-box fade-in">
        Our members are the heart and soul of GameLab. Comprising a diverse
        group of students from various backgrounds and skill levels, we welcome:
        Aspiring Game Designers: Those with a passion for creating unique game
        experiences. Programmers and Coders: Individuals with a knack for coding
        and game mechanics. Artists and Animators: Creative minds who bring
        games to life with stunning visuals. Sound Designers and Musicians:
        Talented individuals who enhance the gaming experience with immersive
        audio. Each member brings their unique skills and perspectives,
        contributing to a rich collaborative environment.
      </div>
      <div className="role-container">
        {roles.map((role, i) => (
          <div className="role">
            <button>
              <img src={images[i]}></img>
              <div>{role}</div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
