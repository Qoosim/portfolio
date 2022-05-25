import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {
  SiJavascript, SiCss3,
  SiRedux, SiTailwindcss,
  SiGitlab, SiJest,
  SiWebpack, SiHeroku,
  SiNetlify
} from 'react-icons/si';
import { FaHtml5, FaReact, FaBootstrap, FaGithub } from 'react-icons/fa';

const About = () => {

  return (
      <Row xs={1} md={2} className="flex g-5" style={{paddingTop: '5rem'}}>
        <Col>
          <Card className="" style={{background: '#1F2937'}}>
            <Card.Body>
              <Card.Title className="text-capitalize text-white font-mont font-bolder fs-2">about me</Card.Title>
              <Card.Text style={{color: 'rgba(255, 255, 255, 0.6)'}} className="font-source">
                I am a front-end Developer. My professional experience includes bringing the wireframes of the UX designer to life through HTML5, CSS3, BOOTSTRAP, REACT/REDUX. I communicate fluently, multitask and collaborate effectively with teams. While I have been privileged to see some projects and tasks through successful completion and deployment, I am currently looking for a position as a front-end developer in a unique organization with growth opportunities where my skills and abilities can be fully harnessed and sharpened.
              </Card.Text>
              <button className="bg-yellow-400 px-2 py-2 rounded-md font-mont hover:font-bold hover:bg-yellow-300 capitalize">get my resume</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <h3 className="capitalize text-white font-mont">languages</h3>
            <ul className="d-flex space-x-7 list-unstyled">
              <li>
                <SiJavascript style={{color: 'yellow', fontSize: '30px'}} />
              </li>
              <li>
                <FaHtml5 style={{color: 'orange', fontSize: '30px'}} />
              </li>
              <li>
                <SiCss3  style={{color: 'lightblue', fontSize: '30px'}} />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="capitalize text-white font-mont">frameworks</h3>
            <ul className="d-flex space-x-7 list-unstyled">
              <li>
                <FaReact style={{color: 'blue', fontSize: '30px'}} />
              </li>
              <li>
                <SiRedux style={{color: 'purple', fontSize: '30px'}} />
              </li>
              <li>
                <FaBootstrap  style={{color: 'white', background: 'purple', fontSize: '40px'}} />
              </li>
              <li>
                <SiTailwindcss  style={{color: 'cyan', fontSize: '30px'}} />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="capitalize text-white font-mont">others</h3>
            <ul className="d-flex space-x-7 list-unstyled">
              <li>
                <FaGithub style={{color: 'white', fontSize: '30px'}} />
              </li>
              <li>
                <SiGitlab style={{color: 'orange', fontSize: '30px'}} />
              </li>
              <li>
                <SiJest  style={{color: 'red', fontSize: '30px'}} />
              </li>
              <li>
                <SiWebpack  style={{color: 'lightblue', fontSize: '30px'}} />
              </li>
              <li>
                <SiHeroku  style={{color: 'purple', fontSize: '30px'}} />
              </li>
              <li>
                <SiNetlify  style={{color: 'skyblue', fontSize: '30px'}} />
              </li>
            </ul>
          </div>
        </Col>
      </Row>
  )
}

export default About;

