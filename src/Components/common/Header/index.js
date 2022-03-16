import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from '../../../assets/header/Logo.png';
import "./header.css"
import Scrollspy from 'react-scrollspy'


function Header() {
  const [color, setColor] = useState('transparent')
  const [blur, setBlur] = useState('blur(0px)')
  const [transition, settransition] = useState('1s')
  const [height, setheight] = useState('85px')


  const listenScrollEvent = e => {
    if (window.scrollY > 100 && window.innerWidth > 992) {
      setColor("rgb(0, 0, 0, 0.4)")
      settransition("1s")
      setBlur("blur(8px)")
      setheight("65px")
    } else {
      document.getElementById("header-menu").style = null
      setColor("transparent")
      settransition("1s")
      setBlur("blur(0px)")
      setheight("85px")
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])

  return (
    <>
      <Navbar
        collapseOnSelect expand="lg"
        fixed="top"
        variant="transparent"
        id="header-menu"
        style={{ background: color, backdropFilter: blur, transition: transition }}
      >
        <Container fluid>
          <Navbar.Brand href="/home">
            <img className="w-100" src={Logo} alt="logo" style={{height: height, transition: transition }} />
          </Navbar.Brand>
          <Nav className="m-auto w-100">
            <Scrollspy
              items={
                [
                  "homeSection02",
                  "homeSection03",
                  "homeSection04"
                ]
              }
              currentClassName="active-Link"
              className="d-flex align-itesm-center justify-content-center ps-0 mt-0 m-auto mobileView"
            >
              <Nav.Link href="/#homeSection02">inspiration</Nav.Link>
              <Nav.Link href="/#homeSection03">join</Nav.Link>
              <Nav.Link href="/#homeSection04">prizes</Nav.Link>
            </Scrollspy>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;