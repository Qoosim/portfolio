import React from 'react';
import {                                                                                                    BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Project from './components/projects/Project';
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Contact from './components/contact/Contact';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container style={{height: '100vh'}}>
      <div className="bg-gray-800" style={{height: '100%'}}>
        <Router >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
      </div>
      </Container>
  );
}

export default App;
