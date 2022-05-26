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
import Contact from './components/contact/Contact';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container style={{height: '100%', backgroundColor: '#1f2937'}} fluid>
        <Router >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </Container>
  );
}

export default App;
