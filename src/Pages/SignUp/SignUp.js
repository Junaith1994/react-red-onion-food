import React from 'react';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
    return (
        <div className='mx-auto w-25'>
            <div className='p-2 my-5 text-center'>
                <img className='w-50' src="https://i.ibb.co/Qjq89Gr/logo2.png" alt="Icon image" />
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100 sign-up-btn border-0' variant="primary" type="submit">
                    Sign-Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;