import React from 'react';
import { social } from '../../links';
import { text } from '../../text';
import Img from '../../assets/alaje.png';
import {  Container, Row, Col } from 'react-bootstrap';

const Home = () => {

  return (
    <Container style={{paddingTop: '70px'}}>
      <Row>
        <Col xs ="auto" lg={6}>
          <h2 className="text-gray-100 text-4xl font-mont font-bold mb-4">Qoosim AbdulGhaniyy</h2>
          <div>
            {text.map((para, index) => {
              return (
                <p
                  key={index}
                  className="text-gray-400 font-source mb-6 font-semibold"
                >
                  {para}
                </p>
              )
            })}
          </div>
          <button 
            className="btn btn-warning btn-sm  px-4 rounded capitalize font-mont"
            type="button"
          >
            resume
          </button>
        </Col>
        <Col lg={6}>
          <div className="flex justify-center items-center">
            <img src={Img} alt="QoosimDev" className="d-none d-lg-flex w-72" />
          </div>
        </Col>
      </Row>
      <div></div>
    </Container>
  )
}

export default Home;

/**
*/
