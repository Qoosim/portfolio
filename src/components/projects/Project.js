import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data";

const Project = () => {
  const [readMore] = React.useState(false);

  return (
    <Container style={{backgroundColor: '#1f2937', minHeight: '100vh'}}>
      <Row xs={1} md={2} lg={3} className="mt-5 py-5 g-4">
        {projects.map((project) => {
          const { id, name, github, live, image, tech, desc } = project;
          return (
            <Col>
              <Card style={{ width: "22rem" }} className="mx-auto" key={id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    {readMore ? desc : desc.slice(0, 100)}
                    <button>{readMore ? " Read Less" : " Read More"}</button>
                  </Card.Text>
                  <Card.Text>
                    <div className="d-flex">
                        {tech.map((lang, index) => {
                            return (
                                <ul className="pl-0" key={index}>
                                    <li className="pr-5">{lang}</li>
                                </ul>
                            )
                        })}
                    </div>
                  </Card.Text>
                  <Button variant="primary" className="bg-dark">
                    <a href={github} className="text-white">
                      <FaGithub />
                    </a>
                  </Button>
                  <Button variant="secondary"><a href={live}>Live</a></Button>
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
