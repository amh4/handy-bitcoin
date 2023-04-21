import React from "react";
import MoneyBag from "../images/losingTrade.png";
import "./lossAnimation.css";

const LossAnimation = () => {
  return (
    <div id="loss-animation">
      <img id="money-bag-img" src={MoneyBag} />
    </div>
  );
};

export default LossAnimation;
