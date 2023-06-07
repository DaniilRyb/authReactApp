import React from 'react';
import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Form from "./Form";
import {setUser} from "../store/slice/userSlice";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate();
    const handleClick = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user", user);
                console.log(user.accessToken);
                dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken
                    }
                ))
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return (
        <Form title={"sign up"} handleClick={handleClick}/>
    );
};

export default SignUp;