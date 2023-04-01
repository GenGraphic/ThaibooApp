import React, { useEffect } from 'react';
import Menu from '../Components/Menu';
import { Container, Row, Col } from 'react-bootstrap';
import './css/UberUns.css';
import AOS from "aos";
import 'aos/dist/aos.css';
import CookieConsent from "react-cookie-consent";

const UberUns = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])


  return (
    <>
      <Menu
      homeColor={'#FFF'}
      uberUns={'#FF6D00'}
      speisekarte={'#FFF'}
      contact={'#FFF'}
      />

      <Container fluid className='heroSection'>
        <Row className='h-75'>
          <Col className="d-flex align-items-center">
            <div 
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className='titleOuterFrame'>
              <div className='titleInnerFrame'>
                <p>Tchaiboo</p>
                <h1>Über uns</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5 mb-5'>
        <Row className='mb-5'>
          <Col className='col-auto'>
            <img data-aos="fade-up-right" src={require('../images/about/insideImg.jpeg')} alt='Inside' className='decoImg'/>
          </Col>
          <Col>
            <h5 className='titleParagraph'>Über Thaiboo Restaurant</h5>
            <hr style={{backgroundColor: '#FF6D00'}}/>
            <p data-aos="fade-down-left" className='paragraph'>
              Mit einer Leidenschaft für authentische asiatische Küche bietet unser Restaurant eine breite Palette an Gerichten mit verschiedenen Aromen und Geschmacksrichtungen, 
              inspiriert von der chinesischen, japanischen, thailändischen und vietnamesischen Küche. Unsere warme und einladende Atmosphäre eignet sich perfekt für ein romantisches 
              Abendessen oder einen Abend mit Freunden. Wir freuen uns darauf, Sie in unserem asiatischen Restaurant begrüßen zu dürfen und Ihre Geschmacksknospen zu verwöhnen!
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5 className='titleParagraph'>Köchteam</h5>
            <hr style={{backgroundColor: '#FF6D00'}}/>
            <p data-aos="fade-up-right" className='paragraph'>
              Unser talentiertes Team von Köchen hat jahrelange Erfahrung in der Zubereitung von köstlichen asiatischen Gerichten und legt Wert auf die Verwendung von frischen und 
              hochwertigen Zutaten. Sie bringen ihre Leidenschaft für die asiatische Küche in jedes Gericht ein und bereiten alles mit viel Liebe und Sorgfalt zu. Jeder Bissen wird Sie 
              begeistern und Sie auf eine kulinarische Reise mitnehmen. Wir sind stolz darauf, ein solch talentiertes Team von Köchen zu haben und wissen, dass Sie ihre Arbeit zu schätzen 
              wissen werden.
            </p>
          </Col>
          <Col className='col-auto'>
            <img data-aos="fade-up-left" src={require('../images/about/kochImg.jpeg')} alt='Inside' className='decoImg'/>
          </Col>
        </Row>
      </Container>

      <Container fluid className='banner pb-3'>
        <Row className='h-100 justify-content-center align-items-end'>
          <div className='mottoOutterFrame d-flex justify-content-center align-items-center'>
            <div className='mottoInnerFrame'>
              <p className='motto'>
                Entdecken Sie die Aromen Asiens - lassen Sie sich von uns auf eine kulinarische Reise entführen und erleben Sie einen unvergesslichen Abend in unserem Restaurant.
              </p>
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

export default UberUns
