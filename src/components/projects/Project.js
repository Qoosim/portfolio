import React from "react";
import { Badge, Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data";
import { motion } from "framer-motion";

const Project = () => {
  const [readMore] = React.useState(false);

  
  return (
    <Container style={{backgroundColor: '#1f2937', minHeight: '100vh'}} fluid>
      <Row xs={1} md={2} lg={3} className="mt-5 py-5 g-4">
        {projects.map((project) => {
          const { id, name, github, live, image, tech, desc } = project;
          return (
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
                  <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.9 }}>
                    <div>
                      <Button 
                        variant="warning"
                        className="font-mont fw-bold py-1"
                        style={{width: '100%'}}
                      >
                        See Project
                      </Button>
                    </div>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Project;
/**
<Row xs="auto" className="mx-0 mb-2">
{langs.map((lang) => (
  <Badge
    key={lang}
    bg="light"
    text="dark"
    className="border border-dark me-2"
  >
    {lang}
  </Badge>
))}
</Row>
*/
