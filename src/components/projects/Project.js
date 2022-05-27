import React from "react";
import { Badge, Button, ButtonGroup, Container, Row, Col, Card, Modal, Image } from "react-bootstrap";
// import { FaGithub } from "react-icons/fa";
import { projects } from "../../data";
import { motion } from "framer-motion";

const Project = () => {
  const [readMore] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const closeModal = () => {
    setShow(false);
  }

  const openModal = (i) => {
    setShow(true);
    setIndex(i)
  }

  return (
    <>
      <Container style={{backgroundColor: '#1f2937', minHeight: '100vh'}} fluid>
        <Row xs={1} md={2} lg={3} className="mt-5 py-5 g-4">
          {projects.map((project, i) => {
            const { id, name, image, tech, desc } = project;
            return i !== 0 ? (
              <Col>
                <Card style={{ width: "26rem", height: '100%' }} className="mx-auto" key={id}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <Card.Text>
                      {readMore ? desc : desc.slice(0, 100)}
                      <button>{readMore ? " Read Less" : " Read More"}</button>
                    </Card.Text>
                    <Card.Text>
                      <div xs="auto">
                         {tech.map((lang) => (
                            <Badge
                              key={lang}
                              bg="secondary"
                              text="light"
                              className="me-2"
                            >
                              {lang}
                            </Badge>
                          ))}
                      </div>
                    </Card.Text>
                    <motion.div whileHover={{ scale: 0.9 }}>
                      <div>
                        <Button 
                          variant="warning"
                          className="font-mont fw-bold py-1"
                          style={{width: '100%'}}
                          onClick={() => openModal(i)}
                        >
                          See Project
                        </Button>
                      </div>
                    </motion.div>
                  </Card.Body>
                </Card>
              </Col>
            ) : '';
          })}
        </Row>
      </Container>
      <Modal show={show} onHide={closeModal} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>{projects[index].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row xs="auto" className="mx-0 mb-2">
            {projects[index].tech.map((lang) => (
              <Badge
                key={lang}
                bg="light"
                text="dark"
                className="border border-dark me-2 mb-1"
              >
                {lang}
              </Badge>
            ))}
          </Row>
          <Image src={projects[index].image} fluid />
          <p className="my-2">{projects[index].desc}</p>
          <ButtonGroup className="w-100">
            <motion.div whileHover={{ scale: 0.9 }}>
              <div>
                <Button
                  as="a"
                  variant="warning"
                  className="fw-bold border-dark"
                  style={{width: '100%'}}
                  href={projects[index].live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </Button>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 0.9}}>
              <div>
                <Button
                  as="a"
                  variant="warning"
                  className="fw-bold border-dark"
                  style={{width: '100%'}}
                  href={projects[index].github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </Button>
              </div>
            </motion.div>
          </ButtonGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project;
