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
    {
      onProfitLoss(profitLoss);
    }
  }, [startingPrice, currentPrice]);

  return (
    <div id="profit-loss-container">
      <p>Profit/Loss: ${profitLoss?.toLocaleString()}</p>
    </div>
  );
}

export default ProfitAndLoss;
