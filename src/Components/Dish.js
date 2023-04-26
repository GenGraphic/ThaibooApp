import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Dish.css'

const Dish = ({name, description, price, image}) => {

  
  return (
    <Container>
        <Row>
            <Col>
                <h4 className='dishTitle'>{name}</h4>
                <p className='dishDescription' style={{fontWeight: 600}}>{description}</p>
                <p className='dishPrice'>{price[0].Normal}</p>
                {price.length >= 2 &&
                  <div className='priceTable p-2 '>
                    {price.map((item) => {
                      return (
                        <div className='d-flex ml-5 justify-content-between flex-fill textWhite'>
                          <div className='d-flex'>
                            <img src={item.icon} className='smallIcon' alt='Icon'/>
                            <p className='m-0 pl-2'>{Object.getOwnPropertyNames(item)[0]}</p>
                          </div>
                          <p className='m-0'>{Object.values(item)[0]}</p>
                        </div>
                      )
                    })
                    }
                  </div>
                }
            </Col>

            {image &&
              <Col className='col text-end'>
                <img src={image} alt='Gericht' style={{width: '50%'}}/>
              </Col>
            }
           
        </Row>
    </Container>
  )
}

export default Dish
