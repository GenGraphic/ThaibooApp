import React, {useContext} from 'react';
import SpeisekarteContext from '../SpeisekarteContext';
import Menu from '../Components/Menu';
import Dish from '../Components/Dish';
import './css/Speisekarte.css';
import { Container, Row, Col } from 'react-bootstrap';
import CookieConsent from "react-cookie-consent";


const Speisekarte = () => {
  const { speisekarte } = useContext(SpeisekarteContext);

  const SortCategory = (category) => {
    const copySpeisekarte = speisekarte;

    const categoryObj = copySpeisekarte.find(elm => elm.category === category);
    
    return categoryObj.items;
  }


  return (
   <>
     <Menu
      homeColor={'#FFF'}
      uberUns={'#FFF'}
      speisekarte={'#FF6D00'}
      contact={'#FFF'}
      />

      <Container fluid className='heroSectionSpeisekarte'>
        <Row className='h-100'>
          <Col className='col-12 d-flex justify-content-center align-items-center justify-content-md-end'>
            <div className='bg-dark p-3'>
              <div className='innerFrame' style={{height: 150, maxWidth: 500}}>
                <p>Thaiboo</p>
                <h1>Speisekarte</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5 pt-3 speisekarteCont'>
        <Row className=''>
          <Col className='col-12 col-lg-6'>
            <h4 className='categoryName'>VORSPEISEN</h4>
            {SortCategory('VORSPEISEN').map((item) => {
              return(
                <Dish
                  key={item.index}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            })
            }

            <h4 className='categoryName mt-3'>SUPPEN</h4>
            {SortCategory('SUPPEN').map((item) => {
              return(
                <Dish
                  key={item.index}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            })
            }
            <Row className='priceTabels d-flex justify-content-between p-1'>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/plant-based.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Vegetarisch:</p>
                  </div>
                  <p>4.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/tofu.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Tofu:</p>
                  </div>
                  <p>4.50€</p>
                </div>
              </Col>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/chicken.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Hähnchen:</p>
                  </div>
                  <p>4.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/shrimp.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Garnelen:  5.90€</p>
                  </div>
                  <p>5.90€</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className='col-12 col-lg-6 mt-3 mt-lg-0'>
            <h4 className='categoryName'>HAUPTGERICHTE MIT THAI-CURRYSAUCE</h4>
            {SortCategory('HAUPTGERICHTE MIT THAI-CURRYSAUCE').map((item) => {
              return(
                <Dish
                  key={item.index} 
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            })
            }

            <Row className='priceTabels d-flex justify-content-between p-1'>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/plant-based.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Vegetarisch:</p>
                  </div>
                  <p>8.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/tofu.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Tofu:</p>
                  </div>
                  <p>9.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/chicken.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Hähnchen:</p>
                  </div>
                  <p>9.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/fish.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Fisch:</p>
                  </div>
                  <p>14.50€</p>
                </div>
              </Col>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/cow-silhouette.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Rindfleisch:</p>
                  </div>
                  <p>9.90€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/shrimp.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Garnelen:</p>
                  </div>
                  <p>11.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/duck.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Ente:</p>
                  </div>
                  <p>12.50€</p>
                </div>
              </Col>
            </Row>

            <h4 className='categoryName mt-3'>NUDELGERICHTE MIT SOJASAUCE</h4>
            {SortCategory('NUDELGERICHTE MIT SOJASAUCE').map((item) => {
              return(
                <Dish
                  key={item.index} 
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            })
            }

            <Row className='priceTabels d-flex justify-content-between p-1'>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/plant-based.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Vegetarisch:</p>
                  </div>
                  <p>8.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/tofu.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Tofu:</p>
                  </div>
                  <p>9.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/chicken.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Hähnchen:</p>
                  </div>
                  <p>9.50€</p>
                </div>
              </Col>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/cow-silhouette.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Rindfleisch:</p>
                  </div>
                  <p>9.90€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/shrimp.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Garnelen:</p>
                  </div>
                  <p>11.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/duck.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Ente:</p>
                  </div>
                  <p>12.50€</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col className='col-12 col-lg-6'>
            <h4 className='categoryName'>REISGERICHTE MIT SOJASAUCE</h4>
            {SortCategory('REISGERICHTE MIT SOJASAUCE').map((item) => {
                return(
                  <Dish
                    key={item.index}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                )
              })
            }
            <Row className='priceTabels d-flex justify-content-between p-1'>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/plant-based.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Vegetarisch:</p>
                  </div>
                  <p>8.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/tofu.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Tofu:</p>
                  </div>
                  <p>9.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/chicken.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Hähnchen:</p>
                  </div>
                  <p>9.50€</p>
                </div>
              </Col>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/cow-silhouette.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Rindfleisch:</p>
                  </div>
                  <p>9.90€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/shrimp.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Garnelen:</p>
                  </div>
                  <p>11.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/duck.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Ente:</p>
                  </div>
                  <p>12.50€</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className='col-12 col-lg-6 mt-3 mt-lg-0'>
            <h4 className='categoryName'>GEBRATENER REIS</h4>
            {SortCategory('GEBRATENER REIS').map((item) => {
                return(
                  <Dish
                    key={item.index}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                )
              })
            }
            <Row className='priceTabels d-flex justify-content-between p-1'>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/plant-based.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Vegetarisch:</p>
                  </div>
                  <p>8.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/tofu.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Tofu:</p>
                  </div>
                  <p>9.50€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/chicken.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Hähnchen:</p>
                  </div>
                  <p>9.50€</p>
                </div>
              </Col>
              <Col>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/cow-silhouette.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Rindfleisch:</p>
                  </div>
                  <p>9.90€</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <img src={require('../images/icons/duck.png')} className='smallIcon m-1' alt='Icon Vegan'/>
                    <p>Ente:</p>
                  </div>
                  <p>12.50€</p>
                </div>
              </Col>
            </Row>
            <h4 className='categoryName mt-3'>SALATE</h4>
            {SortCategory('SALATE').map((item) => {
                return(
                  <Dish
                    key={item.index}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                )
              })
            }
            <Row className='extraTable p-2 position-relative pt-5 mt-5'>
              <p className='extraTitle position-absolute top-0 start-50 translate-middle'>EXTRA</p>
              <Col className='textWhite d-flex justify-content-between border-right'>
                <div>
                  <p>Gemüse</p>
                  <p>Rindfleisch</p>
                  <p>Curry Soße</p>
                </div>
                <div>
                  <p>2,50€</p>
                  <p>3,50€</p>
                  <p>3,00€</p>
                </div>
              </Col>
              <Col className='textWhite d-flex justify-content-between border-right'>
                <div>
                  <p>Tofu</p>
                  <p>Garnelen</p>
                  <p>Nüsse Cashewnüsse</p>
                </div>
                <div>
                  <p>2,50€</p>
                  <p>3,50€</p>
                  <p>3,00€</p>
                </div>
              </Col>
              <Col className='textWhite d-flex justify-content-between'>
                <div>
                  <p>Reis/Nudeln</p>
                  <p>Hähnchen</p>
                  <p>Ente</p>
                </div>
                <div>
                  <p>3,00€</p>
                  <p>3,00€</p>
                  <p>4,50€</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col className='col-12 col-lg-6'>
            <h4 className='categoryName'>NACHTISCH</h4>
            {SortCategory('NACHTISCH').map((item) => {
                return(
                  <Dish
                    key={item.index}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                )
              })
            }

            <h4 className='categoryName'> BUBBLE TEA</h4>
            <Row>
              <Col>
                <div className='bubbleTable'>
                  <div className='bubbleTableHeader p-2 position-relative'>
                    <h4>Früchte & Soda Mix</h4>
                    <p className='m-0'>5,00€</p>
                    <img 
                    className='position-absolute top-0 start-100 translate-middle'
                    style={{width: 80}}
                    src={require('../images/speisekarte/bubleTee.png')} alt='BubleTee'/>
                  </div>
                  <div className='bubbleItemsCont'>
                    <ul>
                      <li>Blueberry --- Tee/Soda</li>
                      <li>Erdbeere --- Tee/Soda</li>
                      <li>Lychee --- Tee/Soda</li>
                      <li>Pfirsich --- Tee/Soda</li>
                      <li>Kiwi --- Tee/Soda</li>
                      <li>Apfel --- Tee/Soda</li>
                      <li>Maracuja --- Tee/Soda</li>
                      <li>Kumquat Lemon --- Tee/Soda</li>
                      <li>Himbeere --- Tee/Soda</li>
                      <li>Mango --- Tee/Soda</li>
                      <li>Kirch --- Tee/Soda</li>
                      <li>Wasser Melone --- Tee/Soda</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='bubbleTable'>
                  <div className='bubbleTableHeader p-2'>
                    <h4>Milch</h4>
                    <p className='m-0'>5,50€</p>
                  </div>
                  <div className='bubbleItemsCont'>
                    <ul>
                      <li>Milsch Tee</li>
                      <li>Schokolade Milsch</li>
                      <li>Erdbeere Milch</li>
                      <li>Kokos Milch</li>
                      <li>Braun Milch</li>
                      <li>Blueberry Milch</li>
                      <li>Hale Rose Milch</li>
                      <li>Caramel Milch</li>
                      <li>Blue Coral</li>
                    </ul>
                  </div>
                </div>
                <div className='bubbleTable'>
                  <div className='bubbleTableHeader p-2'>
                    <h4>Latte</h4>
                    <p className='m-0'>5,80€</p>
                  </div>
                  <div className='bubbleItemsCont'>
                    <ul>
                      <li>Taro Latte</li>
                      <li>Mattcha Latte</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className='col-12 col-lg-6'>
            <h4 className='categoryName'>GETRÄNKE</h4>
            <Row>
              <Col>
                <div className='drinksTable'>
                  <div style={{backgroundColor: 'rgba(17, 21, 28, 0.5)'}} className='mb-3 p-2 position-relative'>
                    <p className='drinksPrice position-absolute' style={{right: 0}}>2,50€</p>
                    <ul className='textWhite'>
                      <li>Mangosaft 0,350l</li>
                      <li>Lychee Saft 0,350l</li>
                      <li>Kokos Saft 0,350l</li>
                      <li>Oishi Tea 0,5l</li>
                    </ul>
                  </div>

                  <div className='d-flex justify-content-between p-2' style={{backgroundColor: 'rgba(17, 21, 28, 0.5)'}}>
                    <div className='textWhite'>
                      <p>Espresso</p>
                      <p>Latte Macchiato</p>
                      <p>Kaffe</p>
                      <p>Frische ingwer Teekanne</p>
                      <p>Jasmin Tee Teekanne</p>
                      <p>Grüne Teekanne</p>
                    </div>
                    <div className='textWhite'>
                      <p>2,50€</p>
                      <p>3,50€</p>
                      <p>2,90€</p>
                      <p>4,50€</p>
                      <p>4,50€</p>
                      <p>4,50€</p>
                    </div>
                    
                  </div>
                  <div className='d-flex justify-content-between p-2 position-relative mt-3' style={{backgroundColor: 'rgba(17, 21, 28, 0.5)'}}>
                    <p className='drinksPrice position-absolute' style={{right: 0, top: 0}}>1,90€</p>
                    <ul className='textWhite'>
                      <li>Mineralwassel naturell 0,5l</li>
                      <li>Mineralwassel er spritzing 0,5l</li>
                      <li>Cola/Cola light 0,3l</li>
                      <li>Spezi 0,3l</li>
                      <li>Fanta 0,3l</li>
                    </ul>
                  </div>
                  <div className='d-flex justify-content-between p-2 position-relative mt-3' style={{backgroundColor: 'rgba(17, 21, 28, 0.5)'}}>
                    <ul className='textWhite'>
                      <li>Chang Bier (0,32l 5% vol.)</li>
                      <li>Singha Bier (0,32l 5% vol.)</li>
                      <li>AugustinBier (0,5l 5.2% vol.)</li>
                    </ul>

                    <ul className='textWhite'>
                      <li>2,90€</li>
                      <li>3,20€</li>
                      <li>3,20€</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
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

export default Speisekarte
