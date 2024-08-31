import React from "react";
import { useState } from "react";

const Overview = () => {
  const [isFaqShown, setIsFaqShown] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const questions = [
    "When was GameLab founded?",
    "What level of experiences is needed?",
    "How many members are there in GameLab?",
    "How do I start to develop a game?",
  ];

  const answers = [
    "We are a youg interest grouop founded in 2021.",
    "tudents with all experience levels are welcome!",
    " We have over 200 members by the end of 2023, and are still growing!",
    "We provide a community where you can easily find like-minded people to start on a game!",
  ];

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsFaqShown(true), 1000);
  };
  return (
    <div>
      <div className="heading">Overview</div>
      <div className="content-text-box fade-in">
        GameLab is an engaging and dynamic school-based interest group dedicated
        to the art and science of game development. Established and driven by
        passionate student game developers, GameLab serves as a creative hub
        where students can collaborate, innovate, and turn their game ideas into
        reality. Our mission is to foster a vibrant community of aspiring game
        developers and provide them with the resources, support, and
        opportunities to thrive in the world of game design and development.
      </div>
      {isFaqShown ? (
        <div className="faq">
          {questions.map((question, i) => (
            <div className="faq-child">
              <div style={{ fontWeight: "bold" }}>{question}</div>
              <div>{answers[i]}</div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={isClicked ? "move-right" : ""}
          style={{ marginTop: "5rem" }}
          onClick={handleClick}
        >
          <div className="avatar"></div>
        </div>
      )}
    </div>
  );
};

export default Overview;
