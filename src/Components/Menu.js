import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './css/Menu.css';

const Menu = ({homeColor, uberUns, speisekarte, contact}) => {

  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">
        <img
            alt="logo"
            loading="lazy"
            className="logo"
            src={require('../images/logo.png')}
        />
        </Navbar.Brand>

        <button className="contactBtn order-lg-1">
            <a href='tel: +4915157321761' style={{color: 'white', textDecorationLine: 'none'}}>Jetzt bestellen</a>
        </button>

        <Navbar.Toggle aria-controls="basic-navbar-nav order-lg-0"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="links" href='/' style={{color: homeColor}}>Home</Nav.Link>
            <Nav.Link className="links" href='/ÜberUns' style={{color: uberUns}}>Über uns</Nav.Link>
            <Nav.Link className="links" href='/Speisekarte' style={{color: speisekarte}}>Speisekarte</Nav.Link>
            <Nav.Link className="links" href='/Kontakt' style={{color: contact}}>Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
