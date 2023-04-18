import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import HandTracker from "./components/handTracker/handTracker";
import UserTutorial from "./components/userTutorial/userTutorial";
import BitcoinLivePrice from "./components/bitcoinLivePrice/bitcoinLivePrice";

function App() {
  const [currentPrice, setCurrentPrice] = useState();
  const openTradeRef = useRef(false);
  const closeTradeRef = useRef(false);
  const tradeActiveRef = useRef(false);

  console.log("App trade open: ", openTradeRef.current);
  console.log("App trade active: ", tradeActiveRef.current);
  console.log("App trade closed: ", closeTradeRef.current);

  return (
    <div className="App">
      <UserTutorial />
      <HandTracker
        onOpenTrade={(value) => (openTradeRef.current = value)}
        onCloseTrade={(value) => (closeTradeRef.current = value)}
        onTradeActive={(value) => (tradeActiveRef.current = value)}
      />

      <BitcoinLivePrice onPriceUpdate={setCurrentPrice} />
    </div>
  );
}

export default App;
