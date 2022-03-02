import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from '../../../assets/header/Logo.png';
import "./header.css"


function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="transparent" variant="transparent">
        <Container fluid>
          <Navbar.Brand href="/">
            <img className="w-100" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#inspiration">inspiration</Nav.Link>
              <Nav.Link href="#join">join</Nav.Link>
              <Nav.Link href="#prizes">prizes</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;