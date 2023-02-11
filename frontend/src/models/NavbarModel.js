import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../css/Navbar.css";

export default function NavbarModel() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="navContainer">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand style={{ color: "#0CE9EC", margin: 20 }} href="/">
              Home
            </Navbar.Brand>
            <Navbar.Brand
              style={{ color: "#0CE9EC", margin: 20 }}
              href="/login"
            >
              Login
            </Navbar.Brand>
            <Navbar.Brand
              style={{ color: "#0CE9EC", margin: 20 }}
              href="/register"
            >
              Register
            </Navbar.Brand>
            <Navbar.Brand style={{ color: "#0CE9EC", margin: 20 }} href="/">
              Contact Us
            </Navbar.Brand>
            <Navbar.Brand style={{ color: "#0CE9EC", margin: 20 }} href="/">
              About
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
