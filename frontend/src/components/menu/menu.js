import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import UserTutorial from "../userTutorial/userTutorial";
import "./menu.css";

function Menu() {
  const [show, setShow] = useState(false);
  const [tutorialShow, setTutorialShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTutorialShow(false);
  };
  const handleShow = () => setShow(true);
  const handleTutorialShow = () => setTutorialShow(true);

  return (
    <div id="menu-container">
      <Button id="menu-button" variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {!tutorialShow ? (
            <Button variant="link" onClick={handleTutorialShow}>
              Tutorial
            </Button>
          ) : (
            <div>
              <UserTutorial />
              <Button variant="link" onClick={handleTutorialShow}>
                Tutorial
              </Button>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Menu;
