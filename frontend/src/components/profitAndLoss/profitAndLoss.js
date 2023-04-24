import React, { useState, useEffect } from "react";
import TotalProfitLoss from "../totalProfitLoss/totalProfitLoss";
import ProfitAnimation from "../profitAnimation/profitAnimation";
import LossAnimation from "../lossAnimation/lossAnimation";
import "./profitAndLoss.css";

function ProfitAndLoss({ startingPrice, currentPrice, tradeActive }) {
  const [profitLoss, setProfitLoss] = useState(null);
  const [profitAnimation, setProfitAnimation] = useState(false);
  const [lossAnimation, setLossAnimation] = useState(false);

  useEffect(() => {
    if (startingPrice != null) {
      console.log("step 1 profit/loss calc: ", currentPrice - startingPrice);
      setProfitLoss(currentPrice - startingPrice);
    } else {
      setProfitLoss(0);
    }
  }, [startingPrice, currentPrice]);

  useEffect(() => {
    if (!tradeActive && profitLoss > 0) {
      console.log("profit animation");
      setProfitAnimation(true);
      console.log("profit animation", profitAnimation);
      setTimeout(() => {
        setProfitAnimation(false);
      }, 3000);
      console.log("post set timeout", profitAnimation);
    } else if (!tradeActive && profitLoss < 0) {
      console.log("loss animation");
      setLossAnimation(true);
      console.log("loss animation ", lossAnimation);
      setTimeout(() => {
        setLossAnimation(false);
      }, 3000);
      console.log("post set timeout", lossAnimation);
    }
  }, [tradeActive]);

  return (
    <div id="profit-loss-container">
      <div id="running-profit-loss">
        <p id="profit-loss-label">Profit/Loss: </p>
        <p id="profit-loss-amount">${profitLoss?.toLocaleString() * 1000}</p>
      </div>
      <div id="total-profit-loss-container">
        <TotalProfitLoss profitLoss={profitLoss} tradeActive={tradeActive} />
      </div>
      {profitAnimation && <ProfitAnimation />}
      {lossAnimation && <LossAnimation />}
    </div>
  );
}

export default ProfitAndLoss;
