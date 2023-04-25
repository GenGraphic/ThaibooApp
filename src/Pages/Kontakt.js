import React from 'react';
import Menu from '../Components/Menu';
import './css/Contact.css'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import CookieConsent from "react-cookie-consent";

const Kontakt = () => {
  return (
   <Container fluid className='p-0'> 
    <Menu
      homeColor={'#FFF'}
      uberUns={'#FFF'}
      speisekarte={'#FFF'}
      contact={'#FF6D00'}
    />
    
    <Container fluid className='bg-dark'>
      <Carousel>
        <Carousel.Item>
          <div className='innerFrameKontakt'>
            <h5 className='text-center estebanFont'>ANSCHRIFT</h5>
          </div>
          <Carousel.Caption>
            <h3>Landshuter Str. 9,</h3>
            <p>85368 Moosburg an der Isar</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className='innerFrameKontakt'>
            <h5 className='text-center estebanFont'>TELEFONNUMMER</h5>
          </div>
          <Carousel.Caption>
            <a href='tel: 087617266572'>087617266572</a> <br></br>
            <a href='tel: 015157321761'>015157321761</a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className='innerFrameKontakt'>
            <h5 className='text-center estebanFont'>ÖFFNUNGSZEITEN</h5>
          </div>
          <Carousel.Caption>
            <h3>Dienstag-Sonntag: 11:00-15:00/17:00-21:00</h3>
            <p>Montag:Ruhetag</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>

    <Container fluid className='p-0'>
      <Row className='no-gutters w-100 m-0'>
        <Col>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.518885578362!2d11.936851315660498!3d48.46575997925096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e3c4e19cdbb17%3A0xcca435b3e329e572!2sThaiboo%20by%20Ranji!5e0!3m2!1sen!2sde!4v1679888748648!5m2!1sen!2sde" 
          loading="lazy"
          title='Map'
          className='map w-100'
        >
        </iframe>
        </Col>
      </Row>
    </Container>

    <Container fluid>
        <Row className='bg-dark'>
          <Col>
            <p className="m-0 text-center text-white">© All rights reserved to ThaiBoo</p>
          </Col>
        </Row>
    </Container>
    <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
   </Container>
  )
}

export default Kontakt
