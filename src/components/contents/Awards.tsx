import React from "react";

const Awards = () => {
  const awards = [
    "Best Student Game Design at the Regional Tech Fair",
    "Innovative Use of Technology Award from the School",
    "Innovation Fund Top 10 Finalist in the National Student Game Development Competition",
  ];
  return (
    <div>
      <div className="heading">Awards</div>
      <div>
        At GameLab, we take pride in our accomplishments and the recognition
        we've received for our innovative projects. Notable awards include:
      </div>
      <div className="award-container column-container">
        {awards.map((award, i) => (
          <div key={award} className="award">
            {award}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
