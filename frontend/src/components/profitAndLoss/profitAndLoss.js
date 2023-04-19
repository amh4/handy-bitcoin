import React, { useState, useEffect } from "react";

function ProfitAndLoss({ startingPrice, currentPrice }) {
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
      <p>Profit/Loss: ${profitLoss?.toLocaleString()}</p>
    </div>
  );
}

export default ProfitAndLoss;
