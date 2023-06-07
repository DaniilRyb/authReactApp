import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../components/SignUp";

const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <SignUp/>
            <p>
                Already have an account?: <Link to="/login">Sign In</Link>
            </p>
        </div>
    );
};

export default RegisterPage;