import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserSitting from "../images/user.png";
import OpenTrade from "../images/openTrade.png";
import CloseTrade from "../images/closeTrade.png";
import "./userTutorial.css";

const UserTutorial = () => {
  const [show, setShow] = useState(true);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => setShow(false)}
      id="tutorial-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Trade Vision</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel id="user-tutorial" variant="dark">
          <Carousel.Item>
            <img
              className="carousel-image"
              src={UserSitting}
              id="user-img"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="image-title" id="first-image-caption">
                Step 1
              </h3>
              <p className="image-instructions" id="first-image-instructions">
                Sit facing your webcam
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image"
              src={OpenTrade}
              id="open-trade-img"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="image-title" id="second-image-caption">
                Step 2
              </h3>
              <p className="image-instructions" id="second-image-instructions">
                Raise your hand with an open palm to place a trade
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image"
              src={CloseTrade}
              id="close-trade-img"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="image-title" id="third-image-caption">
                Step 3
              </h3>
              <p className="image-instructions" id="third-image-instructions">
                Raise your hand with a closed fist to close a trade
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default UserTutorial;
