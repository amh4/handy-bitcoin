import React, { useEffect, useState } from "react";

const TotalProfitLoss = ({ profitLoss, tradeActive }) => {
  const [runningProfitLoss, setRunningProfitLoss] = useState(0);
  const [totalProfitLoss, setTotalProfitLoss] = useState(0);

  console.log(profitLoss);
  console.log(tradeActive);

  useEffect(() => {
    if (profitLoss != null) {
      setRunningProfitLoss(profitLoss);
    }
  }, [profitLoss]);

  useEffect(() => {
    setTotalProfitLoss(totalProfitLoss + runningProfitLoss);
    console.log("trade active changed to: ", tradeActive);
  }, [tradeActive]);

  return (
    <div id="total-profit-loss-headline">
      <p>Total Profit/Loss: ${totalProfitLoss?.toLocaleString()}</p>
    </div>
  );
};

export default TotalProfitLoss;
