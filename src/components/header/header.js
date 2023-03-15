import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css"



const Header = () => {
    return (
        <Navbar bg="success" expand="lg" id="navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="nav_action" id="logoHeader">PLANTZZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav_action" >Home</Nav.Link>
            <Nav.Link href="#action2" className="nav_action">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" className="nav_action"  variant="info">
              <NavDropdown.Item href="#action3"  variant="outline-success">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4" variant="outline-success" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"  bg="dark">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="#action1" className="nav_action" >Sign up</Nav.Link>
            <Nav.Link href="#action2" className="nav_action">Sign in</Nav.Link>
          </Nav>
           
         
        </Navbar.Collapse>
      </Container>
    </Navbar>     
        
    );
}

export default Header;