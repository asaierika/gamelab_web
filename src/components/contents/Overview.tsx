import React from "react";

const Overview = () => {
  return (
    <div>
      <div className="heading">Overview</div>
      <div className="content-text-box">
        GameLab is an engaging and dynamic school-based interest group dedicated
        to the art and science of game development. Established and driven by
        passionate student game developers, GameLab serves as a creative hub
        where students can collaborate, innovate, and turn their game ideas into
        reality. Our mission is to foster a vibrant community of aspiring game
        developers and provide them with the resources, support, and
        opportunities to thrive in the world of game design and development.
      </div>
      <div className="faq">
        <div>
          <div style={{ fontWeight: "bold" }}>When was GameLab founded?</div>
          <div>We are a youg interest grouop founded in 2021.</div>
        </div>
        <div>
          <div style={{ fontWeight: "bold" }}>
            What level of experiences is needed?
          </div>
          <div>Students with all experience levels are welcome!</div>
        </div>
        <div>
          <div style={{ fontWeight: "bold" }}>
            How many members are there in GameLab?
          </div>
          <div>
            We have over 200 members by the end of 2023, and are still growing!
          </div>
        </div>
        <div>
          <div style={{ fontWeight: "bold" }}>
            How do I start to develop a game?
          </div>
          <div>
            We provide a community where you can easily find like-minded people
            to start on a game!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
