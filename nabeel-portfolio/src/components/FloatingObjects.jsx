import React from "react";
import Spline from "@splinetool/react-spline";
import { Container } from "react-bootstrap";
const FloatingObjects = () => {
  return (
    <a href="/mywork">
      <Container className="hidden md:block">
        <Spline scene="https://prod.spline.design/IcUAY7GXo5KmSk-S/scene.splinecode" />
      </Container>
    </a>
  );
};

export default FloatingObjects;
