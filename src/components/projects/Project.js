import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data";

const Project = () => {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
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
                  <Button variant="primary" className="bg-dark">
                    <a href={live} className="text-white">
                      <FaGithub />
                    </a>
                  </Button>
                  <Button variant="secondary">Live</Button>
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
