import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import "./HomeScreen.css";
const ContactScreen = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_422negn",
        "template_wkssekw",
        form.current,
        "xU_xNGCKvDeHQCD3j"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <h1>Connect with me</h1>
      <Row>
        <Col className=" w-full  md:w-1/3  p-5">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="rounded-5"
                type="email"
                name="user_email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control className="rounded-5" type="text" name="message" />
            </Form.Group>
            <Button className="Button hover:animate-pulse" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col
          className="w-full hidden md:w-1/3 md:block hover:animate-pulse"
          style={{
            borderTop: "1px solid lightgray",
          }}
        >
          <Container className="text-right">
            <h1 className="w3-animate-right">
              <i className="fa-brands fa-instagram animate-pulse"></i>
              <span>
                <a href="https://www.instagram.com/photography_by_nabby/">
                  @photography_by_nabby
                </a>
              </span>
            </h1>
            <h1 className="w3-animate-left">
              <i className="fa-brands fa-whatsapp animate-pulse"></i>
              <span>
                <a href="tel: +27 62 500 7393">+27 62 500 7393</a>
              </span>
            </h1>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
