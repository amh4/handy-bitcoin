import React, { useState, useEffect } from "react";
import TotalProfitLoss from "../totalProfitLoss/totalProfitLoss";
import "./profitAndLoss.css";

function ProfitAndLoss({ startingPrice, currentPrice, tradeActive }) {
  const [profitLoss, setProfitLoss] = useState(null);

  useEffect(() => {
    if (startingPrice != null) {
      console.log("step 1 profit/loss calc: ", currentPrice - startingPrice);
      setProfitLoss(currentPrice - startingPrice);
    } else {
      setProfitLoss(0);
    }
  }, [startingPrice, currentPrice]);

  return (
    <div id="profit-loss-container">
      <div id="running-profit-loss">
        <p id="profit-loss-label">Profit/Loss: </p>
        <p id="profit-loss-amount">${profitLoss?.toLocaleString() * 1000}</p>
      </div>
      <div id="total-profit-loss-container">
        <TotalProfitLoss profitLoss={profitLoss} tradeActive={tradeActive} />
      </div>
    </div>
  );
}

export default ProfitAndLoss;
