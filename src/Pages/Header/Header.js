import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Banner from './Banner/Banner';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    // AuthState and signOut function
    const [user, loading, error] = useAuthState(auth);
    // console.log(user);
    // console.log(user?.email);
    const [signOut, SignOutLoading, SignOutError] = useSignOut(auth);
    
    // if(loading) {
    //     return <p>Loading..</p>
    // }
    // Scroll handler to target element
    const scrollHandler = () => {
        const element = document.getElementById('navlink-container');
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
                            <Nav.Link onClick={scrollHandler} as={Link} to="/foodcart" className='me-3'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Nav.Link>
                            {user ? <Button onClick={() => signOut()} className='btn btn-danger me-3 fw-semibold border-0 rounded-pill px-4'>Log Out</Button> 
                            : 
                            <Nav.Link as={Link} onClick={scrollHandler} className='fw-bold me-3' to={"/login"}>Login</Nav.Link>}
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