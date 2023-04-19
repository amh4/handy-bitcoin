import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import HandTracker from "./components/handTracker/handTracker";
import UserTutorial from "./components/userTutorial/userTutorial";
import BitcoinLivePrice from "./components/bitcoinLivePrice/bitcoinLivePrice";

function App() {
  const [currentPrice, setCurrentPrice] = useState();
  const tradeActiveRef = useRef(false);

  console.log("App trade active: ", tradeActiveRef.current);
  console.log("Current Price in App: ", currentPrice);

  return (
    <div className="App">
      <UserTutorial />
      <HandTracker
        onTradeActive={(value) => (tradeActiveRef.current = value)}
      />

      <BitcoinLivePrice onPriceUpdate={setCurrentPrice} />
    </div>
  );
}

export default App;
