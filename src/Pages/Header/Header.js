import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Banner from './Banner/Banner';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-white">
                <Container>
                    <Navbar.Brand as={Link} to="/breakfast"><img width={'120px'} src="/public/images/logo2.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to="#deets" className='me-3'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Nav.Link>
                            <Nav.Link className='fw-bold me-3' as={Link} to="/login">Login</Nav.Link>
                            <Button className='sign-up-btn border border-0 rounded-pill px-4'>Sign up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;