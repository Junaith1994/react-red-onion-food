import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div id='login' className='text-center my-4'>
            <div className='mx-auto w-25'>
                <div className='p-2 my-5 text-center'>
                    <img className='w-50' src="https://i.ibb.co/Qjq89Gr/logo2.png" alt="Icon" />
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='p-3 shadow-sm' name='email' type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='p-3 shadow-sm' name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-100 sign-up-btn border-0' variant="primary" type="submit">
                        Sign-In
                    </Button>
                </Form>
                {/* <p className='text-danger fw-semibold text-center'>{error}</p>
            <p className='text-success fw-semibold text-center'>{successMsg}</p> */}
                <div className='my-3 text-center'>
                    <span style={{ "color": "crimson" }} className='fw-semibold'>Don't have an account :</span> <NavLink as={Link} to='/signup'>Sign-up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;