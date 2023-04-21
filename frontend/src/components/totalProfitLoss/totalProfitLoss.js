import React, { useEffect, useState } from "react";

const TotalProfitLoss = ({ profitLoss, tradeActive }) => {
  const [runningProfitLoss, setRunningProfitLoss] = useState(0);
  const [totalProfitLoss, setTotalProfitLoss] = useState(0);

  useEffect(() => {
    if (profitLoss != null) {
      setRunningProfitLoss(profitLoss);
    }
  }, [profitLoss]);

  useEffect(() => {
    setTotalProfitLoss(totalProfitLoss + runningProfitLoss);
  }, [tradeActive]);

  return (
    <div id="total-profit-loss-headline">
      <p>Total Profit/Loss: ${totalProfitLoss?.toLocaleString()}</p>
    </div>
  );
};

export default TotalProfitLoss;
