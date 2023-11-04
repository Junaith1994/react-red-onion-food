import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // const [signInError, setSignInError] = useState('');
    let navigate = useNavigate();
    let location = useLocation();

    let from = location?.state?.from?.pathname || '/';

    // Firebase authentication custom hook
    const [
        signInWithEmailAndPassword,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Form submit handler
    const formSubmitHandler = event => {
        event.preventDefault();
        // const form = event.target;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // User sign-in with email & password
        signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user);
                user && toast("Sign-in Successful !");
                user && navigate(from, { replace: true });
            })
    }

    return (
        <div className='text-center my-4 row w-100'>
            <div className='mx-auto col-6 col-md-3 container'>
                <div className='p-2 my-5 text-center'>
                    <img className='w-50' src="https://i.ibb.co/Qjq89Gr/logo2.png" alt="Icon" />
                </div>
                <Form onSubmit={formSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='p-3 shadow-sm' ref={emailRef} type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='p-3 shadow-sm' ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-100 sign-up-btn border-0' variant="primary" type="submit">
                        Sign-In
                    </Button>
                </Form>
                <p className='text-danger fw-semibold text-center'>{error?.message}</p>
                <ToastContainer></ToastContainer>
                <div className='my-3 text-center'>
                    <span style={{ "color": "crimson" }} className='fw-semibold'>Don't have an account :</span> <NavLink as={Link} to='/signup'>Sign-up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;