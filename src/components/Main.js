import React, { useState } from 'react';
import './Main.css';
import About from './maincontexts/About';
import Home from './maincontexts/Home';
import Order from './maincontexts/Order';


function Main() {
    const [contentType, setContentType] = useState(0)

    function displayHandler() {
        if (contentType === 1){
            return( 
                <Home />
            );
        } else if (contentType === 2){
            return(
                <Order/>
            )
        }
    }

    return (
        <div className="main">
            <div className="header">
                <div className="header-button" onClick={() => setContentType(1)}>Home</div>
                <div className="header-button" onClick={() => setContentType(2)}>Order</div>
                <div className="header-button" onClick={() => setContentType(3)}>About</div>
            </div>
            <div className="main-context">
                {displayHandler()}
            </div>
        </div>
    );
};


export default Main;