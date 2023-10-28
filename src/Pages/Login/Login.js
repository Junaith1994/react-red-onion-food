import React from 'react';

const Login = ({ clicked }) => {
    return (
        <div className={clicked ? 'd-block banner-img text-center my-4' : 'd-none'}>
            <h1>Login page</h1>
        </div>
    );
};

export default Login;