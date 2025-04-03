import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h5>About Us</h5>
            <p>
              We create high-quality content and offer video production
              services.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <a href="#" className="text-light me-3">
              Facebook
            </a>
            <a href="#" className="text-light me-3">
              Instagram
            </a>
            <a href="#" className="text-light">
              YouTube
            </a>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
