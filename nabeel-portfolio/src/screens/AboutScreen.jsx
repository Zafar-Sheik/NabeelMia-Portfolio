import React from "react";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <>
      <Container className="hidden md:block">
        <ReactPlayer url={"studio.mp4"} playing={true} />
      </Container>
      <Container className="text-right" style={{ marginBottom: "8rem" }}>
        <h3 className="w3-animate-left">
          I am a passionate and self taught photographer focusing on automotive
          photography, based in Johannesburg. I have a unique and fresh approach
          to the industry and have worked with multiple local dealerships within
          the Johannesburg region.
        </h3>
        <i className="fa-solid fa-quote-left " style={{ color: "skyblue" }}></i>
        <h4 className="w3-animate-right">
          As a photographer I want my photography to be exciting and bold on
          which the subject shines and stands out. My viewers need to be on a
          drive with me and my photos achieve that through composition and tone
          where I make the subject part of the story.
        </h4>
      </Container>
    </>
  );
};

export default AboutScreen;
