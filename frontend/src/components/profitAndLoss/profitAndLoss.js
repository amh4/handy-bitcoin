import React, { useState, useEffect } from "react";
import "./profitAndLoss.css";

function ProfitAndLoss({ startingPrice, currentPrice, onProfitLoss }) {
  const [profitLoss, setProfitLoss] = useState(null);

  useEffect(() => {
    if (startingPrice != null) {
      setProfitLoss(currentPrice - startingPrice);
    } else {
      setProfitLoss(0);
    }
  }, [startingPrice, currentPrice]);

  return (
    <div id="profit-loss-container">
      <p>Profit/Loss: ${profitLoss?.toLocaleString() * 10000}</p>
      {onProfitLoss(profitLoss)}
    </div>
  );
}

export default ProfitAndLoss;
