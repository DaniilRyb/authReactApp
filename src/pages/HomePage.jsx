import React from 'react';
import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slice/userSlice";

const HomePage = () => {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()
    return isAuth ? (
        <div>
            <h3>Welcome {email}!</h3>

            <button onClick={() => dispatch(removeUser())}>
                <span>Log out from {email} account</span>
            </button>
        </div>
    ) : (
        <div>
            <Navigate to={"/login"}/>
        </div>
    );
};

export default HomePage;