import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div>
            <input type="email"
                   value={email}
                   onChange={(event) => setEmail(event.target.value)}
                   placeholder="email"
            />
            <input type="password"
                   value={password}
                   onChange={(event) => setPassword(event.target.value)}
                   placeholder="password"
            />
            <button onClick={() => handleClick(email, password)}>
                {title}
            </button>

        </div>
    );
};

export default Form;