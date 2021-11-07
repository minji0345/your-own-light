import React from 'react';
import './maincontexts.css';
import { Routes, Route, Link } from "react-router-dom";

function Complete() {

    return(
        <div className="checkout-display">
            your order is complete
            <div className="back-home"><Link to="/main">Home</Link></div>
        </div>
    );
}

export default Complete;