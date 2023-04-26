import React, { useState } from "react";
import MoneyBag from "../images/losingTrade.png";
import "./lossAnimation.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LossAnimation = () => {
  const [show, setShow] = useState(true);
  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      id="loss-animation-modal"
    >
      <Modal.Header>
        <Modal.Title>Losing Trade</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="loss-animation">
          <img id="money-bag-img" src={MoneyBag} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LossAnimation;
