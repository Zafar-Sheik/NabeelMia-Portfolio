import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Router from "../Router";

const Navigation = () => {
  return (
    <>
      <Container className="nav-body">
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="light"
          style={{ borderRadius: "50px", margin: "50px", padding: "10px" }}
          className="hover:animate-pulse"
        >
          <Container>
            <Navbar.Brand className="hidden md:block" href="/">
              Nabeel Mia
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              data-bs-target="#navbarScroll"
              style={{ borderRadius: "50%" }}
            />

            <Nav className="align-items-right">
              <Navbar.Collapse id="navbarScroll">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/mywork">Work</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>{" "}
              </Navbar.Collapse>
            </Nav>
          </Container>
        </Navbar>
      </Container>
      <Router />
    </>
  );
};

export default Navigation;
