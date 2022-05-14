import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data';

const Project = () => {
  return (
    <Container>
      <Row>
        {
          projects.map((project) => {
            const { id, name, github, live, image, tech, desc } = project;
            return (
              <Col key={id}>
                <Card style={{ width: '20rem' }} className="mx-auto">
                  <Card.Img variant="top" src={`${image}"/100px180`} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      {desc}
                    </Card.Text>
                    <Button variant="primary" className="bg-dark">
                      <a href={live} className="text-white"><FaGithub /></a>
                    </Button>
                    <Button variant="secondary">Live</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default Project;
