import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // Firebase authentication custom hook
    const { signInWithEmailAndPassword, signedInUser, signInError } = useFirebaseAuth();
    // console.log(signInError?.message);
    // console.log(error);
    console.log(signedInUser);

    // Form submit handler
    const formSubmitHandler = event => {
        event.preventDefault();
        const form = event.target;
        emailRef.current = form.email.value;
        passwordRef.current = form.password.value;

        // User sign-in with email & password
        setError('');
        setSuccessMsg('');
        signInWithEmailAndPassword(emailRef.current, passwordRef.current);
        signedInUser && setSuccessMsg('Sign-In successfully !');
        signInError?.message && setError(signInError?.message);

    }


    return (
        <div className='text-center my-4'>
            <div className='mx-auto w-25'>
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
                    <Button className='w-100 sign-up-btn border-0' variant="primary" type="submit">
                        Sign-In
                    </Button>
                </Form>
                <p className='text-danger fw-semibold text-center'>{error}</p>
                <p className='text-success fw-semibold text-center'>{successMsg}</p>
                <div className='my-3 text-center'>
                    <span style={{ "color": "crimson" }} className='fw-semibold'>Don't have an account :</span> <NavLink as={Link} to='/signup'>Sign-up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;