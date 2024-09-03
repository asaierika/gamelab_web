import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";

const Activities = () => {
  const {
    setHint,
    setLevel,
    isClicked,
    setIsClicked,
    isFlipped,
    setIsFlipped,
  } = useContext(AppContext);

  const activities = [
    "Weekly Workshops",
    "Game Jams",
    "Project Showcases",
    "Guest Speaker Events",
    "Collaborative Projects",
    "Team Bonding Activities",
  ];
  const descriptions = [
    "Covering various aspects of game development, from basic coding toadvanced design techniques.",
    "Intense, fun-filled events where members create games from scratch in a limited time frame.",
    "Opportunities for members to present their projects, receive feedback, and celebrate achievements.",
    "Featuring industry professionals who share their insights and experiences.",
    "Team-based initiatives where members work together on exciting game development projects.",
    "Recreational activities such as table games and BBQ that fosters bonds between members.",
  ];
  const images = [
    "/images/spade.png",
    "/images/heart.png",
    "/images/club.png",
    "/images/diamond.png",
    "/images/spade.png",
    "/images/heart.png",
  ];

  const handleClick = (i: number) => {
    setLevel((prevLevel) => {
      return prevLevel + 1;
    });
    setHint("Activities unlocked!");
    isClicked.forEach((_, index) => {
      setTimeout(() => {
        let currIndex = (i + index) % 6;
        console.log(currIndex);
        // Correct way to update the isClicked state using functional updates
        setIsClicked((prevClicked: boolean[]) => {
          const newClickedArr = [...prevClicked]; // Create a shallow copy of the previous state
          newClickedArr[currIndex] = true; // Modify the copy
          console.log(`Clicked updated for index ${currIndex}:`, newClickedArr);
          return newClickedArr; // Return the new state
        });

        setTimeout(() => {
          setIsFlipped((prevFlipped: boolean[]) => {
            const newFlippedArr = [...prevFlipped]; // Create a shallow copy of the previous state
            newFlippedArr[currIndex] = true; // Modify the copy
            console.log(
              `Flipped updated for index ${currIndex}:`,
              newFlippedArr
            );
            return newFlippedArr; // Return the new state
          });
        }, 500); // Delay before flipping
      }, index * 300); // Increasing delay for each iteration
    });
  };

  return (
    <div>
      <div className="heading">Activities</div>
      <div className="fade-in">
        GameLab is active and engaging, offering a wide range of activities
        designed to inspire and educate:
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1em",
        }}
      >
        <div className="activities-container">
          {activities.map((activity, i) => (
            <div key={activity} className="activities-holder">
              {!isFlipped[i] && (
                <button
                  onClick={() => handleClick(i)}
                  className="transparent-button"
                >
                  <img
                    className={isClicked[i] ? "fade-out" : ""}
                    src={images[i]}
                  ></img>
                </button>
              )}

              {isFlipped[i] && (
                <div className={isFlipped[i] ? "fade-in" : ""}>
                  <div style={{ fontWeight: "bold" }}>{activity}</div>
                  <div>{descriptions[i]}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
