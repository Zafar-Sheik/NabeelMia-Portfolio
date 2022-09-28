import React from "react";
import { Container } from "react-bootstrap";
const SocialLinks = () => {
  return (
    <Container
      style={{
        borderTop: ".5px solid lightgray",
        display: "flex",
        justifyContent: "center",
        boxShadow: "2px 0px 0px 0px solid gray",
      }}
      className="fixed inset-x-0 bottom-0 h-16 ... w3-animate-left hover:bg-blue-100"
    >
      <a href="https://www.instagram.com/photography_by_nabby/">
        <i className="fa-brands fa-instagram hover:animate-bounce"></i>
      </a>
      <a href="tel: +27 62 500 7393">
        <i className="fa-brands fa-whatsapp hover:animate-bounce"></i>
      </a>

      <i className="fa-solid fa-at hover:animate-bounce"></i>
    </Container>
  );
};

export default SocialLinks;
