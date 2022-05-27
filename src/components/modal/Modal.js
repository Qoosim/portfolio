import React from 'react';
import { Badge, Button, ButtonGroup, Image, Row } from 'react-bootstrap';
import projects from '../../data';

const Modal = () => {
    const [show, setShow] = React.useState(false);
    const [modalIndex, setModalIndex] = React.useState(0);

    const closeModal = () => {
        setShow(false);
    }

    const openModal = (i) => {
        setShow(true);
        setModalIndex(i);
    }

    return (
        <>
            <Modal show={show} onHide={closeModal} size="lg" centered>
                <Modal.Header closeButton>
                  <Modal.Title>{projects[modalIndex].name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row xs="auto" className="mx-0 mb-2">
                    {projects[modalIndex].tech.map((lang) => (
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
                  <Image src={projects[modalIndex].image} fluid />
                  <p className="my-2">{projects[modalIndex].desc}</p>
                  <ButtonGroup className="w-100">
                    <Button
                      as="a"
                      className="fw-bold border-dark"
                      href={projects[modalIndex].live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </Button>
                    <Button
                      as="a"
                      className="fw-bold border-dark"
                      href={projects[modalIndex].github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source Code
                    </Button>
                  </ButtonGroup>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Modal;
