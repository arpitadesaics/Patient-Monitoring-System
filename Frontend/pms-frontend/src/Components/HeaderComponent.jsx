// src/components/HeaderComponent.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const HeaderComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Patient Monitoring System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/patient">Patients List</Nav.Link>
            <Nav.Link href="/Analysis">Analysis & Report</Nav.Link>
{/*             <Nav.Link href="/Reports">Reports</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
