import React, { useEffect } from "react";
import '../styles.css';
import {Container, Row, Col} from "react-bootstrap";
import GaleryImg from "../Components/GaleryImg";
import Menu from "../Components/Menu";
import AOS from "aos";
import 'aos/dist/aos.css';
import CookieConsent from "react-cookie-consent";
import Video from '../images/home/bkgVideo.mp4'

function App() {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <>
      <Menu
      homeColor={'#FF6D00'}
      uberUns={'#FFF'}
      speisekarte={'#FFF'}
      contact={'#FFF'}
      />

      <Container fluid className="heroPage p-0">
        <Row className="textCont justify-content-center align-items-center m-0">
          <Col className="text-center p-0">
            <div dangerouslySetInnerHTML={{__html: `
              <video autoplay loop muted playsinline class='videoBkg'>
                <source src=${Video} type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>`,
                }}
            />       
            <div className="position-absolute top-50 start-50 translate-middle">
              <h2 className="txtWelcome">WILKOMMEN BEI</h2>
              <h1 className="txtName" data-aos="fade-down">ThaiBoo</h1>
              <div data-aos="fade-down" data-aos-delay="500">
                <p className="txtInfo">Landshuter Str. 9, 85368 Moosburg an der Isar</p>
                <p id="tel" className="txtInfo">Tel: 
                  <a className="telefonNr" href="tel:+4915157321761" style={{color: '#FFF'}}>087617266572</a>
                </p>
              </div>
            </div>
            
            
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <p className="titleParagraph">Thaiboo</p>
            <p className="subtitle text-center text-lg-start">Erleben Sie die Aromen Asiens in jedem Bissen!</p>
            <img loading="lazy" className="paragraphIcon" src={require('../images/home/paragraph.png')} alt="Paragraph Icon"/>
            <p className="paragraph mt-3">
              Willkommen im ThaiBoo! Hier erwartet Sie eine vielfältige Auswahl an köstlichen Gerichten aus Thailand Unser erfahrenes Küchenteam bereitet jedes Gericht 
              mit frischen Zutaten und traditionellen Techniken zu, um Ihnen ein authentisches Geschmackserlebnis zu bieten. Ob Sie nun eine Vorliebe für scharfe 
              thailändische Currygerichte Wahlweise mit Reis oder Verschiedener Nudeln haben oder lieber Gebratenes Gemüse mit Garnelen, Rind, knuspriger Ente, 
              Hühnchen oder Tofu genießen möchten bei uns finden Sie sicherlich etwas, das Ihrem Geschmack entspricht. Lassen Sie sich von uns auf eine kulinarische 
              Reise durch Asien mitnehmen und genießen Sie Ihr Essen in gemütlicher Atmosphäre.
            </p>
          </Col>
          <Col className="col-auto">
            <div className="puzzleCont">
              <div className="whiteSquare">
                <div className="puzzlePiece" data-aos="fade-right"></div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 d-flex justify-content-center align-items-center">
          <Col className="col-auto">
            <img alt="Team Foto" loading="lazy" className="teamImg" src={require('../images/home/team.jpg')}/>
          </Col>
          <Col>
            <p className="titleParagraph">Thaiboo Team</p>
            <p className="subtitle text-center text-lg-start">Gemeinsam schaffen wir unvergessliche Geschmackserlebnisse für unsere Gäste!</p>
            <img className="paragraphIcon" src={require('../images/home/paragraph.png')} alt="Paragraph Icon"/>
            <p className="paragraph mt-3">Unser Team besteht aus leidenschaftlichen und erfahrenen Köchen, die mit viel Liebe und Hingabe jede Speise zubereiten. 
              Jeder Mitarbeiter trägt dazu bei, dass Sie als Gast ein unvergessliches kulinarisches Erlebnis genießen können. Wir sind stolz auf unser Team und schätzen 
              ihre harte Arbeit und ihr Engagement, um sicherzustellen, dass jeder Gast sich bei uns wie zu Hause fühlt.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-5">
        <Row>
          <Col className="d-flex flex-row justify-content-center flex-wrap gap-5">
            <GaleryImg
              image={require('../images/galery/5.jpeg')}/>
            <GaleryImg
              image={require('../images/galery/2.jpeg')}/>
            <GaleryImg
              image={require('../images/galery/3.jpeg')}/>
            <GaleryImg
              image={require('../images/galery/7.jpeg')}/>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="d-flex flex-row justify-content-center flex-wrap gap-5">
            <GaleryImg
              image={require('../images/galery/1.jpeg')}/>
            <GaleryImg
              image={require('../images/galery/6.jpeg')}/>
            <GaleryImg
              image={require('../images/galery/4.jpeg')}/>
            <GaleryImg
              image={require('../images/galery/8.jpeg')}/>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-5 p-0">
        <Row className="bannerRow no-gutters w-100 m-0">
          <Col className="d-flex align-items-end">
            <p className="glassMotto">Entdecke den Geschmack Asiens auf deinem Teller!</p>
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

export default App;
