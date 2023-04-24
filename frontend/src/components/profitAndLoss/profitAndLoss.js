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
      <p id="profit-loss-label">Profit/Loss: </p>
      <p id="profit-loss-amount">${profitLoss?.toLocaleString() * 1000}</p>
      <TotalProfitLoss profitLoss={profitLoss} tradeActive={tradeActive} />
    </div>
  );
}

export default ProfitAndLoss;
