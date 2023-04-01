import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './css/Menu.css';

const Menu = ({homeColor, uberUns, speisekarte, contact}) => {
  return (
    <Navbar className="navBar">
        <Container className="d-flex">
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              loading="lazy"
              className="logo"
              src={require('../images/logo.png')}
          />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="links" to='/' style={{color: homeColor}}>Home</Link>
            <Link className="links" to='/ÜberUns' style={{color: uberUns}}>Über uns</Link>
            <Link className="links" to='/Speisekarte' style={{color: speisekarte}}>Speisekarte</Link>
            <Link className="links" to='/Kontakt' style={{color: contact}}>Kontakt</Link>
          </Nav>

          <button className="contactBtn">
            Jetzt bestellen
          </button>

        </Container>
      </Navbar>
  )
}

export default Menu
