import React from 'react';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import { motion } from "framer-motion";

const Contact = () => (
  <Container
    fluid
    id="contact"
    as="section"
    className="min-vh-100 py-5 d-flex flex-column justify-content-center align-items-center"
  >
    <Row>
      <h3 className="text-white text-center text-4xl font-source bold text-orange-400 py-4">Contact me</h3>
      <Col>
        <motion.div
          className="text-center text-md-start text-2xl text-gray-400 font-source font-semibold"
          initial={{ opacity: 0, x: -500 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          If you have an application you are interested in developing, a feature that you need to build or a project that needs coding. Let's work together to make it happen!.
        </motion.div>
      </Col>
      <Col >
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
            <div className="d-flex justify-content-center">
              <Button type="submit" size="lg" className="bg-custom1 fw-bold border-0">
                Get in touch
              </Button>
            </div>
          </Form>
        </motion.div>
      </Col>
    </Row>
  </Container>
)

export default Contact;
