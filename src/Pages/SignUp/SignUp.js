import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPassRef = useRef('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // Firebase Authentication custom hook
    const { createUserWithEmailAndPassword, user } = useFirebaseAuth();
    console.log(user);

    // Form submit handler
    const formSubmitHandler = event => {
        event.preventDefault();
        const form = event.target;
        // nameRef.current = form.name.value;
        emailRef.current = form.email.value;
        passwordRef.current = form.password.value;
        confirmPassRef.current = form.confirmPassword.value;

        // Creating user account with email & password
        setError('');
        setSuccessMsg('');
        passwordRef.current === confirmPassRef.current ? createUserWithEmailAndPassword(emailRef.current, passwordRef.current) : setError("Passwords are not matched");
        setSuccessMsg('Account created successfully !')
        
    }

    return (
        <div className='mx-auto my-3 w-25'>
            <div className='p-2 my-5 text-center'>
                <img className='w-50' src="https://i.ibb.co/Qjq89Gr/logo2.png" alt="Icon" />
            </div>
            <Form onSubmit={formSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='p-3 shadow-sm' name='email' type="email" placeholder="Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='p-3 shadow-sm' name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control className='p-3 shadow-sm' name='confirmPassword' type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button className='w-100 sign-up-btn border-0' variant="primary" type="submit">
                    Sign-Up
                </Button>
            </Form>
            <p className='text-danger fw-semibold text-center'>{error}</p>
            <p className='text-success fw-semibold text-center'>{successMsg}</p>
            <div className='my-3 text-center'>
                <span style={{ "color": "crimson" }} className='fw-semibold'>Already have an account?</span> <NavLink as={Link} to='/login'>Sign-in</NavLink>
            </div>
        </div>
    );
};

export default SignUp;