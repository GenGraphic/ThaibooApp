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
          <Col className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <div 
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className='titleOuterFrame w-75'>
              <div className='titleInnerFrame'>
                <p>Thaiboo</p>
                <h2>Über uns</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5 mb-5'>
        <Row className='mb-5'>
          <Col className='col-auto mx-auto'>
            <img data-aos="fade-up-right" src={require('../images/about/insideImg.jpeg')} alt='Inside' className='decoImg'/>
          </Col>
          <Col className='col-12 col-lg'>
            <h5 className='titleParagraph'>Über Thaiboo Restaurant</h5>
            <hr style={{backgroundColor: '#FF6D00'}}/>
            <p data-aos="fade-down-left" className='paragraph' style={{fontWeight: 600}}>
            Mit einer Leidenschaft für authentische Thailändische Küche bietet unser Restaurant eine breite Palette an Gerichten mit verschiedenen Aromen und Geschmacksrichtungen. 
            Unsere warme und einladende Atmosphäre eignet sich perfekt für ein romantisches Abendessen oder einen Abend mit Freunden. Wir freuen uns darauf, Sie in unserem 
            asiatischen Restaurant begrüßen zu dürfen und Ihre Geschmacksknospen zu verwöhnen!
            </p>
          </Col>
        </Row>

        <Row>
          <Col className='col-12 col-lg'>
            <h5 className='titleParagraph'>Kochteam</h5>
            <hr style={{backgroundColor: '#FF6D00'}}/>
            <p data-aos="fade-up-right" className='paragraph' style={{fontWeight: 600}}>
              Unser talentiertes Team von Köchen hat jahrelange Erfahrung in der Zubereitung von köstlichen asiatischen Gerichten und legt Wert auf die Verwendung von frischen und 
              hochwertigen Zutaten. Sie bringen ihre Leidenschaft für die asiatische Küche in jedes Gericht ein und bereiten alles mit viel Liebe und Sorgfalt zu. Jeder Bissen wird Sie 
              begeistern und Sie auf eine kulinarische Reise mitnehmen. Wir sind stolz darauf, ein solch talentiertes Team von Köchen zu haben und wissen, dass Sie ihre Arbeit zu schätzen 
              wissen werden.
            </p>
          </Col>
          <Col className='col-auto mx-auto'>
            <img data-aos="fade-up-left" src={require('../images/about/kochImg.jpeg')} alt='Inside' className='decoImg'/>
          </Col>
        </Row>
      </Container>

      <Container fluid className='banner pb-3'>
        <Row className='h-100 justify-content-center align-items-end'>
          <div className='mottoOutterFrame d-flex justify-content-center align-items-center'>
            <div className='mottoInnerFrame'>
              <p className='motto' style={{fontWeight: 600}}>
              Genießen Sie jetzt auch  auch Unsere Leckeren Bubble Tea’s. Wir bieten Milchtea’s Früchtetea’s und Sodamix.
              </p>
            </div>
          </div>
        </Row>
      </Container>

      <Container className='mt-5 d-flex flex-lg-row flex-column'>
        <Row className='w-100 mx-auto'>
          <Col className="d-flex flex-column justify-content-between">
            <img src={require('../images/about/1.jpeg')} alt='Katering' className='imgTable w-100'/>
            <img src={require('../images/about/4.jpeg')} alt='Katering' className='imgTable w-100'/>
            <img src={require('../images/about/6.jpeg')} alt='Katering' className='imgTable w-100'/>
          </Col>
          <Col className="d-flex flex-column justify-content-between">
            <img src={require('../images/about/2.jpeg')} alt='Katering' className='imgTable w-100'/>
            <img src={require('../images/about/5.jpeg')} alt='Katering' className='imgTable w-100'/>
          </Col>
        </Row>
        <Row className='w-100 p-3'>
          <Col className='my-auto'>
            <h1 className='titleParagraph'>Catering</h1>
            <img className="paragraphIcon" src={require('../images/home/paragraph.png')} alt="Paragraph Icon"/>
            <p className='paragraph' style={{fontWeight: 600}}>
              Unser Restaurant bietet nicht nur ein unvergessliches kulinarisches Erlebnis in unseren Räumlichkeiten, sondern auch einen Catering-Service für Ihre besonderen Anlässe. 
              Egal, ob Sie eine Hochzeit, eine Firmenveranstaltung oder eine private Feier planen, unser erfahrenes Catering-Team wird Ihnen helfen, das perfekte Menü für Ihre Gäste zu kreieren. 
              Wir verwenden nur die besten und frischesten Zutaten und bereiten alle Gerichte mit viel Liebe und Sorgfalt zu, um sicherzustellen, dass Ihre Gäste ein unvergessliches 
              kulinarisches Erlebnis haben werden. Kontaktieren Sie uns noch heute, um mehr über unsere Catering-Dienstleistungen zu erfahren und lassen Sie uns Ihnen dabei helfen, 
              Ihre Veranstaltung zu einem vollen Erfolg zu machen.
            </p>
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
    </>
  )
}

export default UberUns
