import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/auth/login'>login</Link>
            <Link to='/auth/register'>register</Link>
        </div>
    );
};

export default SignUp;