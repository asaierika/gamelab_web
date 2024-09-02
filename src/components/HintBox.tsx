import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";

const HintBox = () => {
  const { hint } = useContext(AppContext);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (hint !== "") {
      //   setAnimationClass("transparent");
      setAnimationClass("fade-in-fade-out");

      const timer = setTimeout(() => {
        setAnimationClass("transparent");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hint]);

  return (
    <div>
      {hint !== "" && (
        <div className={`hint-container ${animationClass}`}>
          <div>{hint}</div>
        </div>
      )}
    </div>
  );
};

export default HintBox;
