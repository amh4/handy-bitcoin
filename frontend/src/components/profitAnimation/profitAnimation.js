import React from "react";
import Confetti from "../images/confetti.gif";
import "./profitAnimation.css";

const ProfitAnimation = () => {
  return (
    <div id="profit-animation">
      <img id="confetti-img" src={Confetti} />
    </div>
  );
};

export default ProfitAnimation;
