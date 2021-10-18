import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavLink } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="header-area">
             <Navbar bg="dark" variant="dark">
                <Container className="nav-area">
                    <Navbar.Brand href="/home"><img alt=""src="https://w7.pngwing.com/pngs/957/974/png-transparent-hospital-logo-clinic-health-care-physician-business-thumbnail.png"
                       />CENTRAL HOSPITAL</Navbar.Brand>
                    <Nav className="me-auto">
                    <NavLink href="/home">Home</NavLink>
                    <NavLink href="/features">Services</NavLink>
                    <NavLink href="/pricing">About Us</NavLink>
                    <NavLink href="/pricing">Contact</NavLink>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl type="search" placeholder="Search From Here" className="mr-2 mx-2"
                        aria-label="Search"
                    />{' '}
                    <Button>Search</Button>
                    </Form>
                </Container>
             </Navbar>
             <div className="hospital-banner">
                <img src="https://i.pinimg.com/originals/1f/7f/dd/1f7fdd78b67bf83cdb0ad02915b8b410.jpg" alt="" width="100%" height="600px"/>
                <div className="banner-text">
                    <h1>CENTRAL HOSPITAL</h1>
                    <p>Our hospital benefits are insurance benefits that provide coverage for expenses associated with visiting a hospital for health care. <br /> These expenses can include things like room and board, medical treatments, medical supplies, etc. <br /> Without hospital benefits, hospital visits are extremely expensive.We provide care that is respectful of the patient's needs <br /> and preferences, and allow the values to guide care decisions, is a cornerstone of high-quality healthcare <br /> Safe. Healthcare providers have prioritize our patient's safety in every interaction</p>
                    <button>About More</button>{' '}
                    <button>Contact Us</button>
                </div>
           </div>
        </div>
    );
};

export default Header;