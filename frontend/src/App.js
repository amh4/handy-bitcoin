import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import HandTracker from "./components/handTracker/handTracker";
import UserTutorial from "./components/userTutorial/userTutorial";
import BitcoinLivePrice from "./components/bitcoinLivePrice/bitcoinLivePrice";
import ProfitAndLoss from "./components/profitAndLoss/profitAndLoss";
import TotalProfitLoss from "./components/totalProfitLoss/totalProfitLoss";
import ProfitAnimation from "./components/profitAnimation/profitAnimation";
import LossAnimation from "./components/lossAnimation/lossAnimation";

function App() {
  const [currentPrice, setCurrentPrice] = useState();
  const [startingPrice, setStartingPrice] = useState(null);
  const [currentProfitLoss, setCurrentProfitLoss] = useState(null);
  const tradeActiveRef = useRef(false);
  let counter = 0;

  const startAnimation = () => {
    if (currentProfitLoss < 0) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    if (tradeActiveRef.current && startingPrice === null) {
      setStartingPrice(currentPrice);
      counter += 1;
      console.log("counter ", counter);
    } else if (tradeActiveRef.current === false && startingPrice != null) {
      setStartingPrice(null);
    }
  }, [tradeActiveRef.current]);

  return (
    <div className="App">
      <UserTutorial />
      <HandTracker
        onTradeActive={(value) => (tradeActiveRef.current = value)}
      />

      <BitcoinLivePrice onPriceUpdate={setCurrentPrice} />
      <ProfitAndLoss
        startingPrice={startingPrice}
        currentPrice={currentPrice}
        onProfitLoss={(value) => setCurrentProfitLoss(value)}
      />
      <TotalProfitLoss
        profitLoss={currentProfitLoss}
        tradeActive={tradeActiveRef.current}
      />
      {!tradeActiveRef.current && counter > 0 && startAnimation() && (
        <ProfitAnimation />
      )}
      {!tradeActiveRef.current && counter > 0 && !startAnimation() && (
        <LossAnimation />
      )}
    </div>
  );
}

export default App;
