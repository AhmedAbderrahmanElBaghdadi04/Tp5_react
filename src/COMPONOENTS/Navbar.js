import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App3.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../COMPONOENTS/imgs/favicon.ico';
import { Row, Col } from 'react-bootstrap';
import './bootstrap/css/bootstrap.min.css'

export default function Navbar1() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const switchTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
    document.body.classList.toggle('dark_theme');
  };

  return (
    <>
      <Navbar bg={isDarkTheme ? 'dark' : 'light'} variant={isDarkTheme ? 'dark' : 'light'} expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/' >
            <img src={Logo} alt="" as={Link} to="/" className="d-flex justify-content-space-between align-items-center"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/TP1'>Calculator</Nav.Link>
              <Nav.Link as={Link} to="/TP2">Slider</Nav.Link>
              <Nav.Link as={Link} to="/TP3">ToDoList</Nav.Link>
              <Nav.Link as={Link} to="/TP4">API</Nav.Link>
              <Nav.Link as={Link} to="/">Language</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={switchTheme} className='{dark_theme?dark:light}'>DARK/LIGHT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
