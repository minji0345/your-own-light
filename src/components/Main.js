import React from 'react';
import './Main.css';
import About from './maincontexts/About';


function Main() {


    return (
        <div className="main">
            <div className="header">
                <div className="header-button">Home</div>
                <div className="header-button">Order</div>
                <div className="header-button">About</div>
            </div>
            <div className="main-context">
                main context Postion
            </div>
        </div>
    );
};


export default Main;