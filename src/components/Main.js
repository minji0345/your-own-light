import React, { useState } from 'react';
import './Main.css';
import About from './maincontexts/About';
import Home from './maincontexts/Home';
import Order from './maincontexts/Order';
import CheckOut from './maincontexts/CheckOut';


function Main() {
    const [contentType, setContentType] = useState(1)



    function displayHandler() {
        if (contentType === 1){
            return(
                <Home />
            );
        } else if (contentType === 2){
            return(
                <Order />
            )
        } else if (contentType === 3){
            return(
                <About/>
            )
        } else if (contentType === 4){
            return(
                <CheckOut/>
            )
        }
    }

    return (
        <div className="main">
            <div className="header">
                <div className="header-button" onClick={() => setContentType(1)} style={{color: contentType === 1 ? "#6A26ED" : '#000000' }}>Home</div>
                <div className="header-button" onClick={() => setContentType(2)} style={{color: contentType === 2 ? "#6A26ED" : '#000000' }}>Order</div>
                <div className="header-button" onClick={() => setContentType(3)} style={{color: contentType === 3 ? "#6A26ED" : '#000000' }}>About</div>
            </div>
            <div className="main-context">
                {displayHandler()}
            </div>
        </div>
    );
};


export default Main;