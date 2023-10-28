import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Banner from './Banner/Banner';
import Login from '../Login/Login';

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const toggleHandler = () => setIsClicked(!isClicked);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-white">
                <Container>
                    <Navbar.Brand as={Link} to="/breakfast"><img width={'120px'} src="https://i.ibb.co/Qjq89Gr/logo2.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to="/foodcart" className='me-3'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Nav.Link>
                            <Nav.Link onClick={toggleHandler} className='fw-bold me-3' as={Link} to="/login">Login</Nav.Link>
                            <Button as={Link} to="/signup" className='sign-up-btn border border-0 rounded-pill px-4'>Sign up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Banner></Banner>
            <Login clicked={isClicked}></Login>
        </div>
    );
};

export default Header;