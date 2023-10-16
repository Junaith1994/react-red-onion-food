import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div>
            <Navbar className='mt-5' data-bs-theme="light">
                <Container className=''>
                    <Nav className="mx-auto route-link">
                        <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to="/breakfast">Breakfast</NavLink>
                        <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to="/lunch">Lunch</NavLink>
                        <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to="/dinner">Dinner</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;