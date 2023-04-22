import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import BitcoinLogo from "../images/Bitcoin.png";
import "./bitcoinLivePrice.css";

const BitcoinLivePrice = (props) => {
  const [currentPrice, setCurrentPrice] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://localhost:4000/")
        .then((response) => response.json())
        .then((data) => {
          setCurrentPrice(data.currentPrice.price);
        });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="bitcoin-price-container">
      <p id="live-price-label">
        <img id="bitcoin-logo" src={BitcoinLogo} />
        Live Price: $
      </p>

      <p id="live-price-amount">
        {currentPrice && currentPrice.toLocaleString()}
      </p>
      {props.onPriceUpdate && props.onPriceUpdate(currentPrice)}
    </div>
  );
};

export default BitcoinLivePrice;
