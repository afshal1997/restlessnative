import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from '../../../assets/header/Logo.png';
import "./header.css"
import Scrollspy from 'react-scrollspy'


function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="transparent" variant="transparent">
        <Container fluid>
          <Navbar.Brand href="/">
            <img className="w-100" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="m-auto w-100">
            <Scrollspy items={["homeSection02", "homeSection03", "homeSection04"]} currentClassName="active-Link" className="d-flex align-itesm-center justify-content-center ps-0 mt-0 m-auto mobileView">
              <Nav.Link href="#homeSection02">inspiration</Nav.Link>
              <Nav.Link href="#homeSection03">join</Nav.Link>
              <Nav.Link href="#homeSection04">prizes</Nav.Link>
            </Scrollspy>
          </Nav>  
        </Container>
      </Navbar>
    </>
  );
}

export default Header;