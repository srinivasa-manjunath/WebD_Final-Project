import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Logo from '../images/logo2.jpg';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={Logo} alt="Paradise Gaming Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/guides">Guides</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/wallpapers">Wallpapers</Nav.Link>
            <Nav.Link href="/aboutus">AboutUs</Nav.Link>
            <Nav.Link href="/contactus">ContactUs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              <Button variant="outline-primary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
