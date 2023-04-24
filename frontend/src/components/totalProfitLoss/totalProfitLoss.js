import React, { useEffect, useState } from "react";
import "./totalProfitLoss.css";

const TotalProfitLoss = ({ profitLoss, tradeActive }) => {
  const [runningProfitLoss, setRunningProfitLoss] = useState(0);
  const [totalProfitLoss, setTotalProfitLoss] = useState(0);

  useEffect(() => {
    if (profitLoss != null) {
      console.log("step 2 running p/l: ", profitLoss);
      setRunningProfitLoss(profitLoss);
    }
  }, [profitLoss]);

  useEffect(() => {
    console.log("step 3 setting total ", totalProfitLoss + runningProfitLoss);
    setTotalProfitLoss(totalProfitLoss + runningProfitLoss);
  }, [tradeActive]);

  return (
    <div id="total-profit-loss-container">
      <p id="total-profit-loss-text">Total Profit/Loss:</p>
      <p id="total-profit-loss-amount">
        ${totalProfitLoss?.toLocaleString() * 1000}
      </p>
    </div>
  );
};

export default TotalProfitLoss;
