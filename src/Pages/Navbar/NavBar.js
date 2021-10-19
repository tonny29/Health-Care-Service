import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="btn-style">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="nav-area">
                    <Navbar.Brand href="/home"><img alt=""src="https://w7.pngwing.com/pngs/957/974/png-transparent-hospital-logo-clinic-health-care-physician-business-thumbnail.png"
                       />CENTRAL HOSPITAL</Navbar.Brand>
                    <Nav className="me-auto">
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                    
                    </Navbar.Collapse>
                </Container>
             </Navbar>
        </div>
    );
};

export default NavBar;