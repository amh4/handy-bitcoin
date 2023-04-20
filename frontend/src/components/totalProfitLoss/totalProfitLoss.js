import React, { useEffect, useState } from "react";

const TotalProfitLoss = ({ profitLoss }) => {
  const [runningProfitLoss, setRunningProfitLoss] = useState(0);
  const [totalProfitLoss, setTotalProfitLoss] = useState(0);

  useEffect(() => {
    if (profitLoss != null) {
      setRunningProfitLoss(profitLoss);
    } else if (profitLoss === 0) {
      setRunningProfitLoss(0);
    } else if (profitLoss < 0) {
      setRunningProfitLoss(runningProfitLoss - profitLoss);
    } else if (profitLoss > 0) {
      setRunningProfitLoss(runningProfitLoss + profitLoss);
    }

    setTotalProfitLoss(totalProfitLoss + runningProfitLoss);
  }, [profitLoss, runningProfitLoss]);

  return (
    <div id="total-profit-loss-headline">
      <p>Total Profit/Loss: ${totalProfitLoss?.toLocaleString()}</p>
    </div>
  );
};

export default TotalProfitLoss;
