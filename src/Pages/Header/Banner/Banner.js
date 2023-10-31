import React from 'react';
import './Banner.css';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Login from '../../Login/Login';
import SignUp from '../../SignUp/SignUp';

const Banner = () => {
    return (
        <div className='row w-100'>
            <div className='banner-img col-md-12'>
                <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                    <h1 className=''>Best Food Waiting For Your Stomach !!</h1>
                    <div className=''>
                        <InputGroup>
                            <Form.Control
                                placeholder="Search Your Food"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="rounded-pill px-4"
                            />
                            <Button className='sign-up-btn border border-0 rounded-pill px-4' id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </div>
                </div>
                {/* <Login loginClicked={loginClicked}></Login>
                <SignUp signUpClicked={signUpClicked}></SignUp> */}
            </div>
        </div>

    );
};

export default Banner;