import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Banner from './Banner/Banner';

const Header = () => {
    /* // States for signup, login and banner section Toggling
    const [loginClicked, setLoginClicked] = useState(false);
    const [signUpClicked, setSignUpClicked] = useState(false);
    const [bannerClicked, setBannerClicked] = useState(true);
    
    // Login toggle handler
    const loginToggle = () => {
        if(!loginClicked) {
            setLoginClicked(true);
            setSignUpClicked(false);
            setBannerClicked(false);
        }
        else {
            setLoginClicked(false);
            setSignUpClicked(false);
            setBannerClicked(true);
        }
    };
    // Signup toggle handler
    const signUpToggle = () => {
        if(!signUpClicked) {
            setSignUpClicked(true);
            setBannerClicked(false);
            setLoginClicked(false);
        }
        else {
            setSignUpClicked(false)
            setLoginClicked(false);
            setBannerClicked(true);
        }
    }
 */

    // Scroll handler to target element
    const scrollHandler = id => {
        const element = document.getElementById(id);
        if(element) {
            element.scrollIntoView({behavior: 'instant'});
        }
        
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-white">
                <Container>
                    <Navbar.Brand as={Link} to="/breakfast"><img width={'120px'} src="https://i.ibb.co/Qjq89Gr/logo2.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to="/foodcart" className='me-3'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Nav.Link>
                            <Nav.Link as={Link} onClick={() => scrollHandler('login')} className='fw-bold me-3' to={"/login"}>Login</Nav.Link>
                            <Button as={Link} onClick={() => scrollHandler('signup')} to="/signup" className='sign-up-btn border border-0 rounded-pill px-4'>Sign up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;