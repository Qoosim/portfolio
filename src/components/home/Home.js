import React from 'react';
import { text } from '../../text';
import Img from '../../assets/alaje.png';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const Home = () => {

  return (
      <Container style={{minHeight: '100vh'}}>
        <Row className="pt-32">
            <Col xs ="auto" lg={6}>
              <h2 className="text-gray-100 text-4xl font-mont font-bold mb-4">
                <Typewriter 
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings:[
                      "Qoosim AbdulGhaniyy",
                      "A front-end developer",
                      "A tech enthusiast"
                    ]
                  }}
                />
              </h2>
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
      </Container>
  )
}

export default Home;

/**
*/
