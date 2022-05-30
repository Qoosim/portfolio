import React from 'react';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => (
  <Container
    id="contact"
    as="section"
    className="min-vh-100 py-5 d-flex flex-column justify-content-center align-items-center"
  >
    <Row>
      
      <motion.h3 
        className="text-4xl font-source bold py-1" style={{color: 'orange'}}
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Contact me
      </motion.h3>
      <Col md={6}>
        <motion.div
          className="text-xl text-gray-400 font-source font-semibold"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          If you have an application you are interested in developing, a feature that you need to build or a project that needs coding. Let's work together to make it happen!.
        </motion.div>
        <motion.div 
          className="d-flex space-x-5 mt-2 mb-4 lg:mb-0"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <FaGithub className="text-xl text-yellow-500 cursor-pointer" />
          <FaLinkedinIn className="text-xl text-yellow-500 cursor-pointer" />
          <FaTwitter className="text-xl text-yellow-500 cursor-pointer" />
        </motion.div>
      </Col>
      <Col md={6}>
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Form action="https://formspree.io/f/meqvpkyg" method="post">
            <Form.Control
              type="text"
              name="name"
              placeholder="Full name"
              className="mb-3 py-2 border-0 border-bottom"
              required
            />
            <Form.Control
              type="email"
              name="email"
              placeholder="Email address"
              className="mb-3 py-2 border-0 border-bottom"
              required
            />
            <Form.Control
              as="textarea"
              name="msg"
              rows={3}
              placeholder="Message"
              className="mb-4 py-2 border-0 border-bottom"
              required
            />
              <motion.button 
              whileHover={{ scale: 0.9}}
              >
                <Button 
                  variant="warning"
                  type="submit" 
                  size="lg" 
                  className="fw-bold border-0 text-center"
                >
                  Get in touch
                </Button>
              </motion.button>
          </Form>
        </motion.div>
      </Col>
    </Row>
  </Container>
)

export default Contact;
