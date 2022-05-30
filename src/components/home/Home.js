import React from 'react';
import { text } from '../../text';
import Img from '../../assets/alaje.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

const Home = () => {

  return (
      <Container style={{minHeight: '100vh'}}>
        <Row className="pt-32">
            <Col xs ="auto" lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-gray-100 text-4xl font-mont font-bold mb-4">
                  <Typewriter 
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings:[
                        "Qoosim AbdulGhaniyy.",
                        "A front-end developer.",
                        "A tech enthusiast."
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
                <Button 
                  className="btn btn-warning btn-sm  px-4 rounded capitalize font-mont"
                  as="a"
                  href="https://docs.google.com/document/d/1v7TVSDeJyohOOrMwM085jqQUe_3DFpZfnnBk99_78Ek/edit?usp=sharing"
                  target="_blank"
                >
                  resume
                </Button>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center items-center">
                  <img src={Img} alt="QoosimDev" className="d-none d-lg-flex w-72" />
                </div>
              </motion.div>
            </Col>
        </Row>
      </Container>
  )
}

export default Home;
