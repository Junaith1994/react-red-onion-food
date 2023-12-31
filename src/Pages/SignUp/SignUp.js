import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPassRef = useRef('');
    const [signUpError, setSignUpError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();

    // Firebase Authentication custom hook
    const { createUserWithEmailAndPassword, user, error } = useFirebaseAuth();
    console.log(user);
    console.log(error);

    // Form submit handler
    const formSubmitHandler = event => {
        event.preventDefault();
        const form = event.target;
        emailRef.current = form.email.value;
        passwordRef.current = form.password.value;
        confirmPassRef.current = form.confirmPassword.value;

        // Creating user account with email & password with error handling
        setSignUpError('');
        setSuccessMsg('');
        passwordRef.current === confirmPassRef.current ? createUserWithEmailAndPassword(emailRef.current, passwordRef.current)
            .then(() => {
                setSuccessMsg("Account created successfully !");
            })
            .catch(() => setSignUpError(error?.message))
            : setSignUpError("Passwords are not matching !");
        // Navigating user to the root path
        navigate("/");
    };

    return (
        <div className='text-center my-4 row w-100'>
            <div className='mx-auto col-9 col-md-3 container'>
                <div className='p-2 my-5 text-center'>
                    <img className='w-50' src="https://i.ibb.co/Qjq89Gr/logo2.png" alt="Icon" />
                </div>
                <Form onSubmit={formSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicSignUpEmail">
                        <Form.Control className='p-3 shadow-sm' name='email' type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSignUpPassword">
                        <Form.Control className='p-3 shadow-sm' name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSignUpConfirmPassword">
                        <Form.Control className='p-3 shadow-sm' name='confirmPassword' type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Button className='w-100 sign-up-btn border-0' variant="primary" type="submit">
                        Sign-Up
                    </Button>
                </Form>
                <p className='text-danger fw-semibold text-center'>{signUpError}</p>
                <p className='text-success fw-semibold text-center'>{successMsg}</p>
                <div className='my-3 text-center'>
                    <span style={{ "color": "crimson" }} className='fw-semibold'>Already have an account?</span> <NavLink as={Link} to='/login'>Sign-in</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SignUp;