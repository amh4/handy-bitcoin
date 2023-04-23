import React, { useState, useEffect } from "react";
import "./profitAndLoss.css";

function ProfitAndLoss({ startingPrice, currentPrice, onProfitLoss }) {
  const [profitLoss, setProfitLoss] = useState(null);

  useEffect(() => {
    if (startingPrice != null) {
      console.log("step 1 profit/loss calc: ", currentPrice - startingPrice);
      setProfitLoss(currentPrice - startingPrice);
      console.log("step 2 Profit passed up: ", profitLoss);
      onProfitLoss(profitLoss);
    } else {
      setProfitLoss(0);
    }
  }, [startingPrice, currentPrice]);

  return (
    <div id="profit-loss-container">
      <p id="profit-loss-label">Profit/Loss: </p>
      <p id="profit-loss-amount">${profitLoss?.toLocaleString() * 1000}</p>
    </div>
  );
}

export default ProfitAndLoss;
