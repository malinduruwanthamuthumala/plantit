import React from "react";
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css"



const Header = () => {
    return (
        <Navbar bg="success" expand="lg" id="navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="nav_action" id="logoHeader">BloomBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="nav_action" >Home</Nav.Link>
            <Nav.Link href="#action2" className="nav_action">Buy Online</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown" className="nav_action"  variant="info">
              <NavDropdown.Item href="#action3"  variant="outline-success">Indoor Designing</NavDropdown.Item>
              <NavDropdown.Item href="#action4" variant="outline-success" >
                Wedding Events
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"  bg="dark">
                Flora Subscriptions 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="/login" className="nav_action" >Become a seller</Nav.Link>
            <Nav.Link href="/register" className="nav_action">login</Nav.Link>
          </Nav>
           
         
        </Navbar.Collapse>
      </Container>
    </Navbar>     
        
    );
}

export default Header;