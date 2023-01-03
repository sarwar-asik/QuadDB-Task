import React from 'react';
import { useLocation } from 'react-router-dom';

const Screen2 = () => {
    const {state} = useLocation()
    const {show} = state;
    console.log(show);
    return (
        <div>
            <h2> Movie Details {state?.score} </h2>
            
        </div>
    );
};

export default Screen2;