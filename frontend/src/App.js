import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import HandTracker from "./components/handTracker/handTracker";
import UserTutorial from "./components/userTutorial/userTutorial";
import BitcoinLivePrice from "./components/bitcoinLivePrice/bitcoinLivePrice";
import ProfitAndLoss from "./components/profitAndLoss/profitAndLoss";
import TotalProfitLoss from "./components/totalProfitLoss/totalProfitLoss";
import LogoNoBackGround from "./components/images/logo-no-background.png";
import Menu from "./components/menu/menu";

function App() {
  const [currentPrice, setCurrentPrice] = useState();
  const [startingPrice, setStartingPrice] = useState(null);
  const [currentProfitLoss, setCurrentProfitLoss] = useState(null);
  const tradeActiveRef = useRef(false);

  useEffect(() => {
    if (tradeActiveRef.current && startingPrice === null) {
      setStartingPrice(currentPrice);
    } else if (tradeActiveRef.current === false && startingPrice != null) {
      setStartingPrice(null);
    }
  }, [tradeActiveRef.current]);

  return (
    <div className="App">
      <UserTutorial />
      <Menu />
      <img id="logo" src={LogoNoBackGround} />
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
      <HandTracker
        id="hand-tracker"
        onTradeActive={(value) => (tradeActiveRef.current = value)}
      />
    </div>
  );
}

export default App;
