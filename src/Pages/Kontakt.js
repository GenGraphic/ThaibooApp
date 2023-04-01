import React from 'react';
import Menu from '../Components/Menu';
import './css/Contact.css'
import { Container, Row, Col } from 'react-bootstrap';
import CookieConsent from "react-cookie-consent";

const Kontakt = () => {
  return (
   <>
    <Menu
      homeColor={'#FFF'}
      uberUns={'#FFF'}
      speisekarte={'#FFF'}
      contact={'#FF6D00'}
    />

    <Container fluid className='mainCont p-0'>
      <Row className='no-gutters'>
        <Col>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.518885578362!2d11.936851315660498!3d48.46575997925096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e3c4e19cdbb17%3A0xcca435b3e329e572!2sThaiboo%20by%20Ranji!5e0!3m2!1sen!2sde!4v1679888748648!5m2!1sen!2sde" 
          loading="lazy"
          title='Map'
          className='map'
        >
        </iframe>
        </Col>
      </Row>
    </Container>
    
    <Container fluid className='infoCont'>
      <Row className='flex-column h-100 justify-content-between mt-5'>
        <div className='outerFrame mt-5'>
          <div className='innerFrame'>
            <h5 className='text-center estebanFont'>ANSCHRIFT</h5>
            <div>
              <p>Landshuter Str. 9, </p>
              <p>85368 Moosburg an der Isar</p>
            </div>
          </div>
        </div>

        <div className='outerFrame'>
          <div className='innerFrame'>
            <h5 className='text-center estebanFont'>TELEFONNUMMER</h5>
            <div>
              <p>087617266572</p>
              <p>015157321761</p>
            </div>
          </div>
        </div>

        <div className='outerFrame'> 
          <div className='innerFrame'>
            <h5 className='text-center estebanFont'>ÖFFNUNGSZEITEN</h5>
            <p>Dienstag-Sonntag:............................11:00-15:00</p>
            <p>...................................................................17:00-21:00</p>
            <p>Montag:...........................................................Ruhetag</p>
          </div>
        </div>
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
   </>
  )
}

export default Kontakt
