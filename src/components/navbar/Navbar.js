import React from 'react';
import { links } from '../../links';
import { social } from '../../links';
import { FaBars } from "react-icons/fa";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [click, setClick] = React.useState(false);
    
    const style = {
        link: {
        textTransform: "capitalize",
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#BDBDBD',
        },
        menu: {
          color: '#BDBDBD',
        },
        headerSpan: {
          color: '#FFC400',
        },
        social: {
          color: 'white',
          fontSize: '20px',
        }
    }

  return (
    <>
     <Navbar bg="dark" expand="lg" fixed="top" expanded={click}>
        <Container>
          <Navbar.Brand
            href="#home"
            className="text-white"
          >
            Qoosim <span style={style.headerSpan}>AbdulGhaniyy</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setClick(click ? false : 'click')}>
            <FaBars style={style.menu} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="text-white">
            <Nav className="ms-auto" bg="primary">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <Nav.Link
                    as={NavLink}
                    to={url}
                    key={id}
                    style={style.link}
                    onClick={() => setClick(false)}
                  >
                    {text}
                  </Nav.Link>
                )
              })}
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <Nav.Link
                    key={id}
                    onClick={url}
                    style={style.social}
                    className="d-none d-lg-flex"
                  >
                    {icon}
                  </Nav.Link>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;

