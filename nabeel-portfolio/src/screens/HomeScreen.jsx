import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import FloatingObjects from "../components/FloatingObjects";

import "./HomeScreen.css";
const HomeScreen = () => {
  return (
    <Row>
      <Col className="text-3xl text-left w-full h-full ml-20 mt-10 md:text-2xl md:text-center md:w-1/3 md:h-1/3">
        <h1>
          I am <strong className="primary">Nabeel </strong>
          Mia
        </h1>
        <h4>
          Photographer <strong className="primary">& </strong> Car Enthusiast
        </h4>
        <h5 className="hidden hover:skew-y-1 md:block">
          Creative<strong className="primary">—</strong>Passionate
          <strong className="primary">—</strong>Escentric
        </h5>
        <Button href="/contact" className="Button animate-pulse">
          Contact
        </Button>
      </Col>

      <Col>
        <FloatingObjects />
      </Col>
    </Row>
  );
};

export default HomeScreen;
