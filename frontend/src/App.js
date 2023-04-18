import "./App.css";
import React, { useState, useEffect } from "react";
import HandTracker from "./components/handTracker/handTracker";
import UserTutorial from "./components/userTutorial/userTutorial";
import BitcoinLivePrice from "./components/bitcoinLivePrice/bitcoinLivePrice";

function App() {
  const [currentPrice, setCurrentPrice] = useState();
  console.log(currentPrice);
  return (
    <div className="App">
      <UserTutorial />
      <HandTracker />
      <BitcoinLivePrice onPriceUpdate={setCurrentPrice} />
    </div>
  );
}

export default App;
